import { FocusScope } from "@react-aria/focus";
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
const FocusTrapContext = createContext({
  contain: true
});
const useFocusTrapContext = () => useContext(FocusTrapContext);
const FocusTrap = (props) => {
  const {
    contain
  } = useFocusTrapContext();
  return /* @__PURE__ */ jsx(FocusScope, {
    contain,
    ...props
  });
};
export {
  FocusTrap,
  FocusTrapContext,
  useFocusTrapContext
};
//# sourceMappingURL=index.es.js.map
