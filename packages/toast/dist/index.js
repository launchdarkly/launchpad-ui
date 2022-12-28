require('./style.css');
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@launchpad-ui/icons");
const classix = require("classix");
const react = require("react");
const framerMotion = require("framer-motion");
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
  react.useEffect(() => {
    setTimeout(() => {
      onDismiss();
    }, 6e3);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ...rest,
      className: classix.cx(styles$1.Toast, styles$1[`Toast--${kind}`], className),
      "data-test-id": testId,
      role: "status",
      children: [
        kind !== "info" && /* @__PURE__ */ jsxRuntime.jsx(icons.StatusIcon, { kind, className: styles$1["Toast-icon"] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: styles$1["Toast-content"], children: content })
      ]
    }
  );
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
const ToastCenter = ({ toasts, onDismiss, className }) => {
  const classes = classix.cx(styles.ToastCenter, className);
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.LazyMotion, { strict: true, features: loadFeatures, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { initial: false, children: toasts.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.m.div,
    {
      className: styles["ToastCenter-item"],
      transition: { ease: "easeInOut" },
      initial: { y: "100%" },
      animate: { y: "0%" },
      exit: { y: "0%" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Toast,
        {
          kind: item.kind,
          content: item.content,
          onDismiss: () => onDismiss(item._id)
        }
      )
    },
    item._id
  )) }) }) });
};
exports.Toast = Toast;
exports.ToastCenter = ToastCenter;
//# sourceMappingURL=index.js.map
