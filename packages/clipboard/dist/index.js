require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@launchpad-ui/icons");
const tooltip = require("@launchpad-ui/tooltip");
const reactSlot = require("@radix-ui/react-slot");
const liveAnnouncer = require("@react-aria/live-announcer");
const classix = require("classix");
const react = require("react");
const CopyCodeButton$1 = "_CopyCodeButton_36aaa_1";
const styles$1 = {
  CopyCodeButton: CopyCodeButton$1,
  "focus-visible": "_focus-visible_36aaa_1"
};
const CopyCodeButton = react.forwardRef(
  ({ className, children, "data-test-id": testId = "copy-code-button", ...rest }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        ref,
        "data-test-id": testId,
        className: classix.cx(styles$1["CopyCodeButton"], className),
        ...rest,
        children
      }
    );
  }
);
CopyCodeButton.displayName = "CopyCodeButton";
const CopyToClipboard$1 = "_CopyToClipboard_1ikfa_1";
const styles = {
  CopyToClipboard: CopyToClipboard$1,
  "Clipboard-checkmark": "_Clipboard-checkmark_1ikfa_5",
  "Clipboard-confirmation": "_Clipboard-confirmation_1ikfa_9",
  "Clipboard-copied": "_Clipboard-copied_1ikfa_13"
};
const CopyConfirmation = () => /* @__PURE__ */ jsxRuntime.jsxs("span", { className: styles["Clipboard-confirmation"], children: [
  /* @__PURE__ */ jsxRuntime.jsx(icons.CheckCircle, { className: styles["Clipboard-checkmark"], size: "medium" }),
  /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles["Clipboard-copied"], children: "Copied!" })
] });
const CopyToClipboard = react.forwardRef(
  ({
    customCopiedText,
    text,
    tooltip: tooltip$1,
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
    const [isOpen, setIsOpen] = react.useState(false);
    const [wasCopied, setWasCopied] = react.useState(false);
    const triggerRef = react.useRef(null);
    const classes = classix.cx(styles.CopyToClipboard, className);
    const handleCopy = react.useCallback(async () => {
      await navigator.clipboard.writeText(text);
      const node = triggerRef.current;
      if (node) {
        node.focus();
      }
      setIsOpen(true);
      setWasCopied(true);
      liveAnnouncer.announce("Copied!", "polite", 300);
      onCopy == null ? void 0 : onCopy();
    }, [onCopy, triggerRef, text, setIsOpen, setWasCopied]);
    react.useImperativeHandle(
      ref,
      () => ({
        handleCopy
      }),
      [handleCopy]
    );
    const tooltipText = wasCopied ? customCopiedText || /* @__PURE__ */ jsxRuntime.jsx(CopyConfirmation, {}) : tooltip$1 || "Copy to clipboard";
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
    const Component = asChild ? reactSlot.Slot : CopyCodeButton;
    return /* @__PURE__ */ jsxRuntime.jsx("span", { className: classes, "data-test-id": testId, ...rest, children: /* @__PURE__ */ jsxRuntime.jsx(
      tooltip.Tooltip,
      {
        ...tooltipOptions,
        isOpen,
        content: tooltipText,
        onInteraction: handleInteraction,
        targetClassName: popoverTargetClassName,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Component,
          {
            onClick: handleCopy,
            onKeyDown: handleKeyDown,
            ref: triggerRef,
            "aria-label": triggerAriaLabelText,
            role: "button",
            tabIndex: 0,
            children
          }
        )
      }
    ) });
  }
);
CopyToClipboard.displayName = "CopyToClipboard";
exports.CopyCodeButton = CopyCodeButton;
exports.CopyConfirmation = CopyConfirmation;
exports.CopyToClipboard = CopyToClipboard;
//# sourceMappingURL=index.js.map
