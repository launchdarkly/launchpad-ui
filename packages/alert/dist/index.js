require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const button = require("@launchpad-ui/button");
const icons = require("@launchpad-ui/icons");
const classix = require("classix");
const react = require("react");
const Alert$1 = "_Alert_1kymb_43";
const styles$1 = {
  Alert: Alert$1,
  "Alert--inline": "_Alert--inline_1kymb_43",
  "Alert-heading": "_Alert-heading_1kymb_64",
  "Alert-icon": "_Alert-icon_1kymb_77",
  "Alert--small": "_Alert--small_1kymb_89",
  "Alert--wide": "_Alert--wide_1kymb_98",
  "Alert--compact": "_Alert--compact_1kymb_103",
  "Alert--info": "_Alert--info_1kymb_116",
  "Alert--success": "_Alert--success_1kymb_120",
  "Alert--warning": "_Alert--warning_1kymb_124",
  "Alert--error": "_Alert--error_1kymb_128",
  "Alert--bordered": "_Alert--bordered_1kymb_132",
  "Alert-content": "_Alert-content_1kymb_154",
  "Alert-close": "_Alert-close_1kymb_159",
  "focus-visible": "_focus-visible_1kymb_1"
};
const Alert = ({
  children,
  className,
  compact,
  isInline,
  kind = "info",
  size = "medium",
  wide,
  dismissible,
  onDismiss,
  noIcon,
  header,
  "data-test-id": testId = "alert",
  ...rest
}) => {
  const [dismissed, setDismissed] = react.useState(false);
  const defaultClasses = `${styles$1.Alert} ${styles$1[`Alert--${kind}`]}`;
  const sizeClass = size === "small" && styles$1[`Alert--${size}`];
  const classes = classix.cx(
    defaultClasses,
    className,
    isInline ? styles$1["Alert--inline"] : styles$1["Alert--bordered"],
    sizeClass,
    compact && styles$1["Alert--compact"],
    wide && styles$1["Alert--wide"]
  );
  const handleDismissClicked = () => {
    if (onDismiss) {
      onDismiss();
    }
    setDismissed(true);
  };
  if (dismissed) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ...rest,
      className: classes,
      "data-test-id": testId,
      role: ["info", "success"].includes(kind) ? "status" : "alert",
      children: [
        !noIcon && /* @__PURE__ */ jsxRuntime.jsx(
          icons.StatusIcon,
          {
            kind,
            className: styles$1["Alert-icon"],
            size,
            "data-test-id": `${testId}-status-icon`
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$1["Alert-content"], children: [
          header && /* @__PURE__ */ jsxRuntime.jsx("h4", { className: styles$1["Alert-heading"], "data-test-id": `${testId}-header`, children: header }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { children })
        ] }),
        dismissible && /* @__PURE__ */ jsxRuntime.jsx(
          button.IconButton,
          {
            "aria-label": "Close this alert.",
            size: "small",
            className: styles$1["Alert-close"],
            icon: /* @__PURE__ */ jsxRuntime.jsx(icons.Close, { size: "small" }),
            kind: "close",
            onClick: handleDismissClicked,
            "data-test-id": testId ? `${testId}-dismiss-button` : void 0
          }
        )
      ]
    }
  );
};
const CollapsibleAlert$1 = "_CollapsibleAlert_1ew79_14";
const styles = {
  CollapsibleAlert: CollapsibleAlert$1,
  "CollapsibleAlert-button": "_CollapsibleAlert-button_1ew79_23",
  "focus-visible": "_focus-visible_1ew79_1",
  "CollapsibleAlert--icon": "_CollapsibleAlert--icon_1ew79_52",
  "CollapsibleAlert--container": "_CollapsibleAlert--container_1ew79_58",
  "CollapsibleAlert--contentContainer": "_CollapsibleAlert--contentContainer_1ew79_66"
};
const CollapsibleAlert = ({
  children,
  className,
  kind,
  message,
  "data-test-id": testId = "collapsible-alert",
  ...rest
}) => {
  const [alertCollapsed, setAlertCollapsed] = react.useState(true);
  const buttonRef = react.useRef(null);
  const classes = classix.cx(styles["CollapsibleAlert--container"], className);
  const toggleOpen = () => {
    setAlertCollapsed(!alertCollapsed);
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: classes, "data-test-id": testId, ...rest, children: /* @__PURE__ */ jsxRuntime.jsxs(Alert, { kind, size: "medium", className: styles.CollapsibleAlert, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { children: message }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        "aria-expanded": !alertCollapsed,
        "aria-haspopup": true,
        ref: buttonRef,
        onClick: toggleOpen,
        "data-test-id": `${testId}-button`,
        className: styles["CollapsibleAlert-button"],
        children: alertCollapsed ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Show more" }),
          /* @__PURE__ */ jsxRuntime.jsx(icons.ExpandMore, { className: styles["CollapsibleAlert--icon"], size: "medium" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Show less" }),
          /* @__PURE__ */ jsxRuntime.jsx(icons.ExpandMore, { className: styles["CollapsibleAlert--icon"], size: "medium" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["CollapsibleAlert--contentContainer"], children: !alertCollapsed && /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children }) })
  ] }) });
};
exports.Alert = Alert;
exports.CollapsibleAlert = CollapsibleAlert;
//# sourceMappingURL=index.js.map
