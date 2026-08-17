---
'@launchpad-ui/components': minor
---

Add `./styles/base.css` and `./styles/themes.css` subpath exports so consumers can import this package's base and theme stylesheets by package specifier instead of a path into its source tree. Both exports name the unbuilt stylesheet, so a consumer that compiles this package's CSS to its own output location still resolves them, and both files are now part of the published package.
