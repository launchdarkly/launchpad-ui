require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const _switch = require("@react-aria/switch");
const visuallyHidden = require("@react-aria/visually-hidden");
const toggle = require("@react-stately/toggle");
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const Toggle$1 = "_Toggle_19bpv_40";
const styles = {
  Toggle: Toggle$1,
  "Toggle--on": "_Toggle--on_19bpv_55",
  "Toggle--disabled": "_Toggle--disabled_19bpv_60",
  "Toggle-input": "_Toggle-input_19bpv_72",
  "Toggle-wrapper": "_Toggle-wrapper_19bpv_78",
  "Toggle-labels": "_Toggle-labels_19bpv_99",
  "Toggle-label": "_Toggle-label_19bpv_99",
  "Toggle-on": "_Toggle-on_19bpv_123",
  "Toggle-off": "_Toggle-off_19bpv_128",
  "Toggle--off": "_Toggle--off_19bpv_142",
  "Toggle-pin": "_Toggle-pin_19bpv_154"
};
const Toggle = (props) => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    checked,
    children,
    className,
    disabled,
    id = "id",
    onChange,
    toggleOffText = "Off",
    toggleOnText = "On",
    "data-test-id": testId = "toggle"
  } = props;
  const state = toggle.useToggleState(props);
  const inputRef = react.useRef(null);
  const {
    inputProps
  } = _switch.useSwitch(props, state, inputRef);
  const classes = classix.cx(styles.Toggle, className, checked && styles["Toggle--on"], disabled && styles["Toggle--disabled"]);
  const handleChange = () => {
    if (disabled || !onChange) {
      return;
    }
    onChange();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: classes,
    children: [/* @__PURE__ */ jsxRuntime.jsx("input", {
      ...inputProps,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      checked,
      className: styles["Toggle-input"],
      disabled,
      id,
      "data-test-id": testId,
      type: "checkbox",
      onChange: handleChange,
      ref: inputRef
    }), /* @__PURE__ */ jsxRuntime.jsxs("label", {
      className: styles["Toggle-wrapper"],
      htmlFor: id,
      children: [/* @__PURE__ */ jsxRuntime.jsx(visuallyHidden.VisuallyHidden, {
        children: /* @__PURE__ */ jsxRuntime.jsx("div", {
          children
        })
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: styles["Toggle-labels"],
        "aria-hidden": true,
        children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
          className: classix.cx(styles["Toggle-label"], styles["Toggle-on"]),
          children: toggleOnText
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: classix.cx(styles["Toggle-label"], styles["Toggle-off"]),
          children: toggleOffText
        })]
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: styles["Toggle-pin"]
      })]
    })]
  });
};
exports.Toggle = Toggle;
//# sourceMappingURL=index.js.map
