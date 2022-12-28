require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const classix = require("classix");
const jsxRuntime = require("react/jsx-runtime");
const Table$1 = "_Table_olnh7_12";
const styles = {
  Table: Table$1,
  "Table--auto": "_Table--auto_olnh7_17",
  "Table--compact": "_Table--compact_olnh7_21",
  "Table-header": "_Table-header_olnh7_25",
  "Table-cell": "_Table-cell_olnh7_29",
  "Table-cell--left": "_Table-cell--left_olnh7_33",
  "Table-cell--center": "_Table-cell--center_olnh7_37",
  "Table-cell--right": "_Table-cell--right_olnh7_41",
  "Table-cell--justify": "_Table-cell--justify_olnh7_45",
  "Table-cell--char": "_Table-cell--char_olnh7_49",
  "Table-cell--head": "_Table-cell--head_olnh7_57",
  "Table--resourceTable": "_Table--resourceTable_olnh7_69",
  "TableHeader-title": "_TableHeader-title_olnh7_76",
  "TableHeader-description": "_TableHeader-description_olnh7_84",
  "TableHeader-counter": "_TableHeader-counter_olnh7_88",
  "TableHeaderToolbar-secondRow": "_TableHeaderToolbar-secondRow_olnh7_92",
  "Table-row": "_Table-row_olnh7_98",
  "Table-row--top": "_Table-row--top_olnh7_99",
  "Table-row--middle": "_Table-row--middle_olnh7_103",
  "Table-row--bottom": "_Table-row--bottom_olnh7_109",
  "Table-body": "_Table-body_olnh7_114",
  "Table-cell--width-zero": "_Table-cell--width-zero_olnh7_120",
  "Table-cell--width-one-of-twelve": "_Table-cell--width-one-of-twelve_olnh7_124",
  "Table-cell--width-two-of-twelve": "_Table-cell--width-two-of-twelve_olnh7_128",
  "Table-cell--width-three-of-twelve": "_Table-cell--width-three-of-twelve_olnh7_132",
  "Table-cell--width-four-of-twelve": "_Table-cell--width-four-of-twelve_olnh7_136",
  "Table-cell--width-five-of-twelve": "_Table-cell--width-five-of-twelve_olnh7_140",
  "Table-cell--width-six-of-twelve": "_Table-cell--width-six-of-twelve_olnh7_144"
};
const Table = ({
  auto,
  compact,
  className,
  children,
  isResourceTable,
  "data-test-id": testId = "table",
  ...rest
}) => {
  const classes = classix.cx(styles.Table, auto && styles["Table--auto"], compact && styles["Table--compact"], isResourceTable && styles["Table--resourceTable"], className);
  return /* @__PURE__ */ jsxRuntime.jsx("table", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const TableBody = ({
  className,
  children,
  "data-test-id": testId = "table-body",
  ...rest
}) => {
  const classes = classix.cx(styles["Table-body"], className);
  return /* @__PURE__ */ jsxRuntime.jsx("tbody", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const TableCell = ({
  align = "left",
  className,
  children,
  ...rest
}) => {
  const classes = classix.cx(styles["Table-cell"], styles[`Table-cell--${align}`], className);
  const restProps = rest;
  if ("hasScope" in restProps) {
    delete restProps.hasScope;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("td", {
    ...restProps,
    className: classes,
    children
  });
};
const TableHead = ({
  className,
  children,
  "data-test-id": testId = "table-head",
  ...rest
}) => {
  const classes = classix.cx(styles["Table-header"], className);
  return /* @__PURE__ */ jsxRuntime.jsx("thead", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const TableHeadCell = ({
  align = "left",
  className,
  children,
  defaultColWidth,
  scope = "col",
  ...rest
}) => {
  const widthClass = defaultColWidth ? styles[`Table-cell--width-${defaultColWidth}`] : "";
  const classes = classix.cx(styles["Table-cell"], styles["Table-cell--head"], styles[`Table-cell--${align}`], widthClass, className);
  return /* @__PURE__ */ jsxRuntime.jsx("th", {
    ...rest,
    className: classes,
    scope,
    children
  });
};
const TableRow = ({
  className,
  children,
  verticalAlign,
  "data-test-id": testId = "table-row",
  ...rest
}) => {
  const verticalAlignClass = verticalAlign ? styles[`Table-row--${verticalAlign}`] : "";
  const classes = classix.cx(styles["Table-row"], verticalAlignClass, className);
  return /* @__PURE__ */ jsxRuntime.jsx("tr", {
    ...rest,
    className: classes,
    "data-test-id": testId,
    children
  });
};
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableHeadCell = TableHeadCell;
exports.TableRow = TableRow;
//# sourceMappingURL=index.js.map
