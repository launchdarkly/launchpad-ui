require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const classix = require("classix");
const Slider$1 = "_Slider_zl0j4_6";
const styles = {
  Slider: Slider$1,
  "Slider-track": "_Slider-track_zl0j4_94",
  "Slider-fill": "_Slider-fill_zl0j4_104",
  "Slider--disabled": "_Slider--disabled_zl0j4_115"
};
const Slider = ({
  value,
  min,
  max,
  step,
  readOnly,
  hideTrack,
  className,
  disabled,
  onChange,
  id,
  "data-test-id": testId = "slider"
}) => {
  const valueHandler = (callback) => (event) => callback(parseFloat(event.currentTarget.value));
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: classix.cx(styles.Slider, (disabled || readOnly) && styles["Slider--disabled"], className),
      "data-test-id": testId,
      children: [
        !hideTrack && /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["Slider-track"] }),
        !hideTrack && /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["Slider-fill"], style: { width: `${value}%` } }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "range",
            value,
            min,
            max,
            step,
            readOnly,
            disabled: disabled || readOnly,
            id,
            onChange: valueHandler(onChange)
          }
        )
      ]
    }
  );
};
exports.Slider = Slider;
//# sourceMappingURL=index.js.map
