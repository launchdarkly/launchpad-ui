require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button = require("@launchpad-ui/button");
const icons = require("@launchpad-ui/icons");
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const framerMotion = require("framer-motion");
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
  const CTA = cta && react.cloneElement(cta, {
    onClick: onDismiss
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    ...rest,
    className: classix.cx(styles$1.Snackbar, styles$1[`Snackbar--${kind}`], className),
    "data-test-id": testId,
    role: "status",
    children: [/* @__PURE__ */ jsxRuntime.jsx(icons.StatusIcon, {
      kind,
      className: styles$1["Snackbar-icon"]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: styles$1["Snackbar-content"],
      children: [header && /* @__PURE__ */ jsxRuntime.jsx("h4", {
        className: styles$1["Snackbar-heading"],
        children: header
      }), /* @__PURE__ */ jsxRuntime.jsx("span", {
        className: styles$1["Snackbar-description"],
        children: description
      }), " ", CTA]
    }), /* @__PURE__ */ jsxRuntime.jsx(button.IconButton, {
      icon: /* @__PURE__ */ jsxRuntime.jsx(icons.Close, {
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
const loadFeatures = () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require(
  "framer-motion"
))).then((res) => res.domAnimation);
const SnackbarCenter = ({
  snackbars,
  dismissSnackbar,
  className
}) => {
  const classes = classix.cx(styles.SnackbarCenter, className);
  const handleDismiss = (item) => {
    var _a;
    (_a = item.onDismiss) == null ? void 0 : _a.call(item);
    dismissSnackbar(item._id);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.LazyMotion, {
    strict: true,
    features: loadFeatures,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: classes,
      children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, {
        initial: false,
        children: snackbars.map((item) => /* @__PURE__ */ jsxRuntime.jsx(framerMotion.m.div, {
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
          children: /* @__PURE__ */ jsxRuntime.jsx(Snackbar, {
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
exports.Snackbar = Snackbar;
exports.SnackbarCenter = SnackbarCenter;
//# sourceMappingURL=index.js.map
