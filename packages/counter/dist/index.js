require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const classix = require("classix");
const Counter$1 = "_Counter_3smiw_1";
const styles = {
  Counter: Counter$1,
  "Counter--subtle": "_Counter--subtle_3smiw_14"
};
const Counter = ({
  value,
  className,
  subtle,
  "data-test-id": testId = "counter",
  ...rest
}) => {
  const classes = classix.cx(styles.Counter, className, subtle && styles["Counter--subtle"]);
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: classes, "data-test-id": testId, ...rest, children: value });
};
exports.Counter = Counter;
//# sourceMappingURL=index.js.map
