# Contributing to the `LaunchPad Design System` VS Code extension

We're happily taking pull requests! Please read the `launchpad-ui` contributing docs for general guidance on contributing to this codebase.

## Development Workflow

To get started with this project:

1. Build the extension

```sh
$ pnpm nx run launchpad-design-system:build
```

2. Open the [VS Code debugger](https://code.visualstudio.com/api/get-started/your-first-extension#debugging-the-extension)
3. Select `launchpad-design-system: debug` and press <kbd>F5</kbd> to start debugging
4. Open a `.css` file in the `Extensions Development Host` window
5. Start typing the extension trigger characters `--` to bring up the LaunchPad design tokens autocomplete
6. Start making your changes to `launchpad-design-system`

## Install locally

To install the extension locally first build it and then [install the resulting .vsix file](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix).