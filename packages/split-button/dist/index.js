require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const dropdown = require("@launchpad-ui/dropdown");
const button = require("@launchpad-ui/button");
const SplitButtonContext = react.createContext({
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
  return /* @__PURE__ */ jsxRuntime.jsx(SplitButtonContext.Provider, {
    value: {
      disabled: !!disabled,
      kind,
      size
    },
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      ...rest,
      className: classix.cx("SplitButton", className),
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
  } = react.useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  return /* @__PURE__ */ jsxRuntime.jsx(dropdown.Dropdown, {
    ...rest,
    placement,
    enableArrow: false,
    restrictWidth: false,
    disabled: isDisabled,
    "data-test-id": testId,
    children
  });
};
const SplitButtonDropdownButton = react.forwardRef((props, ref) => {
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
  } = react.useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  const label = react.useMemo(() => {
    let value = "More options";
    if (isDisabled) {
      value = "These options are unavailable";
    } else if (ariaLabel) {
      value = ariaLabel;
    }
    return value;
  }, [ariaLabel, isDisabled]);
  return /* @__PURE__ */ jsxRuntime.jsx(dropdown.DropdownButton, {
    ...rest,
    ref,
    className: classix.cx("SplitButton-drop", className),
    kind,
    disabled: isDisabled,
    size,
    "data-test-id": testId,
    "aria-label": label
  });
});
SplitButtonDropdownButton.displayName = "SplitButtonDropdownButton";
const SplitButtonMainButton = react.forwardRef((props, ref) => {
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
  } = react.useContext(SplitButtonContext);
  const isDisabled = parentDisabled || disabled;
  const classes = classix.cx("SplitButton-main", className);
  const label = react.useMemo(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(button.Button, {
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
exports.SplitButton = SplitButton;
exports.SplitButtonDropdown = SplitButtonDropdown;
exports.SplitButtonDropdownButton = SplitButtonDropdownButton;
exports.SplitButtonMainButton = SplitButtonMainButton;
//# sourceMappingURL=index.js.map
