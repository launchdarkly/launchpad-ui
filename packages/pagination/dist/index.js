require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const classix = require("classix");
const button = require("@launchpad-ui/button");
const icons = require("@launchpad-ui/icons");
const jsxRuntime = require("react/jsx-runtime");
const progress = require("@launchpad-ui/progress");
const visuallyHidden = require("@react-aria/visually-hidden");
const Pagination$1 = "_Pagination_10ojz_3";
const PaginationText$1 = "_PaginationText_10ojz_8";
const PaginationButton$1 = "_PaginationButton_10ojz_12";
const styles = {
  Pagination: Pagination$1,
  PaginationText: PaginationText$1,
  PaginationButton: PaginationButton$1,
  "PaginationButton--disabled": "_PaginationButton--disabled_10ojz_43"
};
const ICON_MAP = {
  first: icons.KeyboardDoubleArrowLeft,
  prev: icons.ChevronLeft,
  next: icons.ChevronRight,
  last: icons.KeyboardDoubleArrowRight
};
const LABEL_MAP = {
  first: "first",
  prev: "previous",
  next: "next",
  last: "last"
};
const PaginationButton = ({
  resourceName,
  kind,
  disabled,
  onClick,
  className,
  "data-test-id": testId = "pagination-button"
}) => {
  const classes = classix.cx(styles.PaginationButton, disabled && styles["PaginationButton--disabled"], className);
  const Icon = ICON_MAP[kind];
  const label = `${LABEL_MAP[kind]} ${resourceName} page`;
  return /* @__PURE__ */ jsxRuntime.jsx(button.IconButton, {
    disabled,
    className: classes,
    "data-test-id": testId,
    onClick: () => onClick(kind),
    icon: /* @__PURE__ */ jsxRuntime.jsx(Icon, {
      size: "small"
    }),
    "aria-label": label
  });
};
const PaginationText = ({
  currentOffset,
  pageSize,
  isReady,
  totalCount,
  "data-test-id": testId = "pagination-text"
}) => {
  const offset = Math.max(0, currentOffset || 0);
  const from = offset + 1;
  const to = totalCount && Math.min(offset + pageSize, totalCount);
  if (!isReady) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: /* @__PURE__ */ jsxRuntime.jsx(progress.Progress, {})
    });
  }
  if (!totalCount) {
    return /* @__PURE__ */ jsxRuntime.jsx("strong", {
      children: "No results"
    });
  }
  const screenReaderLabel = `Viewing records ${from} through ${to} of ${totalCount} total.`;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: styles.PaginationText,
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsxRuntime.jsx(visuallyHidden.VisuallyHidden, {
      children: screenReaderLabel
    }), /* @__PURE__ */ jsxRuntime.jsxs("span", {
      "aria-hidden": true,
      children: [/* @__PURE__ */ jsxRuntime.jsxs("strong", {
        children: [from, "-", to]
      }), " ", "of ", /* @__PURE__ */ jsxRuntime.jsx("strong", {
        children: totalCount
      })]
    })]
  });
};
const Pagination = ({
  className,
  resourceName,
  isFirstDisabled,
  isPrevDisabled,
  isNextDisabled,
  isLastDisabled,
  onChange,
  currentOffset,
  pageSize,
  isReady,
  totalCount,
  "aria-label": ariaLabel,
  "data-test-id": testId = "pagination",
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("nav", {
    ...rest,
    className: classix.cx(styles.Pagination, className),
    "aria-label": ariaLabel != null ? ariaLabel : `Pagination for ${resourceName} list.`,
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsxRuntime.jsx(PaginationButton, {
      resourceName,
      kind: "first",
      disabled: !!isFirstDisabled,
      onClick: onChange
    }), /* @__PURE__ */ jsxRuntime.jsx(PaginationButton, {
      resourceName,
      kind: "prev",
      disabled: !!isPrevDisabled,
      onClick: onChange
    }), /* @__PURE__ */ jsxRuntime.jsx(PaginationText, {
      currentOffset,
      pageSize,
      isReady,
      totalCount
    }), /* @__PURE__ */ jsxRuntime.jsx(PaginationButton, {
      resourceName,
      kind: "next",
      disabled: !!isNextDisabled,
      onClick: onChange
    }), /* @__PURE__ */ jsxRuntime.jsx(PaginationButton, {
      resourceName,
      kind: "last",
      disabled: !!isLastDisabled,
      onClick: onChange
    })]
  });
};
exports.Pagination = Pagination;
//# sourceMappingURL=index.js.map
