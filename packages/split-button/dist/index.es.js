import './style.css';
import { cx } from "classix";
import { createContext, useContext, forwardRef, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
import { Dropdown, DropdownButton } from "@launchpad-ui/dropdown";
import { Button } from "@launchpad-ui/button";
const SplitButtonContext = createContext({
  disabled: false,
  kind: "default",
  size: "normal"
});
const SplitButton$1 = "";
const SplitButton = ({
  disabled,
  kind,
  size,
  children,
  className,
  "data-test-id": testId = "split-button",
  ...rest
}) => {
  return /* @__PURE__ */ jsx(SplitButtonContext.Provider, {
    value: {
      disabled: !!disabled,
      kind,
      size
    },
    children: /* @__PURE__ */ jsx("div", {
      ...rest,
      className: cx("SplitButton", className),
      "data-test-id": testId,
      children
    })
  });
};
SplitButton.displayName = "SplitButton";
const SplitButtonDropdown = ({
  disabled,
  children,
  placement = "bottom-end",
  "data-test-id": testId = "split-button-dropdown",
  ...rest
}) => {
  const {
    disabled: parentDisabled
  } = useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  return /* @__PURE__ */ jsx(Dropdown, {
    ...rest,
    placement,
    enableArrow: false,
    restrictWidth: false,
    disabled: isDisabled,
    "data-test-id": testId,
    children
  });
};
const SplitButtonDropdownButton = forwardRef((props, ref) => {
  const {
    disabled,
    className,
    "aria-label": ariaLabel,
    "data-test-id": testId = "split-button-dropdown-button",
    ...rest
  } = props;
  const {
    disabled: parentDisabled,
    kind,
    size
  } = useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  const label = useMemo(() => {
    let value = "More options";
    if (isDisabled) {
      value = "These options are unavailable";
    } else if (ariaLabel) {
      value = ariaLabel;
    }
    return value;
  }, [ariaLabel, isDisabled]);
  return /* @__PURE__ */ jsx(DropdownButton, {
    ...rest,
    ref,
    className: cx("SplitButton-drop", className),
    kind,
    disabled: isDisabled,
    size,
    "data-test-id": testId,
    "aria-label": label
  });
});
SplitButtonDropdownButton.displayName = "SplitButtonDropdownButton";
const SplitButtonMainButton = forwardRef((props, ref) => {
  const {
    disabled,
    children,
    className,
    "aria-label": ariaLabel,
    "data-test-id": testId = "split-button-main-button",
    ...rest
  } = props;
  const {
    disabled: parentDisabled,
    kind,
    size
  } = useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  const classes = cx("SplitButton-main", className);
  const label = useMemo(() => {
    let value;
    if (isDisabled) {
      value = "These options are unavailable";
    } else if (ariaLabel) {
      value = ariaLabel;
    } else {
      value = "More options";
    }
    return value;
  }, [ariaLabel, isDisabled]);
  return /* @__PURE__ */ jsx(Button, {
    className: classes,
    disabled: isDisabled,
    kind,
    size,
    "aria-label": label,
    ref,
    "data-test-id": testId,
    ...rest,
    children
  });
});
SplitButtonMainButton.displayName = "SplitButtonMainButton";
export {
  SplitButton,
  SplitButtonDropdown,
  SplitButtonDropdownButton,
  SplitButtonMainButton
};
//# sourceMappingURL=index.es.js.map
