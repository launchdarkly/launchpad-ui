---
'@launchpad-ui/components': patch
'@launchpad-ui/drawer': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/navigation': patch
'@launchpad-ui/table': patch
---

Every generated CSS Module class name in this package gets a new hash prefix. One
stylesheet here now imports the shared media queries through
`@launchpad-ui/tokens/media-queries.css` instead of a path into that package's build
output, and scoped class names are hashed from stylesheet content, so changing that line
reseeds every class the package emits. Each class keeps its readable suffix and changes
only in the prefix.

The styles themselves are unchanged: comparing the built CSS with the hash prefixes renamed
consistently gives an identical file. The published JavaScript and CSS are generated
together and agree with each other, so importing this package normally is unaffected. If
you have a selector or a test that targets one of these generated class names directly, it
needs updating.
