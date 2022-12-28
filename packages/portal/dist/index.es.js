import { forwardRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { jsx } from "react/jsx-runtime";
const Portal = forwardRef(({
  container = ((_a) => (_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body)(),
  "data-test-id": testId = "portal",
  ...props
}, ref) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted && container ? createPortal(/* @__PURE__ */ jsx("div", {
    ...props,
    ref,
    "data-test-id": testId
  }), container) : null;
});
Portal.displayName = "Portal";
export {
  Portal
};
//# sourceMappingURL=index.es.js.map
