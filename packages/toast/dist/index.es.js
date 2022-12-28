import './style.css';
import { StatusIcon } from "@launchpad-ui/icons";
import { cx } from "classix";
import { useEffect } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
import { LazyMotion, AnimatePresence, m } from "framer-motion";
const Toast$1 = "_Toast_1x0jd_1";
const styles$1 = {
  Toast: Toast$1,
  "Toast-icon": "_Toast-icon_1x0jd_14",
  "Toast--error": "_Toast--error_1x0jd_18",
  "Toast--warning": "_Toast--warning_1x0jd_22",
  "Toast--success": "_Toast--success_1x0jd_26",
  "Toast--info": "_Toast--info_1x0jd_30",
  "Toast-content": "_Toast-content_1x0jd_34"
};
const Toast = ({
  className,
  kind,
  onDismiss,
  content,
  "data-test-id": testId = "toast",
  ...rest
}) => {
  useEffect(() => {
    setTimeout(() => {
      onDismiss();
    }, 6e3);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    ...rest,
    className: cx(styles$1.Toast, styles$1[`Toast--${kind}`], className),
    "data-test-id": testId,
    role: "status",
    children: [kind !== "info" && /* @__PURE__ */ jsx(StatusIcon, {
      kind,
      className: styles$1["Toast-icon"]
    }), /* @__PURE__ */ jsx("p", {
      className: styles$1["Toast-content"],
      children: content
    })]
  });
};
const ToastCenter$1 = "_ToastCenter_1adpq_1";
const styles = {
  ToastCenter: ToastCenter$1,
  "ToastCenter-item": "_ToastCenter-item_1adpq_11"
};
const loadFeatures = () => import(
  /* webpackChunkName: "lp-toast-framer-features" */
  /* webpackExports: "domAnimation" */
  "framer-motion"
).then((res) => res.domAnimation);
const ToastCenter = ({
  toasts,
  onDismiss,
  className
}) => {
  const classes = cx(styles.ToastCenter, className);
  return /* @__PURE__ */ jsx(LazyMotion, {
    strict: true,
    features: loadFeatures,
    children: /* @__PURE__ */ jsx("div", {
      className: classes,
      children: /* @__PURE__ */ jsx(AnimatePresence, {
        initial: false,
        children: toasts.map((item) => /* @__PURE__ */ jsx(m.div, {
          className: styles["ToastCenter-item"],
          transition: {
            ease: "easeInOut"
          },
          initial: {
            y: "100%"
          },
          animate: {
            y: "0%"
          },
          exit: {
            y: "0%"
          },
          children: /* @__PURE__ */ jsx(Toast, {
            kind: item.kind,
            content: item.content,
            onDismiss: () => onDismiss(item._id)
          })
        }, item._id))
      })
    })
  });
};
export {
  Toast,
  ToastCenter
};
//# sourceMappingURL=index.es.js.map
