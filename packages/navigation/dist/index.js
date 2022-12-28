require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const utils = require("@react-aria/utils");
const classix = require("classix");
const react = require("react");
const list = require("@react-stately/list");
const chip = require("@launchpad-ui/chip");
const reactRouterDom = require("react-router-dom");
const tooltip = require("@launchpad-ui/tooltip");
const dropdown = require("@launchpad-ui/dropdown");
const menu = require("@launchpad-ui/menu");
const NavigationContext = react.createContext(void 0);
const useNavigationContext = () => {
  const context = react.useContext(NavigationContext);
  if (context === void 0) {
    throw new Error("useNavigationContext must be used within a NavigationContext provider");
  }
  return context;
};
const Navigation$1 = "_Navigation_db3ij_13";
const Nav$1 = "_Nav_db3ij_13";
const NavItem$1 = "_NavItem_db3ij_45";
const styles = {
  Navigation: Navigation$1,
  "Nav--primary": "_Nav--primary_db3ij_13",
  "Navigation--collapsed": "_Navigation--collapsed_db3ij_20",
  "NavigationList-wrapper": "_NavigationList-wrapper_db3ij_26",
  Nav: Nav$1,
  "Nav--secondary": "_Nav--secondary_db3ij_37",
  "NavPopover-target": "_NavPopover-target_db3ij_41",
  NavItem: NavItem$1,
  "is-active": "_is-active_db3ij_64",
  "NavItem-name": "_NavItem-name_db3ij_83",
  "focus-visible": "_focus-visible_db3ij_1",
  "Nav-items": "_Nav-items_db3ij_135",
  "NavItem-chip": "_NavItem-chip_db3ij_163",
  "NavItem-tooltip": "_NavItem-tooltip_db3ij_171"
};
const NavBase = ({
  kind = "primary",
  className,
  children,
  innerRef,
  "aria-label": ariaLabel,
  "data-test-id": testId = "nav",
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      ...rest,
      "aria-label": ariaLabel ?? `${kind} navigation`,
      className: classix.cx(styles.Nav, styles[`Nav--${kind}`], className),
      "data-test-id": testId,
      ref: innerRef,
      children
    }
  );
};
const Nav = react.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(NavBase, { ...props, innerRef: ref }));
Nav.displayName = "Nav";
const titlecase = (str) => {
  return str.toString().toLowerCase().replace(/\b([a-z])/g, (ch) => ch.toUpperCase());
};
const useMediaQuery = (query) => {
  const [matches, setMatches] = react.useState(false);
  react.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handleMediaChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", handleMediaChange);
    return () => media.addEventListener("change", handleMediaChange);
  }, [matches, query]);
  return matches;
};
const NavItem = ({
  to,
  name,
  onClick,
  status,
  role,
  end,
  "data-test-id": testId = "nav-item",
  ...other
}) => {
  const { pathname } = reactRouterDom.useLocation();
  const selected = pathname === to ? "true" : "false";
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactRouterDom.NavLink,
    {
      ...other,
      end,
      to,
      className: ({ isActive }) => classix.cx(styles.NavItem, isActive && styles["is-active"]),
      "data-text": name,
      onClick,
      role,
      "data-nav-target": "true",
      "data-test-id": testId,
      "aria-selected": role === "tab" ? selected : void 0,
      children: status ? /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles["NavItem-name"], children: name }),
        /* @__PURE__ */ jsxRuntime.jsx(chip.Chip, { className: styles["NavItem-chip"], "data-test-id": "nav-item-chip", kind: status, children: titlecase(status) })
      ] }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles["NavItem-name"], children: name })
    }
  );
};
const defaultContent = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  "Upgrade your plan to use this feature.",
  /* @__PURE__ */ jsxRuntime.jsx("br", {}),
  "Click to learn more."
] });
const NavItemWithTooltip = ({
  to,
  name,
  tooltipContent = defaultContent,
  onClick,
  tooltipPlacement = "top",
  tooltipOffset,
  role,
  end,
  id,
  "aria-controls": ariaControls,
  "data-test-id": testId = "nav-item-with-tooltip"
}) => {
  const centeredContent = /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["NavItem-tooltip"], children: tooltipContent });
  return /* @__PURE__ */ jsxRuntime.jsx(
    tooltip.Tooltip,
    {
      content: centeredContent,
      placement: tooltipPlacement,
      offset: tooltipOffset,
      allowBoundaryElementOverflow: true,
      targetClassName: styles["NavPopover-target"],
      "data-test-id": testId,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        NavItem,
        {
          end,
          to,
          name,
          onClick,
          role,
          id,
          "aria-controls": ariaControls
        }
      )
    }
  );
};
const NavigationMenuDropdown = (props) => {
  const state = list.useListState(props);
  return /* @__PURE__ */ jsxRuntime.jsxs(dropdown.Dropdown, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(dropdown.DropdownButton, { "data-test-id": "navigation-menu-button", children: props.title }),
    /* @__PURE__ */ jsxRuntime.jsx(menu.Menu, { children: [...state.collection].map((item) => /* @__PURE__ */ jsxRuntime.jsx(
      menu.MenuItem,
      {
        item: item.key,
        component: reactRouterDom.NavLink,
        to: item.props.to,
        onClick: item.props.onClick,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", gap: "var(--lp-spacing-300)", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { children: item.props.name }),
          item.props.status ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(chip.Chip, { kind: item.props.status, children: titlecase(item.props.status) }) }) : void 0
        ] })
      },
      item.key
    )) })
  ] });
};
const NavigationList = ({
  kind = "primary",
  title,
  ...rest
}) => {
  const state = list.useListState(rest);
  const { shouldCollapse, refs } = useNavigationContext();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["NavigationList-wrapper"], ref: refs.wrapperRef, children: shouldCollapse ? /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuDropdown, { title, "aria-label": title, ...rest }) : /* @__PURE__ */ jsxRuntime.jsx(Nav, { kind, ref: refs.itemListRef, children: [...state.collection].map(
    (item) => item.props.tooltip ? /* @__PURE__ */ jsxRuntime.jsx(
      NavItemWithTooltip,
      {
        to: item.props.to,
        id: item.props.id,
        name: item.props.name,
        role: item.props.role,
        "aria-controls": item.props["aria-controls"],
        tooltipContent: typeof item.props.tooltip === "boolean" ? void 0 : item.props.tooltip,
        tooltipOffset: item.props.tooltipOffset,
        tooltipPlacement: item.props.tooltipPlacement,
        onClick: item.props.onClick,
        end: item.props.end
      },
      item.key
    ) : /* @__PURE__ */ jsxRuntime.jsx(
      NavItem,
      {
        to: item.props.to,
        id: item.props.id,
        name: item.props.name,
        status: item.props.status,
        role: item.props.role,
        "aria-controls": item.props["aria-controls"],
        onClick: item.props.onClick,
        end: item.props.end
      },
      item.key
    )
  ) }) });
};
const Navigation = (props) => {
  const { children, className, "data-test-id": testId = "navigation" } = props;
  const wrapperRef = react.useRef(null);
  const itemListRef = react.useRef(null);
  const [shouldCollapse, setCollapse] = utils.useValueEffect(false);
  const isWideViewport = useMediaQuery("(min-width: 740px)");
  const checkShouldCollapse = react.useCallback(() => {
    function computeShouldCollapse() {
      if (!wrapperRef.current || !itemListRef.current) {
        return false;
      }
      const tabs = itemListRef.current.querySelectorAll("[data-nav-target='true']");
      const lastTab = tabs[tabs.length - 1];
      const containerEdge = wrapperRef.current.getBoundingClientRect().right;
      const lastTabEdge = lastTab == null ? void 0 : lastTab.getBoundingClientRect().right;
      return containerEdge < lastTabEdge;
    }
    setCollapse(function* () {
      if (isWideViewport) {
        yield false;
        return;
      }
      yield false;
      yield computeShouldCollapse();
    });
  }, [wrapperRef, itemListRef, isWideViewport, setCollapse]);
  react.useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse, isWideViewport]);
  utils.useResizeObserver({ ref: wrapperRef, onResize: checkShouldCollapse });
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: classix.cx(
        styles.Navigation,
        shouldCollapse && styles["Navigation--collapsed"],
        className
      ),
      "data-test-id": testId,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        NavigationContext.Provider,
        {
          value: {
            shouldCollapse,
            refs: {
              wrapperRef,
              itemListRef
            }
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(NavigationList, { ...props })
        }
      )
    }
  );
};
const NavigationItem = (_props) => {
  return null;
};
NavigationItem.getCollectionNode = function* (props) {
  yield {
    type: "item",
    props,
    "aria-label": props.name,
    hasChildNodes: false
  };
};
exports.Navigation = Navigation;
exports.NavigationItem = NavigationItem;
//# sourceMappingURL=index.js.map
