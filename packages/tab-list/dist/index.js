require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const tabs$1 = require("@react-aria/tabs");
const tabs = require("@react-stately/tabs");
const classix = require("classix");
const react = require("react");
const styles = {
  "TabList-list": "_TabList-list_jvqfk_1",
  "TabList-item": "_TabList-item_jvqfk_8",
  "is-active": "_is-active_jvqfk_32",
  "TabList-panel": "_TabList-panel_jvqfk_54"
};
const TabList = (props) => {
  var _a;
  const {
    activeTab,
    className,
    disabledTabs,
    onChange,
    "data-test-id": testId = "tab-list",
    ...rest
  } = props;
  const ref = react.useRef(null);
  const state = tabs.useTabListState({
    selectedKey: activeTab,
    onSelectionChange: (val) => onChange == null ? void 0 : onChange(val),
    disabledKeys: disabledTabs,
    ...rest
  });
  const { tabListProps } = tabs$1.useTabList(props, state, ref);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, "data-test-id": testId, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ...tabListProps, ref, className: styles["TabList-list"], children: [...state.collection].map((item) => /* @__PURE__ */ jsxRuntime.jsx(TabItem, { item, state }, item.key)) }),
    /* @__PURE__ */ jsxRuntime.jsx(TabItemPanel, { state }, (_a = state.selectedItem) == null ? void 0 : _a.key)
  ] });
};
const TabItem = ({ className, item: { key, rendered }, state }) => {
  const ref = react.useRef(null);
  const { tabProps } = tabs$1.useTab({ key }, state, ref);
  const isSelected = state.selectedKey === key;
  const classes = classix.cx(styles["TabList-item"], isSelected && styles["is-active"], className);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...tabProps, ref, className: classes, children: rendered });
};
const TabItemPanel = ({ state, ...props }) => {
  var _a;
  const ref = react.useRef(null);
  const { tabPanelProps } = tabs$1.useTabPanel(props, state, ref);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...tabPanelProps, ref, className: styles["TabList-panel"], children: (_a = state.selectedItem) == null ? void 0 : _a.props.children });
};
exports.TabList = TabList;
//# sourceMappingURL=index.js.map
