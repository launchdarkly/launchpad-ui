import './style.css';
import { jsx, jsxs } from "react/jsx-runtime";
import { cx } from "classix";
import { IconButton } from "@launchpad-ui/button";
import { KeyboardDoubleArrowLeft, ChevronLeft, ChevronRight, KeyboardDoubleArrowRight } from "@launchpad-ui/icons";
import { Progress } from "@launchpad-ui/progress";
import { VisuallyHidden } from "@react-aria/visually-hidden";
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
  first: KeyboardDoubleArrowLeft,
  prev: ChevronLeft,
  next: ChevronRight,
  last: KeyboardDoubleArrowRight
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
  const classes = cx(
    styles.PaginationButton,
    disabled && styles["PaginationButton--disabled"],
    className
  );
  const Icon = ICON_MAP[kind];
  const label = `${LABEL_MAP[kind]} ${resourceName} page`;
  return /* @__PURE__ */ jsx(
    IconButton,
    {
      disabled,
      className: classes,
      "data-test-id": testId,
      onClick: () => onClick(kind),
      icon: /* @__PURE__ */ jsx(Icon, { size: "small" }),
      "aria-label": label
    }
  );
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
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Progress, {}) });
  }
  if (!totalCount) {
    return /* @__PURE__ */ jsx("strong", { children: "No results" });
  }
  const screenReaderLabel = `Viewing records ${from} through ${to} of ${totalCount} total.`;
  return /* @__PURE__ */ jsxs("div", { className: styles.PaginationText, "data-test-id": testId, children: [
    /* @__PURE__ */ jsx(VisuallyHidden, { children: screenReaderLabel }),
    /* @__PURE__ */ jsxs("span", { "aria-hidden": true, children: [
      /* @__PURE__ */ jsxs("strong", { children: [
        from,
        "-",
        to
      ] }),
      " ",
      "of ",
      /* @__PURE__ */ jsx("strong", { children: totalCount })
    ] })
  ] });
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
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      ...rest,
      className: cx(styles.Pagination, className),
      "aria-label": ariaLabel ?? `Pagination for ${resourceName} list.`,
      "data-test-id": testId,
      children: [
        /* @__PURE__ */ jsx(
          PaginationButton,
          {
            resourceName,
            kind: "first",
            disabled: !!isFirstDisabled,
            onClick: onChange
          }
        ),
        /* @__PURE__ */ jsx(
          PaginationButton,
          {
            resourceName,
            kind: "prev",
            disabled: !!isPrevDisabled,
            onClick: onChange
          }
        ),
        /* @__PURE__ */ jsx(
          PaginationText,
          {
            currentOffset,
            pageSize,
            isReady,
            totalCount
          }
        ),
        /* @__PURE__ */ jsx(
          PaginationButton,
          {
            resourceName,
            kind: "next",
            disabled: !!isNextDisabled,
            onClick: onChange
          }
        ),
        /* @__PURE__ */ jsx(
          PaginationButton,
          {
            resourceName,
            kind: "last",
            disabled: !!isLastDisabled,
            onClick: onChange
          }
        )
      ]
    }
  );
};
export {
  Pagination
};
//# sourceMappingURL=index.es.js.map
