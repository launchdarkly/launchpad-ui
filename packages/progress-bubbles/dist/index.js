require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const popover = require("@launchpad-ui/popover");
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const ProgressBubbles$1 = "_ProgressBubbles_1r557_9";
const ProgressBubblesIconContainer = "_ProgressBubblesIconContainer_1r557_76";
const ProgressBubblesPopoverTarget = "_ProgressBubblesPopoverTarget_1r557_147";
const styles = {
  ProgressBubbles: ProgressBubbles$1,
  "ProgressBubbles-bubble": "_ProgressBubbles-bubble_1r557_15",
  "ProgressBubbles-bubble--first": "_ProgressBubbles-bubble--first_1r557_32",
  "ProgressBubbles-bubble--last": "_ProgressBubbles-bubble--last_1r557_36",
  "ProgressBubbles-line": "_ProgressBubbles-line_1r557_40",
  "ProgressBubbles--filled": "_ProgressBubbles--filled_1r557_46",
  "ProgressBubbles--vertical": "_ProgressBubbles--vertical_1r557_50",
  "ProgressBubblesUsingItems-line": "_ProgressBubblesUsingItems-line_1r557_65",
  "ProgressBubblesUsingItems-line--completed": "_ProgressBubblesUsingItems-line--completed_1r557_72",
  ProgressBubblesIconContainer,
  "ProgressBubbles-icon": "_ProgressBubbles-icon_1r557_86",
  "ProgressBubbles-icon--current": "_ProgressBubbles-icon--current_1r557_100",
  "ProgressBubbles-icon--pending": "_ProgressBubbles-icon--pending_1r557_111",
  "ProgressBubbles-icon--warning": "_ProgressBubbles-icon--warning_1r557_123",
  "ProgressBubbles-icon--multiple": "_ProgressBubbles-icon--multiple_1r557_138",
  "ProgressBubbles-text": "_ProgressBubbles-text_1r557_142",
  ProgressBubblesPopoverTarget,
  "ProgressBubbles-label": "_ProgressBubbles-label_1r557_151"
};
function useDimensions({ defaults } = {}) {
  const [node, setNode] = react.useState(null);
  const [dimensions, setDimensions] = react.useState({
    width: 0,
    height: 0,
    ...defaults
  });
  const ref = react.useCallback((nextNode) => setNode(nextNode), []);
  function measureDimensions(element) {
    const rect = element.getBoundingClientRect();
    setDimensions({
      width: rect.width,
      height: rect.height
    });
  }
  react.useLayoutEffect(() => {
    if (!node) {
      return;
    }
    const observer = new ResizeObserver(() => {
      measureDimensions(node);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);
  return {
    ref,
    dimensions
  };
}
const ICON_WIDTH = 2.8;
const ProgressBubbles = ({
  className,
  vertical,
  numBubbles,
  currentBubble,
  bubbleLabels,
  showCurrentLabelOnly = true,
  items,
  popoverInteraction = "hover-or-focus",
  "data-test-id": testId = "progress-bubbles"
}) => {
  const {
    ref,
    dimensions
  } = useDimensions();
  let children = [];
  if (items && items.length) {
    children = items.map((item, idx) => {
      var _a;
      const hasMultipleIcons = item.icons && item.icons.props.children && item.icons.props.children.length;
      let numIcons = 0;
      if (item.icons) {
        numIcons = hasMultipleIcons ? item.icons.props.children.length : 1;
      }
      const iconWidth = hasMultipleIcons ? numIcons * ICON_WIDTH : ICON_WIDTH;
      const labelWidth = dimensions.width / items.length;
      const hideLabel = showCurrentLabelOnly && idx !== currentBubble;
      const bubble = /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: classix.cx(styles["ProgressBubbles-icon"], hasMultipleIcons && styles["ProgressBubbles-icon--multiple"], idx === currentBubble && styles["ProgressBubbles-icon--current"], idx > currentBubble && styles["ProgressBubbles-icon--pending"], item.isWarning && styles["ProgressBubbles-icon--warning"]),
        style: {
          width: `${iconWidth}rem`
        },
        children: [item.icons, /* @__PURE__ */ jsxRuntime.jsx("label", {
          id: (_a = item.popover) == null ? void 0 : _a.props.stageId,
          "aria-hidden": hideLabel,
          className: styles["ProgressBubbles-label"],
          style: {
            width: `${labelWidth}px`
          },
          children: showCurrentLabelOnly ? idx === currentBubble && item.label : item.label
        })]
      });
      return /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, {
        children: [!!idx && /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: classix.cx(styles["ProgressBubblesUsingItems-line"], idx <= currentBubble && styles["ProgressBubblesUsingItems-line--completed"])
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: styles["ProgressBubblesIconContainer"],
          children: item.popover ? /* @__PURE__ */ jsxRuntime.jsxs(popover.Popover, {
            targetClassName: styles["ProgressBubblesPopoverTarget"],
            restrictWidth: false,
            interactionKind: popoverInteraction,
            offset: item.popoverOffset,
            target: item.icons,
            children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
              role: "button",
              tabIndex: 0,
              children: bubble
            }), item.popover]
          }) : bubble
        })]
      }, idx);
    });
  } else if (numBubbles) {
    for (let i = 0; i < numBubbles; i++) {
      children.push(/* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, {
        children: [!!i && /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: classix.cx(styles["ProgressBubbles-line"], i <= currentBubble && styles["ProgressBubbles--filled"])
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: classix.cx(styles["ProgressBubbles-bubble"], i <= currentBubble && styles["ProgressBubbles--filled"], i === 0 && styles["ProgressBubbles-bubble--first"], i === numBubbles - 1 && styles["ProgressBubbles-bubble--last"]),
          children: /* @__PURE__ */ jsxRuntime.jsx("span", {
            className: styles["ProgressBubbles-text"],
            children: !!bubbleLabels && (showCurrentLabelOnly ? i === currentBubble && bubbleLabels[currentBubble] : bubbleLabels[i])
          })
        })]
      }, i));
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: classix.cx(styles.ProgressBubbles, className, vertical && styles["ProgressBubbles--vertical"]),
    ref,
    "data-test-id": testId,
    children
  });
};
exports.ProgressBubbles = ProgressBubbles;
//# sourceMappingURL=index.js.map
