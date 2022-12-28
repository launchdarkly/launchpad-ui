require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const classix = require("classix");
const jsxRuntime = require("react/jsx-runtime");
const Chip$1 = "_Chip_1jc23_24";
const styles = {
  Chip: Chip$1,
  "Chip--normal": "_Chip--normal_1jc23_39",
  "Chip--large": "_Chip--large_1jc23_45",
  "Chip--subtle": "_Chip--subtle_1jc23_51",
  "Chip--default": "_Chip--default_1jc23_55",
  "Chip--info": "_Chip--info_1jc23_60",
  "Chip--new": "_Chip--new_1jc23_70",
  "Chip--beta": "_Chip--beta_1jc23_80",
  "Chip--success": "_Chip--success_1jc23_90",
  "Chip--warning": "_Chip--warning_1jc23_100",
  "Chip--error": "_Chip--error_1jc23_110",
  "Chip--inactive": "_Chip--inactive_1jc23_120",
  "Chip--label": "_Chip--label_1jc23_131",
  "Chip--clickable": "_Chip--clickable_1jc23_141",
  "Chip--federal": "_Chip--federal_1jc23_154"
};
const Chip = ({
  kind = "default",
  size = "normal",
  subtle = false,
  onClick,
  onKeyDown,
  className,
  children,
  "data-test-id": testId = "chip",
  ...rest
}) => {
  const isInteractive = !!(onClick || onKeyDown);
  const classes = classix.cx(styles.Chip, styles[`Chip--${kind}`], styles[`Chip--${size}`], className, subtle && styles["Chip--subtle"], isInteractive && styles["Chip--clickable"]);
  return /* @__PURE__ */ jsxRuntime.jsx("span", {
    className: classes,
    "data-test-id": testId,
    ...isInteractive ? {
      onClick,
      onKeyDown,
      tabIndex: 0,
      role: "button"
    } : {},
    ...rest,
    children
  });
};
exports.Chip = Chip;
//# sourceMappingURL=index.js.map
