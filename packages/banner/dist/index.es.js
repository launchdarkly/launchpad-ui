import './style.css';
import { IconButton } from "@launchpad-ui/button";
import { StatusIcon, Close } from "@launchpad-ui/icons";
import { cx } from "classix";
import { jsxs, jsx } from "react/jsx-runtime";
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
  const classes = cx(styles.Banner, styles[`Banner--${kind}`], className);
  return /* @__PURE__ */ jsxs("div", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children: [/* @__PURE__ */ jsx(StatusIcon, {
      kind,
      className: styles["Banner-icon"],
      "data-test-id": `${testId}-status-icon`
    }), /* @__PURE__ */ jsxs("div", {
      className: styles["Banner-content"],
      children: [header && /* @__PURE__ */ jsx("h4", {
        className: styles["Banner-heading"],
        children: header
      }), /* @__PURE__ */ jsx("div", {
        children
      })]
    }), dismissible && /* @__PURE__ */ jsx(IconButton, {
      "aria-label": "Close banner",
      icon: /* @__PURE__ */ jsx(Close, {
        size: "small"
      }),
      size: "small",
      onClick: onDismiss,
      kind: "close",
      "data-test-id": testId ? `${testId}-dismiss-button` : void 0
    })]
  });
};
export {
  Banner
};
//# sourceMappingURL=index.es.js.map
