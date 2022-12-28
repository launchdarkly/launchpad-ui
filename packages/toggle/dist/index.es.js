import './style.css';
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { cx } from "classix";
import { useRef } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
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
  const state = useToggleState(props);
  const inputRef = useRef(null);
  const {
    inputProps
  } = useSwitch(props, state, inputRef);
  const classes = cx(styles.Toggle, className, checked && styles["Toggle--on"], disabled && styles["Toggle--disabled"]);
  const handleChange = () => {
    if (disabled || !onChange) {
      return;
    }
    onChange();
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classes,
    children: [/* @__PURE__ */ jsx("input", {
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
    }), /* @__PURE__ */ jsxs("label", {
      className: styles["Toggle-wrapper"],
      htmlFor: id,
      children: [/* @__PURE__ */ jsx(VisuallyHidden, {
        children: /* @__PURE__ */ jsx("div", {
          children
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: styles["Toggle-labels"],
        "aria-hidden": true,
        children: [/* @__PURE__ */ jsx("div", {
          className: cx(styles["Toggle-label"], styles["Toggle-on"]),
          children: toggleOnText
        }), /* @__PURE__ */ jsx("div", {
          className: cx(styles["Toggle-label"], styles["Toggle-off"]),
          children: toggleOffText
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: styles["Toggle-pin"]
      })]
    })]
  });
};
export {
  Toggle
};
//# sourceMappingURL=index.es.js.map
