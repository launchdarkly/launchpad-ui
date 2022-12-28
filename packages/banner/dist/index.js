require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const button = require("@launchpad-ui/button");
const icons = require("@launchpad-ui/icons");
const classix = require("classix");
const Banner$1 = "_Banner_1hy8w_25";
const styles = {
  Banner: Banner$1,
  "Banner-heading": "_Banner-heading_1hy8w_36",
  "Banner-content": "_Banner-content_1hy8w_44",
  "Banner--error": "_Banner--error_1hy8w_53",
  "Banner--warning": "_Banner--warning_1hy8w_58",
  "Banner--info": "_Banner--info_1hy8w_63",
  "Banner-icon": "_Banner-icon_1hy8w_68"
};
const Banner = ({
  kind,
  className,
  children,
  onDismiss,
  dismissible,
  header,
  "data-test-id": testId = "banner",
  ...rest
}) => {
  const classes = classix.cx(styles.Banner, styles[`Banner--${kind}`], className);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: classes, "data-test-id": testId, ...rest, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      icons.StatusIcon,
      {
        kind,
        className: styles["Banner-icon"],
        "data-test-id": `${testId}-status-icon`
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles["Banner-content"], children: [
      header && /* @__PURE__ */ jsxRuntime.jsx("h4", { className: styles["Banner-heading"], children: header }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { children })
    ] }),
    dismissible && /* @__PURE__ */ jsxRuntime.jsx(
      button.IconButton,
      {
        "aria-label": "Close banner",
        icon: /* @__PURE__ */ jsxRuntime.jsx(icons.Close, { size: "small" }),
        size: "small",
        onClick: onDismiss,
        kind: "close",
        "data-test-id": testId ? `${testId}-dismiss-button` : void 0
      }
    )
  ] });
};
exports.Banner = Banner;
//# sourceMappingURL=index.js.map
