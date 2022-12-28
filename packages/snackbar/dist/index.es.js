import './style.css';
import { IconButton } from "@launchpad-ui/button";
import { StatusIcon, Close } from "@launchpad-ui/icons";
import { cx } from "classix";
import { cloneElement } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
import { LazyMotion, AnimatePresence, m } from "framer-motion";
const Snackbar$1 = "_Snackbar_oxwa6_1";
const styles$1 = {
  Snackbar: Snackbar$1,
  "Snackbar-icon": "_Snackbar-icon_oxwa6_12",
  "Snackbar--error": "_Snackbar--error_oxwa6_17",
  "Snackbar--info": "_Snackbar--info_oxwa6_21",
  "Snackbar--warning": "_Snackbar--warning_oxwa6_25",
  "Snackbar--success": "_Snackbar--success_oxwa6_29",
  "Snackbar-heading": "_Snackbar-heading_oxwa6_33",
  "Snackbar-content": "_Snackbar-content_oxwa6_42",
  "Snackbar-description": "_Snackbar-description_oxwa6_45",
  "Snackbar-close": "_Snackbar-close_oxwa6_62"
};
const Snackbar = ({
  className,
  kind,
  header,
  description,
  cta,
  onDismiss,
  "data-test-id": testId = "snackbar",
  ...rest
}) => {
  const CTA = cta && cloneElement(cta, {
    onClick: onDismiss
  });
  return /* @__PURE__ */ jsxs("div", {
    ...rest,
    className: cx(styles$1.Snackbar, styles$1[`Snackbar--${kind}`], className),
    "data-test-id": testId,
    role: "status",
    children: [/* @__PURE__ */ jsx(StatusIcon, {
      kind,
      className: styles$1["Snackbar-icon"]
    }), /* @__PURE__ */ jsxs("div", {
      className: styles$1["Snackbar-content"],
      children: [header && /* @__PURE__ */ jsx("h4", {
        className: styles$1["Snackbar-heading"],
        children: header
      }), /* @__PURE__ */ jsx("span", {
        className: styles$1["Snackbar-description"],
        children: description
      }), " ", CTA]
    }), /* @__PURE__ */ jsx(IconButton, {
      icon: /* @__PURE__ */ jsx(Close, {
        size: "small"
      }),
      size: "small",
      "aria-label": "Dismiss",
      kind: "close",
      className: styles$1["Snackbar-close"],
      "data-test-id": "snackbar-dismiss",
      onClick: onDismiss
    })]
  });
};
const SnackbarCenter$1 = "_SnackbarCenter_18hhn_1";
const styles = {
  SnackbarCenter: SnackbarCenter$1,
  "SnackbarCenter-item": "_SnackbarCenter-item_18hhn_10"
};
const loadFeatures = () => import(
  /* webpackChunkName: "lp-snackbar-framer-features" */
  /* webpackExports: "domAnimation" */
  "framer-motion"
).then((res) => res.domAnimation);
const SnackbarCenter = ({
  snackbars,
  dismissSnackbar,
  className
}) => {
  const classes = cx(styles.SnackbarCenter, className);
  const handleDismiss = (item) => {
    var _a;
    (_a = item.onDismiss) == null ? void 0 : _a.call(item);
    dismissSnackbar(item._id);
  };
  return /* @__PURE__ */ jsx(LazyMotion, {
    strict: true,
    features: loadFeatures,
    children: /* @__PURE__ */ jsx("div", {
      className: classes,
      children: /* @__PURE__ */ jsx(AnimatePresence, {
        initial: false,
        children: snackbars.map((item) => /* @__PURE__ */ jsx(m.div, {
          className: styles["SnackbarCenter-item"],
          transition: {
            ease: "easeInOut"
          },
          initial: {
            x: "100%"
          },
          animate: {
            x: "0%"
          },
          exit: {
            x: "100%"
          },
          children: /* @__PURE__ */ jsx(Snackbar, {
            kind: item.kind,
            description: item.description,
            header: item.header,
            cta: item.cta,
            onDismiss: () => handleDismiss(item)
          })
        }, item._id))
      })
    })
  });
};
export {
  Snackbar,
  SnackbarCenter
};
//# sourceMappingURL=index.es.js.map
