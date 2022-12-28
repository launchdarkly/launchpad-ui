require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const popover = require("@launchpad-ui/popover");
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const Tooltip$1 = "_Tooltip_1am8i_1";
const styles = {
  Tooltip: Tooltip$1,
  "Tooltip-popover-content": "_Tooltip-popover-content_1am8i_5"
};
const TooltipBase = ({
  className,
  children,
  targetClassName,
  hoverCloseDelay = 0,
  "data-test-id": testId = "tooltip",
  popoverContentClassName,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(popover.Popover, {
    enforceFocus: false,
    interactionKind: "hover-or-focus",
    hoverCloseDelay,
    popoverClassName: classix.cx(styles.Tooltip, className),
    popoverContentClassName: classix.cx(popoverContentClassName, styles["Tooltip-popover-content"]),
    targetClassName,
    "data-test-id": testId,
    ...props,
    children
  });
};
const Tooltip = react.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(TooltipBase, {
  ...props,
  targetElementRef: ref
}));
Tooltip.displayName = "Tooltip";
exports.Tooltip = Tooltip;
exports.TooltipBase = TooltipBase;
//# sourceMappingURL=index.js.map
