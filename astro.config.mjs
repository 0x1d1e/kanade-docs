// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  // No production domain is configured; set SITE_URL when deploying so
  // canonical URLs and the sitemap are absolute.
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  integrations: [
    starlight({
      title: 'Kanade',
      description: 'One island that changes shape for what is happening: a desktop shell for niri, in Rust.',
      logo: { src: './src/assets/kanade-mark.png', alt: 'Kanade' },
      favicon: '/favicon.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/0x1d1e/kanade' }],
      lastUpdated: true,
      customCss: ['./src/styles/theme.css'],
      plugins: [starlightLinksValidator()],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Overview', link: '/' }] },
        {
          label: 'Getting started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Running Kanade', slug: 'getting-started/running' },
            { label: 'niri rules', slug: 'getting-started/niri-rules' },
            { label: 'Keybinds', slug: 'getting-started/keybinds' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'The Island', slug: 'concepts/island' },
            { label: 'Surfaces', slug: 'concepts/surfaces' },
            { label: 'Modules', slug: 'concepts/modules' },
          ],
        },
        {
          label: 'Surfaces',
          items: [
            { label: 'Media', slug: 'surfaces/media' },
            { label: 'Notifications', slug: 'surfaces/notifications' },
            { label: 'Controls', slug: 'surfaces/controls' },
            { label: 'Launcher', slug: 'surfaces/launcher' },
            { label: 'Clipboard', slug: 'surfaces/clipboard' },
            { label: 'Calendar', slug: 'surfaces/calendar' },
            { label: 'Weather', slug: 'surfaces/weather' },
            { label: 'Timer', slug: 'surfaces/timer' },
            { label: 'Capture', slug: 'surfaces/capture' },
            { label: 'Wallpapers', slug: 'surfaces/wallpapers' },
            { label: 'Keys', slug: 'surfaces/keys' },
            { label: 'Session', slug: 'surfaces/session' },
            { label: 'Tray', slug: 'surfaces/tray' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'How configuration works', slug: 'configuration' },
            { label: 'Appearance', slug: 'configuration/appearance' },
            { label: 'Shell and Island', slug: 'configuration/shell' },
            { label: 'Dock', slug: 'configuration/dock' },
            { label: 'Notifications', slug: 'configuration/notifications' },
            { label: 'Media', slug: 'configuration/media' },
            { label: 'Timer', slug: 'configuration/timer' },
            { label: 'Calendar', slug: 'configuration/calendar' },
            { label: 'Weather', slug: 'configuration/weather' },
            { label: 'Recording', slug: 'configuration/recording' },
            { label: 'Launcher', slug: 'configuration/launcher' },
            { label: 'Gestures', slug: 'configuration/gestures' },
            { label: 'Hooks', slug: 'configuration/hooks' },
            { label: 'Integrations', slug: 'configuration/integrations' },
            { label: 'System', slug: 'configuration/system' },
          ],
        },
        {
          label: 'CLI',
          items: [
            { label: 'How the CLI works', slug: 'cli' },
            { label: 'Surfaces', slug: 'cli/surfaces' },
            { label: 'Media and capture', slug: 'cli/media-and-capture' },
            { label: 'System controls', slug: 'cli/system-controls' },
            { label: 'Activity', slug: 'cli/activity' },
            { label: 'Config and niri', slug: 'cli/config' },
            { label: 'Session and UI', slug: 'cli/session-and-ui' },
            { label: 'Maintenance', slug: 'cli/maintenance' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Dictation', slug: 'integrations/dictation' },
            { label: 'Google Calendar', slug: 'integrations/google-calendar' },
            { label: 'Agent hooks', slug: 'integrations/agent-hooks' },
            { label: 'SDDM', slug: 'integrations/sddm' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Config defaults', slug: 'reference/config-defaults' },
            { label: 'CLI reference', slug: 'reference/cli' },
            { label: 'Domain language', slug: 'reference/domain-language' },
            { label: 'Branding', slug: 'reference/branding' },
            { label: 'Known gaps', slug: 'reference/known-gaps' },
            { label: 'Decisions', slug: 'decisions' },
          ],
        },
      ],
    }),
  ],
});
