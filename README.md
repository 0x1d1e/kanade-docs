# Kanade documentation

The documentation site for [Kanade](https://github.com/0x1d1e/kanade), a Rust desktop shell for
the [niri](https://github.com/niri-wm/niri) Wayland compositor, built with
[Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Requirements

Node.js 26 and npm 12, or any Node.js version Astro 7 supports.

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server on http://localhost:4321
npm run build      # static build into dist/, with the links validator enabled
npm run preview    # serve the built site
npm run check      # astro check (types and content)
npm run check:length # fail if a hand-written page is over 900 words
npm run sync       # regenerate the reference pages from the Kanade repository
```

## Site URL

No production domain is hard-coded. `astro.config.mjs` reads `SITE_URL` and falls back to
`http://localhost:4321`:

```sh
SITE_URL=https://docs.example.com npm run build
```

Set it when deploying so canonical URLs, Open Graph tags and the sitemap are absolute. Leaving it
unset is fine for local builds; the sitemap then points at localhost.

`lastUpdated: true` is enabled, but the page dates come from Git history of the checkout. This
directory is not a Git repository, so no dates appear until it becomes one.

## Content: written pages and generated pages

Most of the site is written by hand and reads like a guide: short pages with a table of keys or
verbs, one snippet, and a "See also" line. Nine pages are generated instead, because they are
reference material that has to stay word for word in step with the source.

**Hand-written** (`src/content/docs/`, everything without a generated marker):

- `index.mdx`: the splash landing page.
- `getting-started/`, `concepts/`, `surfaces/`, `configuration/`, `cli/`, `integrations/`: the
  guides, one page per feature area.
- `reference/branding.md`: the mascot and mark statement.

**Generated** by `scripts/sync-content.mjs`:

- `reference/config-defaults.md`: the commented TOML defaults block from
  `kanade/docs/wiki/Configuration.md`.
- `reference/cli.md`: the verb table from `kanade/docs/wiki/CLI.md`.
- `reference/domain-language.md`: `kanade/CONTEXT.md`.
- `reference/known-gaps/`: `kanade/docs/wiki/Limitations.md`, split by area into five pages plus an
  index table. Every bullet is kept.
- `decisions/index.md`: a table of `kanade/docs/adr/`, each title linking to the file on GitHub.
  Individual decision records are deliberately not ported.

The script also copies both PNGs into `src/assets/` and derives `public/favicon.png` from the mark.

The script reads `../kanade` by default; point it elsewhere with `KANADE_SRC`:

```sh
KANADE_SRC=/path/to/kanade npm run sync
```

It prunes pages carrying its own generated marker whose source disappeared, and never touches a
hand-written page, so a re-sync keeps the generated set matching upstream and is safe to repeat. Do
not edit a generated page: change the source in the Kanade repository and re-run the script. The
conversions it applies are limited to the first H1 (moved into `title`), links (site paths for
pages that exist here, GitHub blob URLs for everything else, fragments dropped on site paths), and
GitHub alert blockquotes (Starlight asides). Prose is otherwise copied verbatim, including the
repository's own caveats about unverified behaviour.

`npm run check:length` skips generated pages and fails on any hand-written page over 900 words.

## Layout

```
astro.config.mjs           site title, sidebar, GitHub link, links validator
src/content.config.ts      Starlight docs collection
src/styles/theme.css       accent colours only
src/assets/                mascot and mark, copied from the Kanade repository
src/content/docs/          hand-written guides plus the generated reference pages
scripts/sync-content.mjs   the generator described above
scripts/check-length.mjs   the 900-word budget for hand-written pages
```

The sidebar runs Start here, Getting started, Concepts, Surfaces, Configuration, CLI, Integrations
and Reference, in that order.
