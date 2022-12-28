"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const popover = require("@launchpad-ui/popover");
const classix = require("classix");
const react = require("react");
const button = require("@launchpad-ui/button");
const icons = require("@launchpad-ui/icons");
const Dropdown = (props) => {
  const {
    placement,
    disabled,
    targetClassName,
    popoverClassName,
    isOpen: isOpenProp,
    onInteraction,
    onSelect,
    onStateChange,
    children,
    "data-test-id": testId = "dropdown",
    ...rest
  } = props;
  const triggerRef = react.useRef(null);
  const [isOpen, setIsOpen] = react.useState(isOpenProp ?? false);
  const [hasOpened, setHasOpened] = react.useState(isOpen);
  react.useEffect(() => {
    if (isOpenProp !== void 0) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);
  react.useEffect(() => {
    if (hasOpened && isOpen === false) {
      setTimeout(() => {
        var _a, _b;
        const current = triggerRef.current;
        if (!current) {
          return;
        }
        const hasModal = (_a = current.closest) == null ? void 0 : _a.call(current, ".has-overlay");
        !hasModal && ((_b = current.focus) == null ? void 0 : _b.call(current));
      });
    }
  }, [isOpen, hasOpened]);
  react.useEffect(() => {
    setHasOpened(isOpen);
    onStateChange == null ? void 0 : onStateChange({ isOpen });
  }, [isOpen]);
  const renderTrigger = () => {
    return react.cloneElement(parseChildren().target, {
      "aria-haspopup": true,
      "aria-expanded": isOpen ? true : false,
      ref: triggerRef,
      isopen: isOpen == null ? void 0 : isOpen.toString()
    });
  };
  const renderContent = () => {
    return react.cloneElement(parseChildren().content, {
      onSelect: handleSelect
    });
  };
  const handleSelect = (item) => {
    setIsOpen(false);
    onSelect == null ? void 0 : onSelect(item, { isOpen: false });
  };
  const handlePopoverInteraction = (nextIsOpen) => {
    setIsOpen(nextIsOpen);
  };
  const parseChildren = () => {
    const [targetChild, contentChild] = react.Children.toArray(children);
    return {
      target: targetChild,
      content: contentChild
    };
  };
  const popoverTargetClasses = classix.cx("Dropdown-target", targetClassName);
  const popoverClasses = classix.cx("Dropdown", popoverClassName);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    popover.Popover,
    {
      isOpen,
      placement,
      onInteraction: onInteraction || handlePopoverInteraction,
      restrictHeight: false,
      disabled,
      targetClassName: popoverTargetClasses,
      popoverClassName: popoverClasses,
      "data-test-id": testId,
      ...rest,
      children: [
        renderTrigger(),
        renderContent()
      ]
    }
  );
};
const DropdownButton = react.forwardRef((props, ref) => {
  const { children, hideCaret, "data-test-id": testId = "dropdown-button", ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(button.Button, { ...rest, "data-test-id": testId, ref, children: [
    children,
    " ",
    !hideCaret && /* @__PURE__ */ jsxRuntime.jsx(icons.ExpandMore, { size: "small" })
  ] });
});
DropdownButton.displayName = "DropdownButton";
exports.Dropdown = Dropdown;
exports.DropdownButton = DropdownButton;
//# sourceMappingURL=index.js.map
