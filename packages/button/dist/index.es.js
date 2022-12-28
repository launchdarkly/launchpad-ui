import './style.css';
import { Slot } from "@radix-ui/react-slot";
import { cx } from "classix";
import { forwardRef, cloneElement, memo, isValidElement, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
const Button$1 = "";
const ButtonComponent = forwardRef((props, ref) => {
  const {
    icon,
    children,
    className,
    size,
    fit,
    kind = "default",
    isLoading = false,
    loadingText,
    renderIconFirst = false,
    disabled = false,
    asChild = false,
    onKeyDown,
    onClick,
    type = "button",
    "data-test-id": testId = "button",
    ...rest
  } = props;
  const Component = asChild ? Slot : "button";
  const classes = cx("Button", `Button--${kind}`, disabled && "Button--disabled", size && `Button--${size}`, fit && "Button--fit", className);
  const renderIcon = icon && cloneElement(icon, {
    key: "icon",
    size: icon.props.size || "small",
    "aria-hidden": true,
    className: cx(icon.props.className, "Button-icon")
  });
  const getFinalChildren = (c) => [renderIconFirst && renderIcon, isLoading && /* @__PURE__ */ jsx("span", {
    children: loadingText || c
  }, "text"), !isLoading && c && /* @__PURE__ */ jsx("span", {
    children: c
  }, "text"), !renderIconFirst && renderIcon, isLoading && /* @__PURE__ */ jsx("span", {
    children: "\u2026"
  }, "spinner")];
  const renderChildren = () => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, void 0, getFinalChildren(children.props.children));
    }
    return getFinalChildren(children);
  };
  const isDisabled = disabled || isLoading;
  const handleClick = (event) => {
    if (disabled)
      return event.preventDefault();
    onClick && onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const spacebarKeys = ["Spacebar", " "];
      if (spacebarKeys.includes(event.key)) {
        event.preventDefault();
        const link = event.target;
        link.click();
      }
    }
  };
  return /* @__PURE__ */ jsx(Component, {
    className: classes,
    ref,
    onClick: handleClick,
    onKeyDown: onKeyDown || handleKeyDown,
    disabled: isDisabled,
    type,
    "data-test-id": testId,
    ...rest,
    children: renderChildren()
  });
});
ButtonComponent.displayName = "Button";
const Button = memo(ButtonComponent);
const ButtonGroup$1 = "";
const ButtonGroup = ({
  spacing = "normal",
  className,
  children,
  "data-test-id": testId = "button-group",
  ...rest
}) => {
  const classes = cx("ButtonGroup", `ButtonGroup--${spacing}`, className);
  return /* @__PURE__ */ jsx("div", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children
  });
};
const UploadButton = ({
  id,
  className,
  children,
  disabled,
  accept,
  maxSize,
  onSelect,
  "data-test-id": testId = "upload-button",
  ...rest
}) => {
  const inputRef = useRef(null);
  const classes = cx("UploadButton", className);
  const handleClick = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.click();
  };
  const handleKeyDown = (event) => {
    var _a;
    const actionKeys = ["Spacebar", " ", "Enter"];
    if (actionKeys.includes(event.key)) {
      event.preventDefault();
      (_a = inputRef.current) == null ? void 0 : _a.click();
    }
  };
  const handleChange = (event) => {
    var _a;
    let file;
    if (event) {
      const e = event;
      file = (_a = e.target.files) == null ? void 0 : _a[0];
    }
    if (file && file.size > maxSize) {
      return;
    }
    event == null ? void 0 : event.persist();
    onSelect(file);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxs("span", {
    className: classes,
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsx("input", {
      ref: inputRef,
      className: "UploadButton-input",
      id,
      style: {
        display: "none"
      },
      type: "file",
      onChange: handleChange,
      disabled,
      accept,
      "data-test-id": "upload-button-input"
    }), /* @__PURE__ */ jsx("label", {
      htmlFor: id,
      className: "UploadButton-label",
      children: /* @__PURE__ */ jsx(Button, {
        ...rest,
        disabled,
        tabIndex: disabled ? -1 : 0,
        role: "button",
        onKeyDown: handleKeyDown,
        onClick: handleClick,
        children
      })
    })]
  });
};
const IconButtonComponent = forwardRef((props, ref) => {
  const {
    icon,
    children,
    className,
    size = "normal",
    kind = "minimal",
    disabled = false,
    asChild = false,
    onKeyDown,
    onClick,
    type = "button",
    "data-test-id": testId = "icon-button",
    ...rest
  } = props;
  const Component = asChild ? Slot : "button";
  const classes = cx("IconButton", "Button", "Button--icon", `Button--${kind}`, disabled && "Button--disabled", size && `Button--${size}`, className);
  const clonedIcon = cloneElement(icon, {
    key: "icon",
    size: icon.props.size || "medium",
    "aria-hidden": true,
    className: cx(icon.props.className, "Button-icon")
  });
  const renderChildren = () => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, void 0, clonedIcon);
    }
    return clonedIcon;
  };
  const handleClick = (event) => {
    if (disabled)
      return event.preventDefault();
    onClick && onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const spacebarKeys = ["Spacebar", " "];
      if (spacebarKeys.includes(event.key)) {
        event.preventDefault();
        const link = event.target;
        link.click();
      }
    }
  };
  return /* @__PURE__ */ jsx(Component, {
    className: classes,
    ref,
    onClick: handleClick,
    disabled,
    onKeyDown: onKeyDown || handleKeyDown,
    type,
    "data-test-id": testId,
    ...rest,
    children: renderChildren()
  });
});
IconButtonComponent.displayName = "IconButton";
const IconButton = memo(IconButtonComponent);
export {
  Button,
  ButtonGroup,
  IconButton,
  UploadButton
};
//# sourceMappingURL=index.es.js.map
