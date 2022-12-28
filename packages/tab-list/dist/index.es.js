import './style.css';
import { jsxs, jsx } from "react/jsx-runtime";
import { useTabList, useTab, useTabPanel } from "@react-aria/tabs";
import { useTabListState } from "@react-stately/tabs";
import { cx } from "classix";
import { useRef } from "react";
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
  const ref = useRef(null);
  const state = useTabListState({
    selectedKey: activeTab,
    onSelectionChange: (val) => onChange == null ? void 0 : onChange(val),
    disabledKeys: disabledTabs,
    ...rest
  });
  const { tabListProps } = useTabList(props, state, ref);
  return /* @__PURE__ */ jsxs("div", { className, "data-test-id": testId, children: [
    /* @__PURE__ */ jsx("div", { ...tabListProps, ref, className: styles["TabList-list"], children: [...state.collection].map((item) => /* @__PURE__ */ jsx(TabItem, { item, state }, item.key)) }),
    /* @__PURE__ */ jsx(TabItemPanel, { state }, (_a = state.selectedItem) == null ? void 0 : _a.key)
  ] });
};
const TabItem = ({ className, item: { key, rendered }, state }) => {
  const ref = useRef(null);
  const { tabProps } = useTab({ key }, state, ref);
  const isSelected = state.selectedKey === key;
  const classes = cx(styles["TabList-item"], isSelected && styles["is-active"], className);
  return /* @__PURE__ */ jsx("div", { ...tabProps, ref, className: classes, children: rendered });
};
const TabItemPanel = ({ state, ...props }) => {
  var _a;
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return /* @__PURE__ */ jsx("div", { ...tabPanelProps, ref, className: styles["TabList-panel"], children: (_a = state.selectedItem) == null ? void 0 : _a.props.children });
};
export {
  TabList
};
//# sourceMappingURL=index.es.js.map
