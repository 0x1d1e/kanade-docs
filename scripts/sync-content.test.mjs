import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const site = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const source = path.resolve(process.env.KANADE_SRC ?? path.join(site, '..', 'kanade'));
const groups = ['shell', 'capture', 'lock-and-idle', 'clipboard-and-privacy', 'calendar-and-settings'];
const bullets = (text) => text.split('\n').filter((line) => line.startsWith('- '));

test('sync keeps every limitation in its area across reordering and rejects source drift', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'kanade-docs-sync-'));
  try {
    const fixture = path.join(root, 'source');
    const output = path.join(root, 'site');
    await mkdir(path.join(output, 'scripts'), { recursive: true });
    await cp(path.join(site, 'scripts/sync-content.mjs'), path.join(output, 'scripts/sync-content.mjs'));
    await symlink(path.join(site, 'node_modules'), path.join(output, 'node_modules'), 'dir');
    for (const file of [
      'CONTEXT.md', 'docs/wiki/Configuration.md', 'docs/wiki/CLI.md',
      'docs/wiki/Limitations.md', 'docs/adr', 'docs/assets',
    ]) {
      await mkdir(path.dirname(path.join(fixture, file)), { recursive: true });
      await cp(path.join(source, file), path.join(fixture, file), { recursive: true });
    }
    const script = path.join(output, 'scripts/sync-content.mjs');
    const options = { env: { ...process.env, KANADE_SRC: fixture }, encoding: 'utf8' };
    const sync = () => execFileSync(process.execPath, [script], options);
    const pages = async () => Object.fromEntries(await Promise.all(groups.map(async (group) => [
      group,
      bullets(await readFile(path.join(output, `src/content/docs/reference/known-gaps/${group}.md`), 'utf8')),
    ])));
    const limitations = path.join(fixture, 'docs/wiki/Limitations.md');
    const original = await readFile(limitations, 'utf8');
    assert.match(sync(), /Synced 10 generated pages/);
    const baseline = await pages();
    assert.equal(Object.values(baseline).flat().length, bullets(original).length);
    for (const [group, prefix] of [
      ['capture', '- The annotation editor ('],
      ['lock-and-idle', "- Polkit's prompt needs"],
      ['clipboard-and-privacy', "- Banners show a notification's text on screencasts"],
      ['calendar-and-settings', '- The Calendar Surface changes'],
      ['shell', '- The Desk ('],
    ]) {
      assert.ok(baseline[group].some((bullet) => bullet.startsWith(prefix)), `${prefix} belongs in ${group}`);
    }
    await writeFile(limitations, `# Limitations\n\n${bullets(original).reverse().join('\n')}\n`);
    sync();
    const reordered = await pages();
    for (const group of groups) {
      assert.deepEqual(reordered[group], [...baseline[group]].reverse(), `${group} follows source order without changing area`);
    }
    for (const [text, error] of [
      [`${original}\n- A new unclassified limitation.\n`, /Expected one known-gaps group, found 0/],
      [`${original}\n${bullets(original)[0]}\n`, /prefix matches two bullets/],
      [original.replace(`${bullets(original)[0]}\n`, ''), /prefix matches no bullet/],
    ]) {
      await writeFile(limitations, text);
      const result = spawnSync(process.execPath, [script], options);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, error);
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
