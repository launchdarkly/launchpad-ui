import './style.css';
import { CheckCircle } from "@launchpad-ui/icons";
import { Tooltip } from "@launchpad-ui/tooltip";
import { Slot } from "@radix-ui/react-slot";
import { announce } from "@react-aria/live-announcer";
import { cx } from "classix";
import { forwardRef, useState, useRef, useCallback, useImperativeHandle } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
const CopyCodeButton$1 = "_CopyCodeButton_36aaa_1";
const styles$1 = {
  CopyCodeButton: CopyCodeButton$1,
  "focus-visible": "_focus-visible_36aaa_1"
};
const CopyCodeButton = forwardRef(({
  className,
  children,
  "data-test-id": testId = "copy-code-button",
  ...rest
}, ref) => {
  return /* @__PURE__ */ jsx("button", {
    ref,
    "data-test-id": testId,
    className: cx(styles$1["CopyCodeButton"], className),
    ...rest,
    children
  });
});
CopyCodeButton.displayName = "CopyCodeButton";
const CopyToClipboard$1 = "_CopyToClipboard_1ikfa_1";
const styles = {
  CopyToClipboard: CopyToClipboard$1,
  "Clipboard-checkmark": "_Clipboard-checkmark_1ikfa_5",
  "Clipboard-confirmation": "_Clipboard-confirmation_1ikfa_9",
  "Clipboard-copied": "_Clipboard-copied_1ikfa_13"
};
const CopyConfirmation = () => /* @__PURE__ */ jsxs("span", {
  className: styles["Clipboard-confirmation"],
  children: [/* @__PURE__ */ jsx(CheckCircle, {
    className: styles["Clipboard-checkmark"],
    size: "medium"
  }), /* @__PURE__ */ jsx("span", {
    className: styles["Clipboard-copied"],
    children: "Copied!"
  })]
});
const CopyToClipboard = forwardRef(({
  customCopiedText,
  text,
  tooltip,
  tooltipOptions = {
    placement: "bottom"
  },
  className,
  popoverTargetClassName,
  children,
  triggerAriaLabel,
  onCopy,
  asChild,
  "data-test-id": testId = "copy-to-clipboard",
  ...rest
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  const triggerRef = useRef(null);
  const classes = cx(styles.CopyToClipboard, className);
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    const node = triggerRef.current;
    if (node) {
      node.focus();
    }
    setIsOpen(true);
    setWasCopied(true);
    announce("Copied!", "polite", 300);
    onCopy == null ? void 0 : onCopy();
  }, [onCopy, triggerRef, text, setIsOpen, setWasCopied]);
  useImperativeHandle(ref, () => ({
    handleCopy
  }), [handleCopy]);
  const tooltipText = wasCopied ? customCopiedText || /* @__PURE__ */ jsx(CopyConfirmation, {}) : tooltip || "Copy to clipboard";
  const triggerAriaLabelText = triggerAriaLabel || `Copy ${text} to your clipboard.`;
  const handleInteraction = (isOpen2) => {
    setIsOpen(isOpen2);
    setTimeout(() => setWasCopied((prev) => !isOpen2 ? isOpen2 : prev));
  };
  const handleKeyDown = (event) => {
    const validKeys = ["Spacebar", " ", "Enter"];
    if (validKeys.includes(event.key)) {
      event.preventDefault();
      handleCopy();
    }
  };
  const Component = asChild ? Slot : CopyCodeButton;
  return /* @__PURE__ */ jsx("span", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children: /* @__PURE__ */ jsx(Tooltip, {
      ...tooltipOptions,
      isOpen,
      content: tooltipText,
      onInteraction: handleInteraction,
      targetClassName: popoverTargetClassName,
      children: /* @__PURE__ */ jsx(Component, {
        onClick: handleCopy,
        onKeyDown: handleKeyDown,
        ref: triggerRef,
        "aria-label": triggerAriaLabelText,
        role: "button",
        tabIndex: 0,
        children
      })
    })
  });
});
CopyToClipboard.displayName = "CopyToClipboard";
export {
  CopyCodeButton,
  CopyConfirmation,
  CopyToClipboard
};
//# sourceMappingURL=index.es.js.map
