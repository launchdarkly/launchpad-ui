import './style.css';
import { Popover } from "@launchpad-ui/popover";
import { cx } from "classix";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(Popover, {
    enforceFocus: false,
    interactionKind: "hover-or-focus",
    hoverCloseDelay,
    popoverClassName: cx(styles.Tooltip, className),
    popoverContentClassName: cx(popoverContentClassName, styles["Tooltip-popover-content"]),
    targetClassName,
    "data-test-id": testId,
    ...props,
    children
  });
};
const Tooltip = forwardRef((props, ref) => /* @__PURE__ */ jsx(TooltipBase, {
  ...props,
  targetElementRef: ref
}));
Tooltip.displayName = "Tooltip";
export {
  Tooltip,
  TooltipBase
};
//# sourceMappingURL=index.es.js.map
