import './style.css';
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useValueEffect, useResizeObserver } from "@react-aria/utils";
import { cx } from "classix";
import { createContext, useContext, forwardRef, useState, useEffect, useRef, useCallback } from "react";
import { useListState } from "@react-stately/list";
import { Chip } from "@launchpad-ui/chip";
import { useLocation, NavLink } from "react-router-dom";
import { Tooltip } from "@launchpad-ui/tooltip";
import { Dropdown, DropdownButton } from "@launchpad-ui/dropdown";
import { Menu, MenuItem } from "@launchpad-ui/menu";
const NavigationContext = createContext(void 0);
const useNavigationContext = () => {
  const context = useContext(NavigationContext);
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
  return /* @__PURE__ */ jsx(
    "nav",
    {
      ...rest,
      "aria-label": ariaLabel ?? `${kind} navigation`,
      className: cx(styles.Nav, styles[`Nav--${kind}`], className),
      "data-test-id": testId,
      ref: innerRef,
      children
    }
  );
};
const Nav = forwardRef((props, ref) => /* @__PURE__ */ jsx(NavBase, { ...props, innerRef: ref }));
Nav.displayName = "Nav";
const titlecase = (str) => {
  return str.toString().toLowerCase().replace(/\b([a-z])/g, (ch) => ch.toUpperCase());
};
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
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
  const { pathname } = useLocation();
  const selected = pathname === to ? "true" : "false";
  return /* @__PURE__ */ jsx(
    NavLink,
    {
      ...other,
      end,
      to,
      className: ({ isActive }) => cx(styles.NavItem, isActive && styles["is-active"]),
      "data-text": name,
      onClick,
      role,
      "data-nav-target": "true",
      "data-test-id": testId,
      "aria-selected": role === "tab" ? selected : void 0,
      children: status ? /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-end" }, children: [
        /* @__PURE__ */ jsx("span", { className: styles["NavItem-name"], children: name }),
        /* @__PURE__ */ jsx(Chip, { className: styles["NavItem-chip"], "data-test-id": "nav-item-chip", kind: status, children: titlecase(status) })
      ] }) : /* @__PURE__ */ jsx("span", { className: styles["NavItem-name"], children: name })
    }
  );
};
const defaultContent = /* @__PURE__ */ jsxs(Fragment, { children: [
  "Upgrade your plan to use this feature.",
  /* @__PURE__ */ jsx("br", {}),
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
  const centeredContent = /* @__PURE__ */ jsx("div", { className: styles["NavItem-tooltip"], children: tooltipContent });
  return /* @__PURE__ */ jsx(
    Tooltip,
    {
      content: centeredContent,
      placement: tooltipPlacement,
      offset: tooltipOffset,
      allowBoundaryElementOverflow: true,
      targetClassName: styles["NavPopover-target"],
      "data-test-id": testId,
      children: /* @__PURE__ */ jsx(
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
  const state = useListState(props);
  return /* @__PURE__ */ jsxs(Dropdown, { children: [
    /* @__PURE__ */ jsx(DropdownButton, { "data-test-id": "navigation-menu-button", children: props.title }),
    /* @__PURE__ */ jsx(Menu, { children: [...state.collection].map((item) => /* @__PURE__ */ jsx(
      MenuItem,
      {
        item: item.key,
        component: NavLink,
        to: item.props.to,
        onClick: item.props.onClick,
        children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "var(--lp-spacing-300)", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx("div", { children: item.props.name }),
          item.props.status ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Chip, { kind: item.props.status, children: titlecase(item.props.status) }) }) : void 0
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
  const state = useListState(rest);
  const { shouldCollapse, refs } = useNavigationContext();
  return /* @__PURE__ */ jsx("div", { className: styles["NavigationList-wrapper"], ref: refs.wrapperRef, children: shouldCollapse ? /* @__PURE__ */ jsx(NavigationMenuDropdown, { title, "aria-label": title, ...rest }) : /* @__PURE__ */ jsx(Nav, { kind, ref: refs.itemListRef, children: [...state.collection].map(
    (item) => item.props.tooltip ? /* @__PURE__ */ jsx(
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
    ) : /* @__PURE__ */ jsx(
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
  const wrapperRef = useRef(null);
  const itemListRef = useRef(null);
  const [shouldCollapse, setCollapse] = useValueEffect(false);
  const isWideViewport = useMediaQuery("(min-width: 740px)");
  const checkShouldCollapse = useCallback(() => {
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
  useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse, isWideViewport]);
  useResizeObserver({ ref: wrapperRef, onResize: checkShouldCollapse });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cx(
        styles.Navigation,
        shouldCollapse && styles["Navigation--collapsed"],
        className
      ),
      "data-test-id": testId,
      children: /* @__PURE__ */ jsx(
        NavigationContext.Provider,
        {
          value: {
            shouldCollapse,
            refs: {
              wrapperRef,
              itemListRef
            }
          },
          children: /* @__PURE__ */ jsx(NavigationList, { ...props })
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
export {
  Navigation,
  NavigationItem
};
//# sourceMappingURL=index.es.js.map
