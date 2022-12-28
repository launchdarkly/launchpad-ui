require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const dom = require("@floating-ui/dom");
const focusTrap = require("@launchpad-ui/focus-trap");
const overlay = require("@launchpad-ui/overlay");
const classix = require("classix");
const framerMotion = require("framer-motion");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const Popover$1 = "_Popover_1g4x0_5";
const styles = {
  Popover: Popover$1,
  "Popover-target": "_Popover-target_1g4x0_16",
  "Popover-target--disabled": "_Popover-target--disabled_1g4x0_20",
  "Popover-content": "_Popover-content_1g4x0_26",
  "Popover-content--restrictWidth": "_Popover-content--restrictWidth_1g4x0_40",
  "Popover-scroller": "_Popover-scroller_1g4x0_44"
};
const loadFeatures = () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require(
  "framer-motion"
))).then((res) => res.domAnimation);
const isOrContainsElement = (referenceElement, element) => {
  return referenceElement === element || referenceElement && referenceElement.contains(element);
};
const Popover = ({
  rootElementTag = "span",
  placement = "bottom",
  restrictHeight = true,
  restrictWidth = true,
  isModal = false,
  isFixed = false,
  interactionKind = "click",
  hoverOpenDelay = 250,
  hoverCloseDelay = 250,
  disablePlacementFlip = false,
  allowBoundaryElementOverflow = false,
  isOpen: isOpenProp,
  enableArrow,
  enforceFocus,
  onClick,
  onInteraction,
  onClose,
  disabled,
  children,
  target: targetProp,
  content: contentProp,
  targetClassName,
  targetTestId,
  popoverClassName,
  popoverContentClassName,
  rootElementStyle,
  offset,
  targetElementRef,
  "data-test-id": testId = "popover"
}) => {
  var _a;
  const [isOpen, setIsOpen] = react.useState(isOpenProp != null ? isOpenProp : void 0);
  const [popoverElement, setPopoverElement] = react.useState();
  const targetRef = react.useRef(null);
  const contentRef = react.useCallback((node) => {
    if (node !== null) {
      return setPopoverElement(node);
    }
    return;
  }, []);
  const arrowRef = react.useRef(null);
  const timeoutRef = react.useRef();
  const optionsRef = react.useRef();
  const popoverId = react.useRef(`popover-${react.useId()}`);
  const updatePosition = react.useCallback(async () => {
    var _a2, _b;
    const middleware = [];
    if (popoverElement === null || popoverElement === void 0) {
      return;
    }
    if (!allowBoundaryElementOverflow) {
      middleware.push(dom.shift({
        padding: 5
      }));
    }
    if (!disablePlacementFlip && !offset) {
      middleware.push(dom.flip({
        padding: 5
      }));
    }
    if (offset) {
      middleware.push(dom.offset(offset));
    }
    if (enableArrow && arrowRef.current) {
      middleware.push(dom.arrow({
        element: arrowRef.current
      }));
    }
    const hasModal = (_a2 = targetRef.current) == null ? void 0 : _a2.closest(".has-overlay");
    const strategy = isFixed || hasModal ? "fixed" : "absolute";
    optionsRef.current = {
      placement,
      middleware,
      strategy
    };
    const parentNode = targetRef.current;
    if (!parentNode || !parentNode.childNodes) {
      return;
    }
    const target2 = parentNode.childNodes[0];
    const {
      x,
      y,
      placement: floatPlacement,
      middlewareData,
      strategy: floatStrategy
    } = await dom.computePosition(target2, popoverElement, optionsRef.current);
    if (popoverElement) {
      Object.assign(popoverElement.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: floatStrategy
      });
      popoverElement.dataset.popoverPlacement = floatPlacement;
    }
    if (enableArrow && arrowRef.current && middlewareData.arrow) {
      const {
        x: arrowX,
        y: arrowY
      } = middlewareData.arrow;
      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[floatPlacement.split("-")[0]];
      if (staticSide) {
        Object.assign((_b = arrowRef.current) == null ? void 0 : _b.style, {
          left: arrowX !== null ? `${arrowX}px` : "",
          top: arrowY !== null ? `${arrowY}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "5px"
        });
      }
    }
  }, [allowBoundaryElementOverflow, disablePlacementFlip, enableArrow, isFixed, offset, placement, popoverElement]);
  react.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  react.useEffect(() => {
    const updatePopover = async () => {
      if (isOpen && !(popoverElement === null || popoverElement === void 0)) {
        window.addEventListener("scroll", updatePosition, {
          passive: true
        });
        window.addEventListener("resize", updatePosition, {
          passive: true
        });
        await updatePosition();
      } else {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      }
    };
    updatePopover();
  }, [isOpen, contentProp, popoverElement, updatePosition]);
  react.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);
  const handleTargetClick = (event) => {
    const eventTarget = event.target;
    onClick == null ? void 0 : onClick();
    if (!disabled && targetRef.current && isOrContainsElement(targetRef.current, eventTarget)) {
      setOpenState(isOpen ? false : !event.defaultPrevented);
    }
  };
  const handleMouseEnter = () => {
    if (!disabled) {
      setOpenState(true, hoverOpenDelay);
      attachGlobalListener();
    }
  };
  const handleMouseLeave = () => {
    setOpenState(false, hoverCloseDelay);
    removeGlobalListener();
  };
  const handleFocus = () => {
    if (!disabled) {
      setOpenState(true);
      attachGlobalListener();
    }
  };
  const handleBlur = () => {
    setOpenState(false);
    removeGlobalListener();
  };
  const handlePopoverClick = (event) => {
    var _a2;
    const eventTarget = event.target;
    if ((_a2 = eventTarget == null ? void 0 : eventTarget.closest) == null ? void 0 : _a2.call(eventTarget, ".popover-dismiss")) {
      setOpenState(false);
    }
  };
  const handleOverlayClose = (event) => {
    const eventTarget = event.target;
    if (targetRef.current && !isOrContainsElement(targetRef.current, eventTarget) || event.nativeEvent instanceof KeyboardEvent) {
      setOpenState(false);
    }
  };
  const setOpenState = (nextIsOpen, timeout) => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    if (typeof timeout !== "undefined" && timeout > 0) {
      timeoutRef.current = setTimeout(() => setOpenState(nextIsOpen), timeout);
    } else {
      if (isOpenProp === null || isOpenProp === void 0) {
        setIsOpen(nextIsOpen);
      } else {
        typeof onInteraction === "function" && onInteraction(nextIsOpen);
      }
      if (!nextIsOpen) {
        typeof onClose === "function" && onClose();
      }
    }
  };
  const parseChildren = () => {
    const [targetChild, contentChild] = react.Children.toArray(children);
    return {
      target: targetChild != null ? targetChild : targetProp,
      content: contentChild != null ? contentChild : contentProp
    };
  };
  const attachGlobalListener = () => {
    document.addEventListener("keydown", handleKeyDown);
  };
  const removeGlobalListener = () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      removeGlobalListener();
    }
  };
  const renderPopover = (content2) => {
    const classes = classix.cx(styles.Popover, popoverClassName);
    let handlers = {};
    if (interactionKind === "hover") {
      handlers = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onPointerEnter: handleMouseEnter,
        onPointerLeave: handleMouseLeave
      };
    }
    if (interactionKind !== "hover-target-only") {
      handlers.onClick = handlePopoverClick;
    }
    const popoverContent = /* @__PURE__ */ jsxRuntime.jsx(framerMotion.LazyMotion, {
      strict: true,
      features: loadFeatures,
      children: /* @__PURE__ */ jsxRuntime.jsxs(framerMotion.m.div, {
        transition: {
          duration: 0.15
        },
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        className: classix.cx(styles["Popover-content"], restrictWidth && styles["Popover-content--restrictWidth"], popoverContentClassName),
        tabIndex: interactionKind === "click" ? -1 : void 0,
        children: [enableArrow && /* @__PURE__ */ jsxRuntime.jsx("div", {
          id: "arrow",
          ref: arrowRef
        }), restrictHeight ? /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: styles["Popover-scroller"],
          children: content2
        }) : content2]
      })
    });
    return /* @__PURE__ */ jsxRuntime.jsx("div", {
      id: popoverId.current,
      ref: contentRef,
      className: classes,
      role: "tooltip",
      "data-test-id": testId,
      "aria-hidden": !isOpen,
      ...handlers,
      children: interactionKind === "click" ? /* @__PURE__ */ jsxRuntime.jsx(focusTrap.FocusTrap, {
        autoFocus: true,
        children: popoverContent
      }) : popoverContent
    });
  };
  const {
    target,
    content
  } = parseChildren();
  const hasEmptyContent = content === null || content === void 0 || typeof content === "string" && !content;
  const isTargetDisabled = react.isValidElement(target) ? !!((_a = target == null ? void 0 : target.props) == null ? void 0 : _a.disabled) : false;
  const targetProps = {
    ref: targetRef,
    className: classix.cx(styles["Popover-target"], targetClassName, isTargetDisabled && styles["Popover-target--disabled"]),
    style: rootElementStyle,
    "data-test-id": targetTestId || "popover-target"
  };
  if (interactionKind === "hover" || interactionKind === "hover-target-only" || interactionKind === "hover-or-focus") {
    targetProps.onMouseEnter = handleMouseEnter;
    targetProps.onMouseLeave = handleMouseLeave;
    targetProps.onPointerEnter = handleMouseEnter;
    targetProps.onPointerLeave = handleMouseLeave;
    if (interactionKind === "hover-or-focus") {
      targetProps.onFocus = handleFocus;
      targetProps.onBlur = handleBlur;
    }
  } else {
    targetProps.onClick = handleTargetClick;
  }
  return react.createElement(rootElementTag, targetProps, react.cloneElement(target, {
    ref: targetElementRef,
    ...isOpen && {
      "aria-describedby": popoverId.current
    },
    "data-state": isOpen ? "open" : "closed"
  }), /* @__PURE__ */ jsxRuntime.jsx(overlay.Overlay, {
    isOpen: !!isOpen && !hasEmptyContent,
    canOutsideClickClose: interactionKind === "click",
    isModal,
    enforceFocus,
    onClose: handleOverlayClose,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: renderPopover(content)
    })
  }));
};
exports.Popover = Popover;
//# sourceMappingURL=index.js.map
