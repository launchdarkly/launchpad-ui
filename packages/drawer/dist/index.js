require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button = require("@launchpad-ui/button");
const focusTrap = require("@launchpad-ui/focus-trap");
const icons = require("@launchpad-ui/icons");
const portal = require("@launchpad-ui/portal");
const progress = require("@launchpad-ui/progress");
const overlays = require("@react-aria/overlays");
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
const DRAWER_LABELLED_BY = "drawer-title";
const drawer = "_drawer_1amby_17";
const overlay$1 = "_overlay_1amby_27";
const content = "_content_1amby_36";
const small = "_small_1amby_49";
const medium = "_medium_1amby_53";
const large = "_large_1amby_57";
const xLarge = "_xLarge_1amby_61";
const full = "_full_1amby_65";
const closeButton = "_closeButton_1amby_79";
const styles = {
  drawer,
  overlay: overlay$1,
  content,
  small,
  medium,
  large,
  xLarge,
  full,
  closeButton
};
const overlay = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15
    }
  },
  hidden: {
    opacity: 0
  }
};
const slideRight = {
  hidden: {
    opacity: 0,
    x: "25%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      delay: 0.15,
      duration: 0.2,
      bounce: 0
    }
  }
};
const loadFeatures = () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require(
  "framer-motion"
))).then((res) => res.domAnimation);
const Drawer = ({
  className,
  children,
  onCancel,
  size = "small",
  "data-test-id": testId = "drawer"
}) => {
  const ref = react.useRef(null);
  overlays.usePreventScroll();
  react.useEffect(() => {
    const handleEscape = (event) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll("[data-drawer]")].pop();
      if (event.key === "Escape" && latest === ref.current) {
        close();
      }
    };
    const close = () => {
      onCancel == null ? void 0 : onCancel();
    };
    document.body.classList.add("has-overlay");
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("has-overlay");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onCancel, testId]);
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(portal.Portal, {
    children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.LazyMotion, {
      strict: true,
      features: loadFeatures,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: classix.cx(styles.drawer, styles[size], className),
        "data-drawer": true,
        "data-test-id": testId,
        ref,
        children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.m.div, {
          initial: "hidden",
          animate: "visible",
          variants: overlay,
          transition: {
            duration: 0.15
          },
          role: "presentation",
          className: styles.overlay,
          onMouseDown: handleOverlayClick,
          children: /* @__PURE__ */ jsxRuntime.jsx(focusTrap.FocusTrap, {
            autoFocus: true,
            restoreFocus: true,
            children: /* @__PURE__ */ jsxRuntime.jsxs(framerMotion.m.div, {
              initial: "hidden",
              animate: "visible",
              variants: slideRight,
              role: "dialog",
              "aria-labelledby": DRAWER_LABELLED_BY,
              "aria-modal": true,
              className: styles.content,
              tabIndex: -1,
              children: [/* @__PURE__ */ jsxRuntime.jsx(button.IconButton, {
                "aria-label": "close",
                icon: /* @__PURE__ */ jsxRuntime.jsx(icons.Close, {
                  size: "medium"
                }),
                className: styles.closeButton,
                onClick: onCancel,
                "data-test-id": "drawer-close-button"
              }), /* @__PURE__ */ jsxRuntime.jsx(react.Suspense, {
                fallback: /* @__PURE__ */ jsxRuntime.jsx(progress.Progress, {}),
                children
              })]
            })
          })
        })
      })
    })
  });
};
const DrawerHeader = ({
  className,
  children,
  titleID,
  titleClassName,
  "data-test-id": testId = "drawer-header",
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    "data-test-id": testId,
    className,
    ...rest,
    children: /* @__PURE__ */ jsxRuntime.jsx("h2", {
      id: DRAWER_LABELLED_BY,
      className: titleClassName,
      children
    })
  });
};
exports.Drawer = Drawer;
exports.DrawerHeader = DrawerHeader;
//# sourceMappingURL=index.js.map
