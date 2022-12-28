"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const react = require("react");
const reactDom = require("react-dom");
const jsxRuntime = require("react/jsx-runtime");
const Portal = react.forwardRef(({
  container = ((_a) => (_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body)(),
  "data-test-id": testId = "portal",
  ...props
}, ref) => {
  const [mounted, setMounted] = react.useState(false);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted && container ? reactDom.createPortal(/* @__PURE__ */ jsxRuntime.jsx("div", {
    ...props,
    ref,
    "data-test-id": testId
  }), container) : null;
});
Portal.displayName = "Portal";
exports.Portal = Portal;
//# sourceMappingURL=index.js.map
