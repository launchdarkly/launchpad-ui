import './style.css';
import { useState, useEffect } from "react";
import { cx } from "classix";
import { jsxs, jsx } from "react/jsx-runtime";
const DelayedIndicator = ({
  children,
  delayMs = 250
}) => {
  const [renderChildren, setRenderChildren] = useState(false);
  useEffect(() => {
    let delay = void 0;
    if (typeof delayMs === "number") {
      if (delayMs === 0) {
        setRenderChildren(true);
      } else {
        delay = setTimeout(() => {
          setRenderChildren(true);
        }, delayMs);
      }
    }
    return () => {
      if (delay) {
        clearTimeout(delay);
      }
    };
  }, [delayMs]);
  return renderChildren ? children : null;
};
const Progress$1 = "_Progress_sueab_11";
const indeterminate = "_indeterminate_sueab_1";
const styles = {
  Progress: Progress$1,
  "Progress--indeterminate": "_Progress--indeterminate_sueab_17",
  indeterminate,
  "Progress-track": "_Progress-track_sueab_21",
  "Progress-head": "_Progress-head_sueab_26"
};
const clamp = (number, lower, upper) => upper ? Math.min(Math.max(number, lower), upper) : Math.min(number, lower);
const Progress = ({
  value,
  size = "small",
  "data-test-id": testId = "progress",
  className,
  delayMs = 0
}) => {
  const dimensions = {
    small: {
      diameter: 16
    },
    large: {
      diameter: 24
    },
    xLarge: {
      diameter: 32
    }
  };
  const isIndeterminate = value === void 0 || value === null;
  const diameter = dimensions[size] && dimensions[size].diameter || dimensions.small.diameter;
  const strokeWidth = diameter * (isIndeterminate ? 0.1 : 0.5);
  const radius = diameter * 0.5 - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const indicator = /* @__PURE__ */ jsxs("svg", {
    className: cx(styles.Progress, isIndeterminate && styles["Progress--indeterminate"], className),
    width: diameter,
    height: diameter,
    viewBox: `0 0 ${diameter} ${diameter}`,
    "data-test-id": testId,
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuetext": "loading",
    "aria-valuemax": 100,
    children: [/* @__PURE__ */ jsx("circle", {
      className: styles["Progress-track"],
      cx: diameter / 2,
      cy: diameter / 2,
      r: radius,
      strokeWidth
    }), /* @__PURE__ */ jsx("circle", {
      className: styles["Progress-head"],
      cx: diameter / 2,
      cy: diameter / 2,
      r: radius,
      strokeWidth,
      strokeDasharray: circumference,
      strokeDashoffset: circumference * (1 - (value === void 0 || value === null ? 0.25 : clamp(value, 0, 1)))
    })]
  });
  return delayMs ? /* @__PURE__ */ jsx(DelayedIndicator, {
    delayMs,
    children: indicator
  }) : indicator;
};
export {
  DelayedIndicator,
  Progress
};
//# sourceMappingURL=index.es.js.map
