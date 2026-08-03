---
"@launchpad-ui/box": patch
"@launchpad-ui/button": patch
"@launchpad-ui/components": patch
"@launchpad-ui/core": patch
"@launchpad-ui/drawer": patch
"@launchpad-ui/dropdown": patch
"@launchpad-ui/filter": patch
"@launchpad-ui/focus-trap": patch
"@launchpad-ui/form": patch
"@launchpad-ui/icons": patch
"@launchpad-ui/menu": patch
"@launchpad-ui/modal": patch
"@launchpad-ui/navigation": patch
"@launchpad-ui/overlay": patch
"@launchpad-ui/popover": patch
"@launchpad-ui/portal": patch
"@launchpad-ui/table": patch
"@launchpad-ui/tokens": patch
"@launchpad-ui/tooltip": patch
"@launchpad-ui/vars": patch
---

Replace the `rolldown-vite` override with stock `vite`, and swap the build-time `@vitejs/plugin-react-oxc` plugin for `@vitejs/plugin-react-swc` (already used by tests). No public API changed. Build output was verified equivalent: for every published package, the emitted `.d.ts`/`.json`/`.svg` files are byte-identical, CSS output is byte-identical apart from one dropped `rolldown-vite`-specific comment marker, and JS output is semantically identical (confirmed by diffing `esbuild --minify`-normalized bundles, which strips only bundler-specific formatting).
