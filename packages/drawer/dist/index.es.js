import './style.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { IconButton } from "@launchpad-ui/button";
import { FocusTrap } from "@launchpad-ui/focus-trap";
import { Close } from "@launchpad-ui/icons";
import { Portal } from "@launchpad-ui/portal";
import { Progress } from "@launchpad-ui/progress";
import { usePreventScroll } from "@react-aria/overlays";
import { cx } from "classix";
import { LazyMotion, m } from "framer-motion";
import { useRef, useEffect, Suspense } from "react";
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
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 }
};
const slideRight = {
  hidden: { opacity: 0, x: "25%" },
  visible: {
    opacity: 1,
    x: "0%",
    transition: { type: "spring", delay: 0.15, duration: 0.2, bounce: 0 }
  }
};
const loadFeatures = () => import(
  /* webpackChunkName: "lp-drawer-framer-features" */
  /* webpackExports: "domAnimation" */
  "framer-motion"
).then((res) => res.domAnimation);
const Drawer = ({
  className,
  children,
  onCancel,
  size = "small",
  "data-test-id": testId = "drawer"
}) => {
  const ref = useRef(null);
  usePreventScroll();
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(LazyMotion, { strict: true, features: loadFeatures, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: cx(styles.drawer, styles[size], className),
      "data-drawer": true,
      "data-test-id": testId,
      ref,
      children: /* @__PURE__ */ jsx(
        m.div,
        {
          initial: "hidden",
          animate: "visible",
          variants: overlay,
          transition: { duration: 0.15 },
          role: "presentation",
          className: styles.overlay,
          onMouseDown: handleOverlayClick,
          children: /* @__PURE__ */ jsx(FocusTrap, { autoFocus: true, restoreFocus: true, children: /* @__PURE__ */ jsxs(
            m.div,
            {
              initial: "hidden",
              animate: "visible",
              variants: slideRight,
              role: "dialog",
              "aria-labelledby": DRAWER_LABELLED_BY,
              "aria-modal": true,
              className: styles.content,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    "aria-label": "close",
                    icon: /* @__PURE__ */ jsx(Close, { size: "medium" }),
                    className: styles.closeButton,
                    onClick: onCancel,
                    "data-test-id": "drawer-close-button"
                  }
                ),
                /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Progress, {}), children })
              ]
            }
          ) })
        }
      )
    }
  ) }) });
};
const DrawerHeader = ({
  className,
  children,
  titleID,
  titleClassName,
  "data-test-id": testId = "drawer-header",
  ...rest
}) => {
  return /* @__PURE__ */ jsx("div", { "data-test-id": testId, className, ...rest, children: /* @__PURE__ */ jsx("h2", { id: DRAWER_LABELLED_BY, className: titleClassName, children }) });
};
export {
  Drawer,
  DrawerHeader
};
//# sourceMappingURL=index.es.js.map
