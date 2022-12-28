import './style.css';
import { Dropdown } from "@launchpad-ui/dropdown";
import { ExpandMore, Check, Close } from "@launchpad-ui/icons";
import { cx } from "classix";
import { forwardRef, Children, useId } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Button, IconButton } from "@launchpad-ui/button";
import { Menu, MenuSearch, MenuDivider, MenuItem } from "@launchpad-ui/menu";
import { Tooltip } from "@launchpad-ui/tooltip";
import { VisuallyHidden } from "@react-aria/visually-hidden";
const filter = "_filter_1rh9a_1";
const buttonContainer = "_buttonContainer_1rh9a_5";
const button = "_button_1rh9a_5";
const appliedButton = "_appliedButton_1rh9a_24";
const name = "_name_1rh9a_55";
const appliedName = "_appliedName_1rh9a_60";
const description = "_description_1rh9a_64";
const appliedDescription = "_appliedDescription_1rh9a_70";
const clear = "_clear_1rh9a_78";
const isClearable = "_isClearable_1rh9a_83";
const clearTooltip = "_clearTooltip_1rh9a_115";
const filterClearButton = "_filterClearButton_1rh9a_121";
const styles = {
  filter,
  buttonContainer,
  button,
  appliedButton,
  "focus-visible": "_focus-visible_1rh9a_1",
  name,
  appliedName,
  description,
  appliedDescription,
  clear,
  isClearable,
  clearTooltip,
  filterClearButton
};
const AppliedFilterButton = forwardRef((props, ref) => {
  const {
    name: name2,
    className,
    children,
    onClickFilterButton,
    "data-test-id": testId
  } = props;
  const hasDescription = Children.count(children) !== 0;
  return /* @__PURE__ */ jsx("div", {
    "data-test-id": testId,
    children: /* @__PURE__ */ jsxs("button", {
      "aria-haspopup": true,
      className: cx(styles.appliedButton, className),
      ref,
      onClick: onClickFilterButton,
      children: [name2 && /* @__PURE__ */ jsxs("span", {
        className: styles.appliedName,
        "data-test-id": `${testId}-name`,
        children: [name2, hasDescription && ":"]
      }), hasDescription && /* @__PURE__ */ jsx("span", {
        className: styles.appliedDescription,
        "data-test-id": `${testId}-description`,
        children
      }), /* @__PURE__ */ jsx(ExpandMore, {
        size: "small",
        "data-test-id": `${testId}-expand`
      })]
    })
  });
});
AppliedFilterButton.displayName = "AppliedFilterButton";
const FilterMenu = ({
  options,
  onClearFilter,
  enableSearch,
  searchValue,
  searchPlaceholder,
  searchAriaLabel,
  onSelect,
  onSearchChange,
  isLoading = false,
  disabledOptionTooltip,
  enableVirtualization,
  size,
  "data-test-id": testId = "filter-menu"
}) => {
  const filterOptions = isLoading ? [{
    name: "loading...",
    value: "loading...",
    isDisabled: true
  }] : options;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [onClearFilter && /* @__PURE__ */ jsx(Button, {
      tabIndex: 0,
      className: styles.filterClearButton,
      onClick: onClearFilter,
      kind: "link",
      "data-test-id": "clear-filter-button",
      children: "CLEAR FILTER"
    }), /* @__PURE__ */ jsxs(Menu, {
      enableVirtualization,
      size,
      "data-test-id": testId,
      onSelect,
      children: [enableSearch && /* @__PURE__ */ jsx(MenuSearch, {
        value: searchValue,
        placeholder: searchPlaceholder,
        onChange: onSearchChange,
        ariaLabel: searchAriaLabel
      }), filterOptions.map((option, index) => {
        if (option.isDivider) {
          return /* @__PURE__ */ jsx(MenuDivider, {}, `divider-${index}`);
        }
        return /* @__PURE__ */ jsx(MenuItem, {
          item: option,
          disabled: option.isDisabled,
          icon: option.isChecked ? Check : null,
          role: "menuitemradio",
          "aria-checked": option.isChecked ? "true" : void 0,
          nested: option.nested,
          groupHeader: option.groupHeader,
          tooltip: option.isDisabled && disabledOptionTooltip ? disabledOptionTooltip : void 0,
          tooltipPlacement: "right",
          children: option.name
        }, option.value);
      })]
    })]
  });
};
const SEARCH_INPUT_THRESHOLD$1 = 4;
const AppliedFilter = ({
  searchValue,
  onSearchChange,
  searchPlaceholder,
  name: name2,
  description: description2,
  options,
  className,
  isEmpty,
  isLoading,
  onClickFilterButton,
  onClearFilter,
  searchAriaLabel,
  "data-test-id": testId = "applied-filter",
  ...props
}) => {
  const enableSearch = onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD$1 || !isEmpty);
  return /* @__PURE__ */ jsxs(Dropdown, {
    targetClassName: className,
    placement: "bottom-start",
    enableArrow: false,
    ...props,
    children: [/* @__PURE__ */ jsx(AppliedFilterButton, {
      "data-test-id": testId,
      name: name2,
      onClickFilterButton,
      children: description2
    }), /* @__PURE__ */ jsx(FilterMenu, {
      options,
      searchValue,
      searchPlaceholder,
      enableSearch,
      searchAriaLabel,
      onSearchChange,
      onClearFilter,
      isLoading
    })]
  });
};
const FilterButton = forwardRef((props, ref) => {
  const {
    children,
    name: name2,
    hideName,
    isClearable: isClearable2,
    clearTooltip: clearTooltip2,
    onClear,
    isSelected,
    onClickFilterButton,
    className,
    "data-test-id": testId = "filter-button",
    ...rest
  } = props;
  const nameId = useId();
  const descriptionId = useId();
  const hasDescription = Children.count(children) !== 0;
  const nameElement = /* @__PURE__ */ jsxs("span", {
    className: styles.name,
    children: [name2, hasDescription && ":"]
  });
  return /* @__PURE__ */ jsxs("div", {
    className: styles.buttonContainer,
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsxs("button", {
      ...rest,
      "aria-labelledby": `${nameId} ${hasDescription ? descriptionId : ""}`,
      "aria-haspopup": true,
      className: cx(styles.button, className, (isClearable2 || isSelected) && styles.isClearable),
      ref,
      onClick: onClickFilterButton,
      children: [hideName ? /* @__PURE__ */ jsx(VisuallyHidden, {
        id: nameId,
        children: nameElement
      }) : /* @__PURE__ */ jsx("span", {
        id: nameId,
        children: nameElement
      }), hasDescription && /* @__PURE__ */ jsx("span", {
        id: descriptionId,
        className: styles.description,
        children
      }), !isClearable2 && /* @__PURE__ */ jsx(ExpandMore, {
        size: "small"
      })]
    }), isClearable2 && /* @__PURE__ */ jsx(Tooltip, {
      targetClassName: styles.clearTooltip,
      content: clearTooltip2,
      children: /* @__PURE__ */ jsx(IconButton, {
        "aria-label": "Clear filter",
        className: styles.clear,
        "data-test-id": "clear-filter-button",
        icon: /* @__PURE__ */ jsx(Close, {
          size: "tiny"
        }),
        onClick: onClear
      })
    })]
  });
});
FilterButton.defaultProps = {
  clearTooltip: "Clear filter"
};
FilterButton.displayName = "FilterButton";
const SEARCH_INPUT_THRESHOLD = 4;
const Filter = ({
  searchValue,
  onSearchChange,
  searchPlaceholder,
  searchAriaLabel,
  name: name2,
  hideName,
  description: description2,
  options,
  isClearable: isClearable2,
  onClear,
  isSelected,
  className,
  isEmpty,
  isLoading,
  onClickFilterButton,
  disabledOptionTooltip,
  "data-test-id": testId = "filter",
  size,
  enableVirtualization,
  ...props
}) => {
  const enableSearch = onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD || !isEmpty);
  const dropdownClasses = cx(styles.filter, className);
  const handleClear = (event) => {
    event.preventDefault();
    onClear == null ? void 0 : onClear();
  };
  return /* @__PURE__ */ jsxs(Dropdown, {
    targetTestId: testId,
    targetClassName: dropdownClasses,
    ...props,
    children: [/* @__PURE__ */ jsx(FilterButton, {
      isClearable: isClearable2,
      onClear: handleClear,
      name: name2,
      hideName,
      isSelected,
      onClickFilterButton,
      children: description2
    }), /* @__PURE__ */ jsx(FilterMenu, {
      options,
      searchValue,
      searchPlaceholder,
      searchAriaLabel,
      enableSearch,
      onSearchChange,
      isLoading,
      disabledOptionTooltip,
      size,
      enableVirtualization
    })]
  });
};
export {
  AppliedFilter,
  Filter,
  FilterButton
};
//# sourceMappingURL=index.es.js.map
