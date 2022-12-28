"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const portal = require("@launchpad-ui/portal");
const react = require("react");
const Overlay = ({
  isOpen,
  lazy = true,
  enforceFocus = true,
  isModal = false,
  canOutsideClickClose = true,
  canEscapeKeyClose = true,
  onClose,
  children
}) => {
  const [hasEverOpened, setHasEverOpened] = react.useState(isOpen);
  const containerElement = react.useRef(null);
  const handleDocumentClick = react.useCallback(
    (event) => {
      const eventTarget = event.target;
      const wasClickInOverlay = containerElement.current && containerElement.current.contains(eventTarget);
      const wasClickInBody = !!eventTarget.closest("body");
      if (isOpen && canOutsideClickClose && !wasClickInOverlay && wasClickInBody) {
        typeof onClose === "function" && onClose(event);
      }
    },
    [canOutsideClickClose, isOpen, onClose]
  );
  const focusContainer = react.useCallback(() => {
    requestAnimationFrame(() => {
      if (!isOpen || containerElement.current === null || document.activeElement === null) {
        return;
      }
      if (!containerElement.current.contains(document.activeElement)) {
        const autofocusElement = containerElement.current.querySelector(
          "[autofocus]"
        );
        const tabbableElement = containerElement.current.querySelector(
          "[tabindex]"
        );
        if (autofocusElement) {
          autofocusElement.focus();
        } else if (tabbableElement) {
          tabbableElement.focus();
        }
      }
    });
  }, [isOpen]);
  const handleDocumentFocus = react.useCallback(
    (event) => {
      const eventTarget = event.target;
      if (enforceFocus && containerElement.current && !containerElement.current.contains(eventTarget)) {
        event.stopImmediatePropagation();
        focusContainer();
      }
    },
    [enforceFocus, focusContainer]
  );
  const handleOverlayOpen = react.useCallback(() => {
    if (canOutsideClickClose) {
      document.addEventListener("mousedown", handleDocumentClick);
    }
    if (enforceFocus) {
      document.addEventListener("focus", handleDocumentFocus, true);
    }
    if (isModal) {
      document.body.classList.add("has-overlay");
    }
  }, [handleDocumentClick, handleDocumentFocus, canOutsideClickClose, enforceFocus, isModal]);
  const handleOverlayClose = react.useCallback(() => {
    document.removeEventListener("mousedown", handleDocumentClick);
    document.removeEventListener("focus", handleDocumentFocus, true);
    if (isModal) {
      document.body.classList.remove("has-overlay");
    }
  }, [handleDocumentClick, handleDocumentFocus, isModal]);
  react.useEffect(() => {
    if (isOpen) {
      handleOverlayOpen();
    } else {
      handleOverlayClose();
    }
    setHasEverOpened(hasEverOpened || isOpen);
    return () => {
      handleOverlayClose();
    };
  }, [isOpen, handleOverlayOpen, handleOverlayClose, hasEverOpened]);
  const handleKeyDown = (event) => {
    if (canEscapeKeyClose && event.key === "Escape") {
      typeof onClose === "function" && onClose(event);
      event.preventDefault();
    }
  };
  if (lazy && !hasEverOpened) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(portal.Portal, { onKeyDown: handleKeyDown, ref: containerElement, children: isOpen ? children : null });
};
exports.Overlay = Overlay;
//# sourceMappingURL=index.js.map
