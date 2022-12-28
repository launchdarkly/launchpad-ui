"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const focus = require("@react-aria/focus");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const FocusTrapContext = react.createContext({
  contain: true
});
const useFocusTrapContext = () => react.useContext(FocusTrapContext);
const FocusTrap = (props) => {
  const {
    contain
  } = useFocusTrapContext();
  return /* @__PURE__ */ jsxRuntime.jsx(focus.FocusScope, {
    contain,
    ...props
  });
};
exports.FocusTrap = FocusTrap;
exports.FocusTrapContext = FocusTrapContext;
exports.useFocusTrapContext = useFocusTrapContext;
//# sourceMappingURL=index.js.map
