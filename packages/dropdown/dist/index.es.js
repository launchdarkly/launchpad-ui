import { jsxs, jsx } from "react/jsx-runtime";
import { Popover } from "@launchpad-ui/popover";
import { cx } from "classix";
import { useRef, useState, useEffect, cloneElement, Children, forwardRef } from "react";
import { Button } from "@launchpad-ui/button";
import { ExpandMore } from "@launchpad-ui/icons";
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
  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isOpenProp ?? false);
  const [hasOpened, setHasOpened] = useState(isOpen);
  useEffect(() => {
    if (isOpenProp !== void 0) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);
  useEffect(() => {
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
  useEffect(() => {
    setHasOpened(isOpen);
    onStateChange == null ? void 0 : onStateChange({ isOpen });
  }, [isOpen]);
  const renderTrigger = () => {
    return cloneElement(parseChildren().target, {
      "aria-haspopup": true,
      "aria-expanded": isOpen ? true : false,
      ref: triggerRef,
      isopen: isOpen == null ? void 0 : isOpen.toString()
    });
  };
  const renderContent = () => {
    return cloneElement(parseChildren().content, {
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
    const [targetChild, contentChild] = Children.toArray(children);
    return {
      target: targetChild,
      content: contentChild
    };
  };
  const popoverTargetClasses = cx("Dropdown-target", targetClassName);
  const popoverClasses = cx("Dropdown", popoverClassName);
  return /* @__PURE__ */ jsxs(
    Popover,
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
const DropdownButton = forwardRef((props, ref) => {
  const { children, hideCaret, "data-test-id": testId = "dropdown-button", ...rest } = props;
  return /* @__PURE__ */ jsxs(Button, { ...rest, "data-test-id": testId, ref, children: [
    children,
    " ",
    !hideCaret && /* @__PURE__ */ jsx(ExpandMore, { size: "small" })
  ] });
});
DropdownButton.displayName = "DropdownButton";
export {
  Dropdown,
  DropdownButton
};
//# sourceMappingURL=index.es.js.map
