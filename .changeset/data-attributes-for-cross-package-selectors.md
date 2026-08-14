---
'@launchpad-ui/popover': patch
'@launchpad-ui/button': patch
'@launchpad-ui/tooltip': patch
'@launchpad-ui/menu': patch
'@launchpad-ui/form': patch
---

Replace class-name substring selectors with stable data attributes for cross-package styling.

`Popover` now renders `data-popover-target` on its target element and `data-popover-content` on its content element. `Button` and `IconButton` render `data-button`, and `ButtonGroup` renders `data-button-group`. Stylesheets in `button`, `tooltip`, `menu` and `form` that previously matched one of those elements by a substring of its generated CSS module class name (`[class*='_Popover-target']`, `[class*='_Popover-content']`, `[class*='_Button']`) now match the data attribute instead.

A generated class name is a build output, and its format follows the CSS module loader configuration rather than any published contract. A data attribute holds still. The selectors match the same elements as before.
