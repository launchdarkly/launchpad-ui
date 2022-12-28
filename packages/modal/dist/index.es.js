import './style.css';
import { Portal } from "@launchpad-ui/portal";
import { FocusTrap } from "@launchpad-ui/focus-trap";
import { usePreventScroll } from "@react-aria/overlays";
import cx$1, { cx } from "classix";
import { LazyMotion, m } from "framer-motion";
import { useRef, useEffect, useState, createContext, useContext, forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { IconButton, ButtonGroup } from "@launchpad-ui/button";
import { Warning, Close } from "@launchpad-ui/icons";
const MODAL_LABELLED_BY = "modal-title";
const overlayContainer = "_overlayContainer_wm2pd_7";
const overlay$1 = "_overlay_wm2pd_7";
const modal = "_modal_wm2pd_23";
const header = "_header_wm2pd_36";
const title = "_title_wm2pd_43";
const headerIcon = "_headerIcon_wm2pd_51";
const headerMain = "_headerMain_wm2pd_59";
const headerDescription = "_headerDescription_wm2pd_65";
const headerRequiredFields = "_headerRequiredFields_wm2pd_71";
const requiredAsterisk = "_requiredAsterisk_wm2pd_77";
const closeButton = "_closeButton_wm2pd_81";
const body = "_body_wm2pd_86";
const footer = "_footer_wm2pd_101";
const absoluteFooter = "_absoluteFooter_wm2pd_107";
const footerActions = "_footerActions_wm2pd_116";
const small = "_small_wm2pd_150";
const normal = "_normal_wm2pd_154";
const styles = {
  overlayContainer,
  overlay: overlay$1,
  modal,
  header,
  title,
  headerIcon,
  headerMain,
  headerDescription,
  headerRequiredFields,
  requiredAsterisk,
  closeButton,
  body,
  footer,
  absoluteFooter,
  footerActions,
  small,
  normal
};
const useMediaQuery = (query, defaultValue = false) => {
  const [matches, setMatches] = useState(window ? window.matchMedia(query).matches : defaultValue);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handleMediaChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", handleMediaChange);
    return () => media.addEventListener("change", handleMediaChange);
  }, [matches, query]);
  return matches;
};
const useOverflowY = (ref) => {
  const observerRef = useRef(
    (target) => new ResizeObserver(() => {
      if (target) {
        target.style.overflowY = "auto";
        const overflow = target.scrollHeight > target.clientHeight ? "auto" : "initial";
        target.style.overflowY = overflow;
      }
    })
  );
  useEffect(() => {
    const { current: element } = ref;
    const observer = observerRef.current(element);
    const modal2 = element ? element.closest("[role=dialog]") : null;
    if (element && modal2) {
      observer.observe(modal2);
    }
    return () => {
      if (element && modal2) {
        observer.unobserve(modal2);
      }
    };
  }, [ref, observerRef]);
};
const useAbsoluteFooter = (ref) => {
  const observer = useRef(
    new ResizeObserver((entries) => {
      const target = entries[0].target;
      const modal2 = target.closest("[role=dialog]");
      if (modal2) {
        modal2.style.paddingBottom = `${target.clientHeight}px`;
      }
    })
  );
  useEffect(() => {
    const currentObserver = observer.current;
    const { current } = ref;
    if (current) {
      currentObserver.observe(current);
    }
    return () => {
      if (current) {
        currentObserver.unobserve(current);
      }
    };
  }, [ref, observer]);
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
const transitions = {
  desktopPop: {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 0.15
      }
    }
  },
  mobileSlideUp: {
    hidden: {
      opacity: 0,
      y: "25%"
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        delay: 0.15,
        duration: 0.2,
        bounce: 0
      }
    }
  }
};
const loadFeatures = () => import(
  /* webpackChunkName: "lp-modal-framer-features" */
  /* webpackExports: "domAnimation" */
  "framer-motion"
).then((res) => res.domAnimation);
const ModalContainer = ({
  cancelWithOverlayClick = true,
  children,
  onCancel,
  size = "normal",
  className,
  onReady,
  "data-test-id": testId
}) => {
  const ref = useRef(null);
  usePreventScroll();
  const isDesktopViewport = useMediaQuery("(min-width: 430px)", true);
  const handleOverlayClick = (event) => {
    if (cancelWithOverlayClick && event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };
  useEffect(() => {
    const handleEscape = (event) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll("[data-modal]")].pop();
      if (event.key === "Escape" && latest === ref.current) {
        close();
      }
    };
    const close = () => {
      onCancel == null ? void 0 : onCancel();
    };
    onReady == null ? void 0 : onReady();
    document.body.classList.add("has-overlay");
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("has-overlay");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onReady, onCancel]);
  return /* @__PURE__ */ jsx(LazyMotion, {
    strict: true,
    features: loadFeatures,
    children: /* @__PURE__ */ jsx("div", {
      className: styles.overlayContainer,
      "data-modal": true,
      "data-test-id": "modal-overlay-container",
      ref,
      children: /* @__PURE__ */ jsx(m.div, {
        initial: "hidden",
        animate: "visible",
        variants: overlay,
        transition: {
          duration: 0.15
        },
        role: "presentation",
        className: styles.overlay,
        "data-test-id": "modal-overlay",
        onMouseDown: handleOverlayClick,
        children: /* @__PURE__ */ jsx(FocusTrap, {
          autoFocus: true,
          restoreFocus: true,
          children: /* @__PURE__ */ jsx(m.div, {
            initial: "hidden",
            animate: "visible",
            variants: isDesktopViewport ? transitions.desktopPop : transitions.mobileSlideUp,
            role: "dialog",
            "aria-labelledby": MODAL_LABELLED_BY,
            "aria-modal": true,
            "data-test-id": testId,
            className: cx(styles.modal, styles[size], className),
            tabIndex: -1,
            children
          })
        })
      })
    })
  });
};
const ModalContext = createContext({
  onCancel: void 0,
  status: void 0
});
const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === void 0) {
    throw new Error("useModalContext must be used within a ModalContext provider");
  }
  return context;
};
const Modal = ({
  className,
  onCancel,
  cancelWithOverlayClick = true,
  children,
  onReady,
  status,
  size,
  "data-test-id": testId = "modal"
}) => {
  return /* @__PURE__ */ jsx(Portal, {
    children: /* @__PURE__ */ jsx(ModalContext.Provider, {
      value: {
        onCancel,
        status
      },
      children: /* @__PURE__ */ jsx(ModalContainer, {
        onCancel,
        onReady,
        cancelWithOverlayClick,
        size,
        className,
        "data-test-id": testId,
        children
      })
    })
  });
};
const ModalBody = ({
  children,
  className,
  "data-test-id": testId = "modal-body",
  ...rest
}) => {
  const ref = useRef(null);
  useOverflowY(ref);
  return /* @__PURE__ */ jsx("div", {
    ...rest,
    ref,
    className: cx$1(styles.body, className),
    "data-test-id": testId,
    children
  });
};
const ModalHeader = ({
  withCloseButton = true,
  title: title2,
  hasRequiredField,
  description,
  className,
  "data-test-id": testId = "modal-header"
}) => {
  const {
    onCancel,
    status
  } = useModalContext();
  return /* @__PURE__ */ jsxs("div", {
    className: cx$1(styles.header, className),
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsxs("div", {
      className: styles.headerMain,
      children: [status === "warning" && /* @__PURE__ */ jsx(Warning, {
        "data-test-id": "modal-header-icon",
        size: "medium",
        className: styles.headerIcon
      }), /* @__PURE__ */ jsx("h2", {
        id: MODAL_LABELLED_BY,
        "data-test-id": "modal-title",
        className: styles.title,
        children: title2
      }), withCloseButton && /* @__PURE__ */ jsx(IconButton, {
        "aria-label": "close",
        icon: /* @__PURE__ */ jsx(Close, {
          size: "medium"
        }),
        className: styles.closeButton,
        onClick: onCancel,
        "data-test-id": "modal-close-button"
      })]
    }), description && /* @__PURE__ */ jsx("p", {
      className: styles.headerDescription,
      "data-test-id": "modal-description",
      children: description
    }), hasRequiredField && /* @__PURE__ */ jsxs("div", {
      className: styles.headerRequiredFields,
      "data-test-id": "modal-required-field",
      children: [/* @__PURE__ */ jsx("span", {
        className: styles.requiredAsterisk,
        children: "*"
      }), " Required field"]
    })]
  });
};
const ModalFooter = forwardRef(({
  secondaryButton,
  primaryButton,
  className,
  "data-test-id": testId = "modal-footer",
  ...rest
}, ref) => /* @__PURE__ */ jsx("div", {
  ...rest,
  className: cx$1(className, styles.footer),
  "data-test-id": testId,
  ref,
  children: /* @__PURE__ */ jsxs(ButtonGroup, {
    className: styles.footerActions,
    children: [secondaryButton, primaryButton]
  })
}));
ModalFooter.displayName = "ModalFooter";
const AbsoluteModalFooter = ({
  className,
  ...rest
}) => {
  const ref = useRef(null);
  useAbsoluteFooter(ref);
  return /* @__PURE__ */ jsx(ModalFooter, {
    ref,
    className: cx(className, styles.absoluteFooter),
    ...rest
  });
};
export {
  AbsoluteModalFooter,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
};
//# sourceMappingURL=index.es.js.map
