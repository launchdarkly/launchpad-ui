---
"launchpad-design-system": patch
---

Upgrade the repo to pnpm 11. The VS Code extension's `build` and `publish` scripts now pass `--allow-build` flags to `pnpm dlx` so that `@vscode/vsce-sign` and `keytar` postinstalls run under pnpm 11's stricter build-script policy.
