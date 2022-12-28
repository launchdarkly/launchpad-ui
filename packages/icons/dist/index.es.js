import './style.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useId, useEffect, Children, isValidElement, cloneElement, forwardRef } from "react";
import { cx } from "classix";
const icon = "_icon_131nk_1";
const subtle = "_subtle_131nk_9";
const small = "_small_131nk_13";
const tiny = "_tiny_131nk_18";
const micro = "_micro_131nk_23";
const medium = "_medium_131nk_28";
const mlarge = "_mlarge_131nk_33";
const large = "_large_131nk_38";
const xlarge = "_xlarge_131nk_43";
const huge = "_huge_131nk_48";
const styles = {
  icon,
  subtle,
  small,
  tiny,
  micro,
  medium,
  mlarge,
  large,
  xlarge,
  huge
};
const Icon = ({
  name,
  subtle: subtle2,
  className,
  size,
  children,
  "data-test-id": testId = "icon",
  ...props
}) => {
  const sizeClass = size ? styles[size] : false;
  const classes = cx(styles.icon, sizeClass, subtle2 && styles.subtle, `icon-${name}`, className);
  const svgRef = useRef(null);
  const prefix = `svg-${useId()}`;
  useEffect(() => {
    var _a, _b, _c, _d;
    const title = (_a = svgRef.current) == null ? void 0 : _a.querySelector("title");
    const desc = (_b = svgRef.current) == null ? void 0 : _b.querySelector("desc");
    if (title) {
      const id = `${prefix}-${name}-title`;
      title.setAttribute("id", id);
      (_c = svgRef.current) == null ? void 0 : _c.setAttribute("aria-labelledby", id);
    }
    if (desc) {
      const id = `${prefix}-${name}-description`;
      desc.setAttribute("id", id);
      (_d = svgRef.current) == null ? void 0 : _d.setAttribute("aria-describedby", id);
    }
  }, [name, prefix]);
  return /* @__PURE__ */ jsx("span", { ...props, "data-test-id": testId, className: classes, children: Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ref: svgRef
      });
    }
    return null;
  }) });
};
const SvgAccountClockOutline = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("g", { clipPath: "url(#a)", children: /* @__PURE__ */ jsx("path", { d: "M10.63 14.1a6.998 6.998 0 0 1 9.27-3.47 6.998 6.998 0 0 1 3.47 9.27A6.98 6.98 0 0 1 17 24c-2.7 0-5.17-1.56-6.33-4H1v-2c.06-1.14.84-2.07 2.34-2.82S6.72 14.04 9 14c.57 0 1.11.05 1.63.1ZM9 4c1.12.03 2.06.42 2.81 1.17S12.93 6.86 12.93 8c0 1.14-.37 2.08-1.12 2.83-.75.75-1.69 1.12-2.81 1.12s-2.06-.37-2.81-1.12C5.44 10.08 5.07 9.14 5.07 8c0-1.14.37-2.08 1.12-2.83C6.94 4.42 7.88 4.03 9 4Zm8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1-8h1.5v2.82l2.44 1.41-.75 1.3L16 17.69V14Z" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z" }) }) })
    ]
  }
);
const ForwardRef$1K = forwardRef(SvgAccountClockOutline);
const IconWrapped$1K = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "accountClockOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1K, {}) });
const SvgAdd = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
    ]
  }
);
const ForwardRef$1J = forwardRef(SvgAdd);
const IconWrapped$1J = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "add", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1J, {}) });
const SvgAlertRhombus = (props, ref) => /* @__PURE__ */ jsxs("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ref, ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "Error" }),
  /* @__PURE__ */ jsx("path", { d: "M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m-1 5h2v6h-2V7m0 8h2v2h-2v-2Z" })
] });
const ForwardRef$1I = forwardRef(SvgAlertRhombus);
const IconWrapped$1I = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "alertRhombus", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1I, {}) });
const SvgApproval = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M4 22v-6q0-.825.588-1.413Q5.175 14 6 14h12q.825 0 1.413.587Q20 15.175 20 16v6Zm2-4h12v-2H6Zm6-4L7 7q0-2.075 1.463-3.537Q9.925 2 12 2t3.538 1.463Q17 4.925 17 7Zm0-2.8L15 7q0-1.25-.875-2.125T12 4q-1.25 0-2.125.875T9 7Zm0 0Z" })
  }
);
const ForwardRef$1H = forwardRef(SvgApproval);
const IconWrapped$1H = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "approval", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1H, {}) });
const SvgAreaChart = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M3 13v7h18v-1.5l-9-7L8 17l-5-4zm0-6 4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44V7z" })
    ]
  }
);
const ForwardRef$1G = forwardRef(SvgAreaChart);
const IconWrapped$1G = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "areaChart", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1G, {}) });
const SvgArticle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" })
  }
);
const ForwardRef$1F = forwardRef(SvgArticle);
const IconWrapped$1F = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "article", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1F, {}) });
const SvgBorderAll = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z" })
    ]
  }
);
const ForwardRef$1E = forwardRef(SvgBorderAll);
const IconWrapped$1E = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "borderAll", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1E, {}) });
const SvgBullhorn = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4l-5 4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4z" })
  }
);
const ForwardRef$1D = forwardRef(SvgBullhorn);
const IconWrapped$1D = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "bullhorn", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1D, {}) });
const SvgBullseyeArrow = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-.607-3.393l-1.606 1.606c.138.586.21 1.185.213 1.787a8 8 0 1 1-8-8 8.001 8.001 0 0 1 1.79.21l1.607-1.607A10 10 0 0 0 12 2Zm7 0-4 4v1.5l-2.553 2.553a2 2 0 1 0 1.5 1.5L16.5 9H18l4-4h-3V2Zm-7 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6Z" })
  }
);
const ForwardRef$1C = forwardRef(SvgBullseyeArrow);
const IconWrapped$1C = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "bullseyeArrow", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1C, {}) });
const SvgBullseye = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2Z" })
  }
);
const ForwardRef$1B = forwardRef(SvgBullseye);
const IconWrapped$1B = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "bullseye", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1B, {}) });
const SvgCalendarToday = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" })
  }
);
const ForwardRef$1A = forwardRef(SvgCalendarToday);
const IconWrapped$1A = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "calendarToday", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1A, {}) });
const SvgCancel = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
    ]
  }
);
const ForwardRef$1z = forwardRef(SvgCancel);
const IconWrapped$1z = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "cancel", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1z, {}) });
const SvgChangeHistory = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 7.77 18.39 18H5.61L12 7.77ZM12 4 2 20h20L12 4Z" })
  }
);
const ForwardRef$1y = forwardRef(SvgChangeHistory);
const IconWrapped$1y = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "changeHistory", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1y, {}) });
const SvgChatBubbleCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm5.293-4.707A1 1 0 0 1 8 7h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9l-2 2V8a1 1 0 0 1 .293-.707Z"
      }
    )
  }
);
const ForwardRef$1x = forwardRef(SvgChatBubbleCircle);
const IconWrapped$1x = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "chatBubbleCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1x, {}) });
const SvgCheckCircleOutline = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0V0zm0 0h24v24H0V0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    ]
  }
);
const ForwardRef$1w = forwardRef(SvgCheckCircleOutline);
const IconWrapped$1w = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "checkCircleOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1w, {}) });
const SvgCheckCircle = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
    ]
  }
);
const ForwardRef$1v = forwardRef(SvgCheckCircle);
const IconWrapped$1v = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "checkCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1v, {}) });
const SvgCheck = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })
  }
);
const ForwardRef$1u = forwardRef(SvgCheck);
const IconWrapped$1u = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "check", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1u, {}) });
const SvgChevronLeft = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
    ]
  }
);
const ForwardRef$1t = forwardRef(SvgChevronLeft);
const IconWrapped$1t = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "chevronLeft", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1t, {}) });
const SvgChevronRight = (props, ref) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
] });
const ForwardRef$1s = forwardRef(SvgChevronRight);
const IconWrapped$1s = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "chevronRight", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1s, {}) });
const SvgCircleDashed = (props, ref) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M9 0C7.04.18 5.19.95 3.67 2.2L5.1 3.74c1.12-.9 2.47-1.48 3.9-1.68V0ZM2.26 3.67A9.81 9.81 0 0 0 .05 9h2c.19-1.42.75-2.77 1.64-3.9L2.26 3.67ZM.06 11c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 2.06 11h-2Zm5 5.37-1.39 1.37A9.994 9.994 0 0 0 9 20v-2a8.002 8.002 0 0 1-3.9-1.63h-.04ZM11 0c1.96.18 3.81.95 5.33 2.2L14.9 3.74A7.995 7.995 0 0 0 11 2.06V0Zm6.74 3.67A9.81 9.81 0 0 1 19.95 9h-2a8.017 8.017 0 0 0-1.64-3.9l1.43-1.43Zm2.2 7.33c-.2 1.96-.97 3.81-2.21 5.33l-1.42-1.43a8.002 8.002 0 0 0 1.63-3.9h2Zm-5 5.37 1.39 1.37A9.994 9.994 0 0 1 11 20v-2c1.42-.18 2.77-.75 3.9-1.63h.04Z" }) });
const ForwardRef$1r = forwardRef(SvgCircleDashed);
const IconWrapped$1r = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "circleDashed", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1r, {}) });
const SvgCircleOutline = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  }
);
const ForwardRef$1q = forwardRef(SvgCircleOutline);
const IconWrapped$1q = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "circleOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1q, {}) });
const SvgCircle = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" })
    ]
  }
);
const ForwardRef$1p = forwardRef(SvgCircle);
const IconWrapped$1p = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "circle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1p, {}) });
const SvgClickMetric = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm3.2 5v7.1l2.1-2.1 3.8 3.9L17 14l-3.8-3.9L15.3 8H8.2Z" })
  }
);
const ForwardRef$1o = forwardRef(SvgClickMetric);
const IconWrapped$1o = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "clickMetric", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1o, {}) });
const SvgClipboard = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M18.04 11.13c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1-2.05-2.05 1-1c.11-.11.25-.17.39-.17Zm-1.97 1.75 2.05 2.05L12.06 21H10v-2.06l6.07-6.06ZM8 18l-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4.18C6.6.84 7.7 0 9 0c1.3 0 2.4.84 2.82 2H16c1.1 0 2 .9 2 2v4l-2 2V4h-2v2H4V4H2v14h6ZM9 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z" })
  }
);
const ForwardRef$1n = forwardRef(SvgClipboard);
const IconWrapped$1n = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "clipboard", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1n, {}) });
const SvgClockAlertOutline = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 12h2v6h-2v-6Zm0 8h2v2h-2v-2ZM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c2.3 0 4.3-.8 6-2V10h3.8c-.9-4.6-5-8-9.8-8Zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3Z" })
  }
);
const ForwardRef$1m = forwardRef(SvgClockAlertOutline);
const IconWrapped$1m = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "clockAlertOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1m, {}) });
const SvgClose = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
    ]
  }
);
const ForwardRef$1l = forwardRef(SvgClose);
const IconWrapped$1l = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "close", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1l, {}) });
const SvgConnection = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M18 11h-3.18C14.4 9.84 13.3 9 12 9c-1.3 0-2.4.84-2.82 2H6c-.33 0-2-.1-2-2V8c0-1.83 1.54-2 2-2h10.18C16.6 7.16 17.7 8 19 8a3 3 0 0 0 0-6c-1.3 0-2.4.84-2.82 2H6C4.39 4 2 5.06 2 8v1c0 2.94 2.39 4 4 4h3.18c.42 1.16 1.52 2 2.82 2 1.3 0 2.4-.84 2.82-2H18c.33 0 2 .1 2 2v1c0 1.83-1.54 2-2 2H7.82C7.4 16.84 6.3 16 5 16a3 3 0 0 0 0 6c1.3 0 2.4-.84 2.82-2H18c1.61 0 4-1.07 4-4v-1c0-2.93-2.39-4-4-4Zm1-7a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" })
  }
);
const ForwardRef$1k = forwardRef(SvgConnection);
const IconWrapped$1k = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "connection", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1k, {}) });
const SvgContentCopy = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" })
    ]
  }
);
const ForwardRef$1j = forwardRef(SvgContentCopy);
const IconWrapped$1j = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "contentCopy", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1j, {}) });
const SvgCreditCard = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" })
  }
);
const ForwardRef$1i = forwardRef(SvgCreditCard);
const IconWrapped$1i = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "creditCard", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1i, {}) });
const SvgCustomMetric = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm5.59 11.59L11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59ZM13 14.17l1.41 1.42L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17Z",
        clipRule: "evenodd"
      }
    )
  }
);
const ForwardRef$1h = forwardRef(SvgCustomMetric);
const IconWrapped$1h = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "customMetric", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1h, {}) });
const SvgDarkMode = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z" })
  }
);
const ForwardRef$1g = forwardRef(SvgDarkMode);
const IconWrapped$1g = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "darkMode", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1g, {}) });
const SvgDelete = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
    ]
  }
);
const ForwardRef$1f = forwardRef(SvgDelete);
const IconWrapped$1f = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "delete", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1f, {}) });
const SvgDownload = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" })
  }
);
const ForwardRef$1e = forwardRef(SvgDownload);
const IconWrapped$1e = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "download", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1e, {}) });
const SvgEdit = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
  }
);
const ForwardRef$1d = forwardRef(SvgEdit);
const IconWrapped$1d = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "edit", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1d, {}) });
const SvgEqualCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm5-3.5v2h10v-2H7Zm0 5v2h10v-2H7Z"
      }
    )
  }
);
const ForwardRef$1c = forwardRef(SvgEqualCircle);
const IconWrapped$1c = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "equalCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1c, {}) });
const SvgErrorCircle = (props, ref) => /* @__PURE__ */ jsxs("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ref, ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "Error" }),
  /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11.5H7v-3h10v3Z" })
] });
const ForwardRef$1b = forwardRef(SvgErrorCircle);
const IconWrapped$1b = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "errorCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1b, {}) });
const SvgEventBusy = (props, ref) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M19 20H5V9h14m0-5h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM9.31 18l2.44-2.44L14.19 18l1.06-1.06-2.44-2.44 2.44-2.44L14.19 11l-2.44 2.44L9.31 11l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 18Z" }) });
const ForwardRef$1a = forwardRef(SvgEventBusy);
const IconWrapped$1a = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "eventBusy", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1a, {}) });
const SvgExpandLess = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })
    ]
  }
);
const ForwardRef$19 = forwardRef(SvgExpandLess);
const IconWrapped$19 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "expandLess", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$19, {}) });
const SvgExpandMore = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
    ]
  }
);
const ForwardRef$18 = forwardRef(SvgExpandMore);
const IconWrapped$18 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "expandMore", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$18, {}) });
const SvgExtension = (props, ref) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z" })
] });
const ForwardRef$17 = forwardRef(SvgExtension);
const IconWrapped$17 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "extension", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$17, {}) });
const SvgFileDocumentEditCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM7.46 7.143C7.46 6.508 7.969 6 8.602 6h4.572l3.428 3.429v1.194l-1.09 1.09h-6.91v1.145h5.767L13.225 14H8.602v1.143h3.48l-1.193 1.194v1.092H8.602a1.142 1.142 0 0 1-1.142-1.143V7.142ZM15.745 10l-3.143-3.143V10h3.143Zm.717 2.379a.32.32 0 0 1 .226-.093c.082 0 .162.03.222.093l.742.742a.315.315 0 0 1 0 .448l-.583.581-1.19-1.19.583-.581Zm-4.43 4.43 3.51-3.513 1.19 1.19L13.223 18h-1.19v-1.191Z"
      }
    )
  }
);
const ForwardRef$16 = forwardRef(SvgFileDocumentEditCircle);
const IconWrapped$16 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "fileDocumentEditCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$16, {}) });
const SvgFilterAlt = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24m0 24H0", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z" }),
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" })
    ]
  }
);
const ForwardRef$15 = forwardRef(SvgFilterAlt);
const IconWrapped$15 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "filterAlt", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$15, {}) });
const SvgFlagCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm11.4-5 .24 1.294H17v6.47h-4.2l-.24-1.293H9.2V18H8V7h5.4Z"
      }
    )
  }
);
const ForwardRef$14 = forwardRef(SvgFlagCircle);
const IconWrapped$14 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "flagCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$14, {}) });
const SvgFlag = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" })
    ]
  }
);
const ForwardRef$13 = forwardRef(SvgFlag);
const IconWrapped$13 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "flag", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$13, {}) });
const SvgForward = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 8V4l8 8-8 8v-4H4V8z" })
    ]
  }
);
const ForwardRef$12 = forwardRef(SvgForward);
const IconWrapped$12 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "forward", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$12, {}) });
const SvgGrid3X3 = (props, ref) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M0 4h4V0H0v4Zm6 12h4v-4H6v4Zm-6 0h4v-4H0v4Zm0-6h4V6H0v4Zm6 0h4V6H6v4Zm6-10v4h4V0h-4ZM6 4h4V0H6v4Zm6 6h4V6h-4v4Zm0 6h4v-4h-4v4Z" }) });
const ForwardRef$11 = forwardRef(SvgGrid3X3);
const IconWrapped$11 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "grid3X3", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$11, {}) });
const SvgGroup = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" })
    ]
  }
);
const ForwardRef$10 = forwardRef(SvgGroup);
const IconWrapped$10 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "group", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$10, {}) });
const SvgHalfCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm2 0c0-4.4 3.6-8 8-8s8 3.6 8 8H4z" })
  }
);
const ForwardRef$$ = forwardRef(SvgHalfCircle);
const IconWrapped$$ = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "halfCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$$, {}) });
const SvgHamburgerMenu = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
    ]
  }
);
const ForwardRef$_ = forwardRef(SvgHamburgerMenu);
const IconWrapped$_ = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "hamburgerMenu", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$_, {}) });
const SvgHelp = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })
    ]
  }
);
const ForwardRef$Z = forwardRef(SvgHelp);
const IconWrapped$Z = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "help", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$Z, {}) });
const SvgHorizontalRule = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 11h16v2H4z" })
  }
);
const ForwardRef$Y = forwardRef(SvgHorizontalRule);
const IconWrapped$Y = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "horizontalRule", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$Y, {}) });
const SvgInbox = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-5q.95 0 1.725-.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45Q11.05 16 12 16Z" })
  }
);
const ForwardRef$X = forwardRef(SvgInbox);
const IconWrapped$X = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "inbox", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$X, {}) });
const SvgInfo = (props, ref) => /* @__PURE__ */ jsxs("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ref, ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "Info" }),
  /* @__PURE__ */ jsx("path", { d: "M13.5 9h-3V6h3v3Zm0 8.5h-3v-6h3v6ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" })
] });
const ForwardRef$W = forwardRef(SvgInfo);
const IconWrapped$W = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "info", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$W, {}) });
const SvgKeyboardDoubleArrowLeft = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" }),
      /* @__PURE__ */ jsx("path", { d: "m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" })
    ]
  }
);
const ForwardRef$V = forwardRef(SvgKeyboardDoubleArrowLeft);
const IconWrapped$V = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "keyboardDoubleArrowLeft", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$V, {}) });
const SvgKeyboardDoubleArrowRight = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" }),
      /* @__PURE__ */ jsx("path", { d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" })
    ]
  }
);
const ForwardRef$U = forwardRef(SvgKeyboardDoubleArrowRight);
const IconWrapped$U = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "keyboardDoubleArrowRight", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$U, {}) });
const SvgLightMode = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287ZM12 12Z" })
  }
);
const ForwardRef$T = forwardRef(SvgLightMode);
const IconWrapped$T = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "lightMode", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$T, {}) });
const SvgLink = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" })
    ]
  }
);
const ForwardRef$S = forwardRef(SvgLink);
const IconWrapped$S = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "link", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$S, {}) });
const SvgLock = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })
    ]
  }
);
const ForwardRef$R = forwardRef(SvgLock);
const IconWrapped$R = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "lock", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$R, {}) });
const SvgMinusCircle = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm5 1h10v-2H7v2Z"
      }
    )
  }
);
const ForwardRef$Q = forwardRef(SvgMinusCircle);
const IconWrapped$Q = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "minusCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$Q, {}) });
const SvgMoreHoriz = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
  }
);
const ForwardRef$P = forwardRef(SvgMoreHoriz);
const IconWrapped$P = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "moreHoriz", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$P, {}) });
const SvgMoreVert = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
    ]
  }
);
const ForwardRef$O = forwardRef(SvgMoreVert);
const IconWrapped$O = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "moreVert", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$O, {}) });
const SvgNotifications = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
  }
);
const ForwardRef$N = forwardRef(SvgNotifications);
const IconWrapped$N = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "notifications", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$N, {}) });
const SvgOpenInNew = (props, ref) => /* @__PURE__ */ jsxs("svg", { role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ref, ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "Open in new" }),
  /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" })
] });
const ForwardRef$M = forwardRef(SvgOpenInNew);
const IconWrapped$M = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "openInNew", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$M, {}) });
const SvgPause = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    role: "img",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
    ]
  }
);
const ForwardRef$L = forwardRef(SvgPause);
const IconWrapped$L = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "pause", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$L, {}) });
const SvgPersonAdd = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6Zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" })
  }
);
const ForwardRef$K = forwardRef(SvgPersonAdd);
const IconWrapped$K = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "personAdd", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$K, {}) });
const SvgPersonOff = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M8.65 5.82a3.999 3.999 0 1 1 5.53 5.53L8.65 5.82ZM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17Zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45A2.97 2.97 0 0 0 4 17.22V20h13.17l2.61 2.61 1.41-1.42Z" })
  }
);
const ForwardRef$J = forwardRef(SvgPersonOff);
const IconWrapped$J = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "personOff", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$J, {}) });
const SvgPersonRemoveAlt = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4ZM1 10v2h7v-2H1Zm14 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" })
  }
);
const ForwardRef$I = forwardRef(SvgPersonRemoveAlt);
const IconWrapped$I = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "personRemoveAlt", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$I, {}) });
const SvgPerson = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
    ]
  }
);
const ForwardRef$H = forwardRef(SvgPerson);
const IconWrapped$H = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "person", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$H, {}) });
const SvgPieChart = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" })
  }
);
const ForwardRef$G = forwardRef(SvgPieChart);
const IconWrapped$G = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "pieChart", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$G, {}) });
const SvgPlayArrow = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7L8 5Z" })
  }
);
const ForwardRef$F = forwardRef(SvgPlayArrow);
const IconWrapped$F = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "playArrow", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$F, {}) });
const SvgPlayCircle = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z" })
    ]
  }
);
const ForwardRef$E = forwardRef(SvgPlayCircle);
const IconWrapped$E = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "playCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$E, {}) });
const SvgPlusCircleFill = (props, ref) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" }) });
const ForwardRef$D = forwardRef(SvgPlusCircleFill);
const IconWrapped$D = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "plusCircleFill", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$D, {}) });
const SvgPlusCircleOutline = (props, ref) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z" }) });
const ForwardRef$C = forwardRef(SvgPlusCircleOutline);
const IconWrapped$C = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "plusCircleOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$C, {}) });
const SvgPower = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z" })
    ]
  }
);
const ForwardRef$B = forwardRef(SvgPower);
const IconWrapped$B = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "power", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$B, {}) });
const SvgPreview = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" })
    ]
  }
);
const ForwardRef$A = forwardRef(SvgPreview);
const IconWrapped$A = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "preview", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$A, {}) });
const SvgProgressCheck = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93-.45-4.75-4.22-8.5-8.95-8.97zm-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2zM4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67zM15.5 8.5l-4.88 4.88-2.12-2.12-1.06 1.06 3.18 3.18 5.94-5.94L15.5 8.5zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2zm5.04 5.37-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63z" })
  }
);
const ForwardRef$z = forwardRef(SvgProgressCheck);
const IconWrapped$z = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "progressCheck", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$z, {}) });
const SvgPulseActive = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M2 11.7C2.1 6.3 6.6 2 12 2s9.8 4.3 10 9.7h-8.9c-.5 0-.9.3-1 .6l-.7 1.6-2.2-5.8c-.4-1-1.7-.9-2.1 0l-1.4 3.6H2zm11.5 1.7-1 2.5c-.4 1.1-1.7 1-2.1 0l-2.3-5.8L7 12.6c-.2.4-.5.7-1 .7H2.1C2.8 18.2 6.9 22 12 22c5.1 0 9.2-3.8 9.9-8.6h-8.4z" })
  }
);
const ForwardRef$y = forwardRef(SvgPulseActive);
const IconWrapped$y = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "pulseActive", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$y, {}) });
const SvgQuickStart = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M13 2h-2v3H3l2.5 5L3 15h8v7h2v-7h5l3-5-3-5h-5V2z" })
  }
);
const ForwardRef$x = forwardRef(SvgQuickStart);
const IconWrapped$x = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "quickStart", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$x, {}) });
const SvgRadioButtonChecked = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    ]
  }
);
const ForwardRef$w = forwardRef(SvgRadioButtonChecked);
const IconWrapped$w = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "radioButtonChecked", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$w, {}) });
const SvgReleasePath = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M6 11h5v2H6v-2ZM14 11h5v2h-5v-2Z" }),
      /* @__PURE__ */ jsx("path", { d: "M2 10.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3ZM10 10.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3Z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22 10.5h-3v3h3v-3Zm-3-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3Z"
        }
      )
    ]
  }
);
const ForwardRef$v = forwardRef(SvgReleasePath);
const IconWrapped$v = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "releasePath", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$v, {}) });
const SvgRemove = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M19 13H5v-2h14v2Z" })
  }
);
const ForwardRef$u = forwardRef(SvgRemove);
const IconWrapped$u = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "remove", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$u, {}) });
const SvgRobot = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 2a2 2 0 0 1 1 3.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 12 2zM7.5 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm9 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" })
  }
);
const ForwardRef$t = forwardRef(SvgRobot);
const IconWrapped$t = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "robot", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$t, {}) });
const SvgSchedule = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
      /* @__PURE__ */ jsx("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })
    ]
  }
);
const ForwardRef$s = forwardRef(SvgSchedule);
const IconWrapped$s = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "schedule", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$s, {}) });
const SvgSearch = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
  }
);
const ForwardRef$r = forwardRef(SvgSearch);
const IconWrapped$r = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "search", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$r, {}) });
const SvgShieldAccount = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.13 12A9.69 9.69 0 0 1 12 20.92 9.69 9.69 0 0 1 6.87 17c-.34-.5-.63-1-.87-1.53 0-1.65 2.71-3 6-3s6 1.32 6 3c-.24.53-.53 1.03-.87 1.53z" })
  }
);
const ForwardRef$q = forwardRef(SvgShieldAccount);
const IconWrapped$q = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "shieldAccount", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$q, {}) });
const SvgShieldKey = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm9 3c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6Zm-9-5a3 3 0 0 0-3 3c0 1.31.83 2.42 2 2.83V18h2v-2h2v-2h-2v-2.17c1.17-.41 2-1.52 2-2.83a3 3 0 0 0-3-3Z" })
  }
);
const ForwardRef$p = forwardRef(SvgShieldKey);
const IconWrapped$p = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "shieldKey", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$p, {}) });
const SvgStarOutline = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" })
  }
);
const ForwardRef$o = forwardRef(SvgStarOutline);
const IconWrapped$o = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "starOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$o, {}) });
const SvgStar = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
    ]
  }
);
const ForwardRef$n = forwardRef(SvgStar);
const IconWrapped$n = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "star", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$n, {}) });
const SvgStars = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
  }
);
const ForwardRef$m = forwardRef(SvgStars);
const IconWrapped$m = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "stars", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$m, {}) });
const SvgStatusActive = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M7.76 16.24A5.944 5.944 0 0 1 6 12c0-1.66.67-3.16 1.76-4.24l1.42 1.42A3.95 3.95 0 0 0 8 12c0 1.1.45 2.1 1.17 2.83l-1.41 1.41Zm8.48 0A5.944 5.944 0 0 0 18 12c0-1.66-.67-3.16-1.76-4.24l-1.42 1.42A3.95 3.95 0 0 1 16 12c0 1.1-.45 2.1-1.17 2.83l1.41 1.41ZM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0 1 20 12ZM6.35 6.35 4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 12c0-2.21.9-4.21 2.35-5.65Z" })
  }
);
const ForwardRef$l = forwardRef(SvgStatusActive);
const IconWrapped$l = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "statusActive", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$l, {}) });
const SvgStatusInactive = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 12c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0 1 20 12ZM6.35 6.35 4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 12c0-2.21.9-4.21 2.35-5.65ZM7 11h10v2H7v-2Z" })
  }
);
const ForwardRef$k = forwardRef(SvgStatusInactive);
const IconWrapped$k = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "statusInactive", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$k, {}) });
const SvgStatusLaunched = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 12c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0 1 20 12ZM6.35 6.35 4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 12c0-2.21.9-4.21 2.35-5.65ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" })
  }
);
const ForwardRef$j = forwardRef(SvgStatusLaunched);
const IconWrapped$j = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "statusLaunched", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$j, {}) });
const SvgStatusNew = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20 12c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A9.969 9.969 0 0 0 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0 1 20 12ZM6.35 6.35 4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 12c0-2.21.9-4.21 2.35-5.65ZM17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z" })
  }
);
const ForwardRef$i = forwardRef(SvgStatusNew);
const IconWrapped$i = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "statusNew", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$i, {}) });
const SvgStepInProgressOutline = (props, ref) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: /* @__PURE__ */ jsx("path", { d: "M12.834 3.692v1.683a6.662 6.662 0 0 1 5.8 7.433c-.384 3.034-2.767 5.442-5.8 5.8v1.667a8.313 8.313 0 0 0 7.458-9.108c-.375-3.959-3.517-7.084-7.459-7.475Zm-1.667.025A8.19 8.19 0 0 0 6.725 5.55l1.192 1.233a6.663 6.663 0 0 1 3.25-1.4V3.717ZM5.55 6.725a8.237 8.237 0 0 0-1.841 4.442h1.666a6.68 6.68 0 0 1 1.367-3.25L5.55 6.725Zm-1.833 6.108a8.366 8.366 0 0 0 1.842 4.442l1.183-1.192a6.668 6.668 0 0 1-1.359-3.25H3.717Zm4.2 4.475L6.725 18.45a8.328 8.328 0 0 0 4.442 1.883v-1.666a6.668 6.668 0 0 1-3.25-1.359Z" }) });
const ForwardRef$h = forwardRef(SvgStepInProgressOutline);
const IconWrapped$h = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "stepInProgressOutline", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$h, {}) });
const SvgStepInProgress = (props, ref) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12.834 3.692v1.683a6.662 6.662 0 0 1 5.8 7.433c-.384 3.034-2.767 5.442-5.8 5.8v1.667a8.313 8.313 0 0 0 7.458-9.108c-.375-3.959-3.517-7.084-7.459-7.475Zm-1.667.025A8.19 8.19 0 0 0 6.725 5.55l1.192 1.233a6.663 6.663 0 0 1 3.25-1.4V3.717ZM5.55 6.725a8.237 8.237 0 0 0-1.841 4.442h1.666a6.68 6.68 0 0 1 1.367-3.25L5.55 6.725Zm-1.833 6.108a8.366 8.366 0 0 0 1.842 4.442l1.183-1.192a6.668 6.668 0 0 1-1.359-3.25H3.717Zm4.2 4.475L6.725 18.45a8.328 8.328 0 0 0 4.442 1.883v-1.666a6.668 6.668 0 0 1-3.25-1.359Z",
      fill: "#fff"
    }
  )
] });
const ForwardRef$g = forwardRef(SvgStepInProgress);
const IconWrapped$g = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "stepInProgress", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$g, {}) });
const SvgStop = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M6 6h12v12H6V6Z" })
  }
);
const ForwardRef$f = forwardRef(SvgStop);
const IconWrapped$f = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "stop", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$f, {}) });
const SvgSwapHoriz = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" })
    ]
  }
);
const ForwardRef$e = forwardRef(SvgSwapHoriz);
const IconWrapped$e = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "swapHoriz", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$e, {}) });
const SvgSwapVertical = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Z" })
  }
);
const ForwardRef$d = forwardRef(SvgSwapVertical);
const IconWrapped$d = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "swapVertical", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$d, {}) });
const SvgTemplatesCircle = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 63 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: 31.5, cy: 31.5, r: 31.5, fill: "#282728" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m31.5 10.583-9.854 16.125h19.708L31.5 10.583ZM41.354 46.417a8.062 8.062 0 1 0 0-16.125 8.062 8.062 0 0 0 0 16.125ZM15.375 31.187h14.333v14.334H15.375V31.187Z",
          fill: "#EFFF63"
        }
      )
    ]
  }
);
const ForwardRef$c = forwardRef(SvgTemplatesCircle);
const IconWrapped$c = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "templatesCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$c, {}) });
const SvgThumbUp = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" })
    ]
  }
);
const ForwardRef$b = forwardRef(SvgThumbUp);
const IconWrapped$b = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "thumbUp", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$b, {}) });
const SvgToggles = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M8 8.5c-.83 0-1.5-.67-1.5-1.5S7.17 5.5 8 5.5s1.5.67 1.5 1.5S8.83 8.5 8 8.5z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.75 3h7.5C17.32 3 19 4.792 19 7s-1.68 4-3.75 4h-7.5C5.68 11 4 9.208 4 7s1.68-4 3.75-4zm7.5 1h-7.5C6.292 4 5 5.283 5 7s1.292 3 2.75 3h7.5C16.708 10 18 8.717 18 7s-1.292-3-2.75-3zm0 9h-7.5C5.68 13 4 14.792 4 17s1.68 4 3.75 4h7.5c2.07 0 3.75-1.792 3.75-4s-1.68-4-3.75-4zM15 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M10 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" })
    ]
  }
);
const ForwardRef$a = forwardRef(SvgToggles);
const IconWrapped$a = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "toggles", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$a, {}) });
const SvgTrendingUpCircle = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    role: "img",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: 32, cy: 32, r: 31, fill: "#282828" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m40 20 4.58 4.58-9.76 9.76-8-8L12 41.18 14.82 44l12-12 8 8 12.6-12.58L52 32V20H40z",
          fill: "#EBFF38"
        }
      )
    ]
  }
);
const ForwardRef$9 = forwardRef(SvgTrendingUpCircle);
const IconWrapped$9 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "trendingUpCircle", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$9, {}) });
const SvgUndo = (props, ref) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", ref, ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" })
] });
const ForwardRef$8 = forwardRef(SvgUndo);
const IconWrapped$8 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "undo", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$8, {}) });
const SvgUnfoldLess = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M7.41 18.59 8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59Zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59Z" })
  }
);
const ForwardRef$7 = forwardRef(SvgUnfoldLess);
const IconWrapped$7 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "unfoldLess", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$7, {}) });
const SvgUnfoldMore = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" })
  }
);
const ForwardRef$6 = forwardRef(SvgUnfoldMore);
const IconWrapped$6 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "unfoldMore", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$6, {}) });
const SvgVerified = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12Zm-13 5-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z" })
  }
);
const ForwardRef$5 = forwardRef(SvgVerified);
const IconWrapped$5 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "verified", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$5, {}) });
const SvgViewList = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z" })
  }
);
const ForwardRef$4 = forwardRef(SvgViewList);
const IconWrapped$4 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "viewList", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$4, {}) });
const SvgVisibilityOff = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" })
  }
);
const ForwardRef$3 = forwardRef(SvgVisibilityOff);
const IconWrapped$3 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "visibilityOff", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$3, {}) });
const SvgVisibility = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" })
  }
);
const ForwardRef$2 = forwardRef(SvgVisibility);
const IconWrapped$2 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "visibility", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$2, {}) });
const SvgWarning = (props, ref) => /* @__PURE__ */ jsxs("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ref, ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "Warning" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m10.29 3.599-8.47 14.14a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3l-8.47-14.14a2 2 0 0 0-3.42 0zm3.362 13.537a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1.51-11a1.19 1.19 0 0 0-1.186 1.287l.49 6.07a.7.7 0 0 0 1.394 0l.49-6.07a1.19 1.19 0 0 0-1.187-1.287z"
    }
  )
] });
const ForwardRef$1 = forwardRef(SvgWarning);
const IconWrapped$1 = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "warning", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef$1, {}) });
const SvgWorkflowBuilder = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 121 121",
    role: "img",
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "m60.5 0 52.395 30.25v60.5L60.5 121 8.105 90.75v-60.5L60.5 0z", fill: "#282828" }),
      /* @__PURE__ */ jsx("g", { clipPath: "url(#a)", fill: "#EBFF38", children: /* @__PURE__ */ jsx("path", { d: "M70.09 51.178H50v15.61h20.09v-15.61zM71 38.22H50L60.72 22 71 38.22zM60.5 99c-5.297 0-9.596-4.33-9.596-9.678 0-5.343 4.293-9.678 9.596-9.678 5.298 0 9.596 4.329 9.596 9.678C70.09 94.665 65.798 99 60.5 99zm1.404-57.824H59.09v6.566h2.813v-6.566zm0 28.759H59.09v6.566h2.813v-6.566z" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("path", { fill: "#fff", transform: "translate(50 22)", d: "M0 0h21v77H0z" }) }) })
    ]
  }
);
const ForwardRef = forwardRef(SvgWorkflowBuilder);
const IconWrapped = ({ className, size, ...props }) => /* @__PURE__ */ jsx(Icon, { name: "workflowBuilder", className, size, ...props, children: /* @__PURE__ */ jsx(ForwardRef, {}) });
const StatusIcon = ({ kind, size = "medium", ...rest }) => {
  let Component = IconWrapped$W;
  switch (kind) {
    case "success":
      Component = IconWrapped$1v;
      break;
    case "warning":
      Component = IconWrapped$1;
      break;
    case "error":
      Component = IconWrapped$1I;
      break;
    case "info":
      Component = IconWrapped$W;
      break;
  }
  return /* @__PURE__ */ jsx(Component, { size, ...rest });
};
export {
  IconWrapped$1K as AccountClockOutline,
  IconWrapped$1J as Add,
  IconWrapped$1I as AlertRhombus,
  IconWrapped$1H as Approval,
  IconWrapped$1G as AreaChart,
  IconWrapped$1F as Article,
  IconWrapped$1E as BorderAll,
  IconWrapped$1D as Bullhorn,
  IconWrapped$1B as Bullseye,
  IconWrapped$1C as BullseyeArrow,
  IconWrapped$1A as CalendarToday,
  IconWrapped$1z as Cancel,
  IconWrapped$1y as ChangeHistory,
  IconWrapped$1x as ChatBubbleCircle,
  IconWrapped$1u as Check,
  IconWrapped$1v as CheckCircle,
  IconWrapped$1w as CheckCircleOutline,
  IconWrapped$1t as ChevronLeft,
  IconWrapped$1s as ChevronRight,
  IconWrapped$1p as Circle,
  IconWrapped$1r as CircleDashed,
  IconWrapped$1q as CircleOutline,
  IconWrapped$1o as ClickMetric,
  IconWrapped$1n as Clipboard,
  IconWrapped$1m as ClockAlertOutline,
  IconWrapped$1l as Close,
  IconWrapped$1k as Connection,
  IconWrapped$1j as ContentCopy,
  IconWrapped$1i as CreditCard,
  IconWrapped$1h as CustomMetric,
  IconWrapped$1g as DarkMode,
  IconWrapped$1f as Delete,
  IconWrapped$1e as Download,
  IconWrapped$1d as Edit,
  IconWrapped$1c as EqualCircle,
  IconWrapped$1b as ErrorCircle,
  IconWrapped$1a as EventBusy,
  IconWrapped$19 as ExpandLess,
  IconWrapped$18 as ExpandMore,
  IconWrapped$17 as Extension,
  IconWrapped$16 as FileDocumentEditCircle,
  IconWrapped$15 as FilterAlt,
  IconWrapped$13 as Flag,
  IconWrapped$14 as FlagCircle,
  IconWrapped$12 as Forward,
  IconWrapped$11 as Grid3X3,
  IconWrapped$10 as Group,
  IconWrapped$$ as HalfCircle,
  IconWrapped$_ as HamburgerMenu,
  IconWrapped$Z as Help,
  IconWrapped$Y as HorizontalRule,
  Icon,
  IconWrapped$X as Inbox,
  IconWrapped$W as Info,
  IconWrapped$V as KeyboardDoubleArrowLeft,
  IconWrapped$U as KeyboardDoubleArrowRight,
  IconWrapped$T as LightMode,
  IconWrapped$S as Link,
  IconWrapped$R as Lock,
  IconWrapped$Q as MinusCircle,
  IconWrapped$P as MoreHoriz,
  IconWrapped$O as MoreVert,
  IconWrapped$N as Notifications,
  IconWrapped$M as OpenInNew,
  IconWrapped$L as Pause,
  IconWrapped$H as Person,
  IconWrapped$K as PersonAdd,
  IconWrapped$J as PersonOff,
  IconWrapped$I as PersonRemoveAlt,
  IconWrapped$G as PieChart,
  IconWrapped$F as PlayArrow,
  IconWrapped$E as PlayCircle,
  IconWrapped$D as PlusCircleFill,
  IconWrapped$C as PlusCircleOutline,
  IconWrapped$B as Power,
  IconWrapped$A as Preview,
  IconWrapped$z as ProgressCheck,
  IconWrapped$y as PulseActive,
  IconWrapped$x as QuickStart,
  IconWrapped$w as RadioButtonChecked,
  IconWrapped$v as ReleasePath,
  IconWrapped$u as Remove,
  IconWrapped$t as Robot,
  IconWrapped$s as Schedule,
  IconWrapped$r as Search,
  IconWrapped$q as ShieldAccount,
  IconWrapped$p as ShieldKey,
  IconWrapped$n as Star,
  IconWrapped$o as StarOutline,
  IconWrapped$m as Stars,
  IconWrapped$l as StatusActive,
  StatusIcon,
  IconWrapped$k as StatusInactive,
  IconWrapped$j as StatusLaunched,
  IconWrapped$i as StatusNew,
  IconWrapped$g as StepInProgress,
  IconWrapped$h as StepInProgressOutline,
  IconWrapped$f as Stop,
  IconWrapped$e as SwapHoriz,
  IconWrapped$d as SwapVertical,
  IconWrapped$c as TemplatesCircle,
  IconWrapped$b as ThumbUp,
  IconWrapped$a as Toggles,
  IconWrapped$9 as TrendingUpCircle,
  IconWrapped$8 as Undo,
  IconWrapped$7 as UnfoldLess,
  IconWrapped$6 as UnfoldMore,
  IconWrapped$5 as Verified,
  IconWrapped$4 as ViewList,
  IconWrapped$2 as Visibility,
  IconWrapped$3 as VisibilityOff,
  IconWrapped$1 as Warning,
  IconWrapped as WorkflowBuilder
};
//# sourceMappingURL=index.es.js.map
