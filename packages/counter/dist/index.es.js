import './style.css';
import { cx } from "classix";
import { jsx } from "react/jsx-runtime";
const Counter$1 = "_Counter_3smiw_1";
const styles = {
  Counter: Counter$1,
  "Counter--subtle": "_Counter--subtle_3smiw_14"
};
const Counter = ({
  value,
  className,
  subtle,
  "data-test-id": testId = "counter",
  ...rest
}) => {
  const classes = cx(styles.Counter, className, subtle && styles["Counter--subtle"]);
  return /* @__PURE__ */ jsx("span", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children: value
  });
};
export {
  Counter
};
//# sourceMappingURL=index.es.js.map
