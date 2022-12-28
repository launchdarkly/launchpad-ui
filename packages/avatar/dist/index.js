require('./style.css');
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@launchpad-ui/icons");
const classix = require("classix");
const react = require("react");
const Avatar$1 = "_Avatar_iqh64_1";
const styles = {
  Avatar: Avatar$1,
  "Avatar--initials": "_Avatar--initials_iqh64_16",
  "Avatar--color0": "_Avatar--color0_iqh64_21",
  "Avatar--color1": "_Avatar--color1_iqh64_25",
  "Avatar--color2": "_Avatar--color2_iqh64_29",
  "Avatar--color3": "_Avatar--color3_iqh64_33",
  "Avatar--color4": "_Avatar--color4_iqh64_37",
  "Avatar-initials-content": "_Avatar-initials-content_iqh64_41",
  "Avatar--tiny": "_Avatar--tiny_iqh64_46",
  "Avatar--small": "_Avatar--small_iqh64_52",
  "Avatar--medium": "_Avatar--medium_iqh64_58",
  "Avatar--large": "_Avatar--large_iqh64_64"
};
const useIsMounted = () => {
  const isMounted = react.useRef(false);
  react.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return react.useCallback(() => isMounted.current, []);
};
const DIMENSIONS = {
  tiny: "10",
  small: "16",
  medium: "24",
  large: "40"
};
const Avatar = ({
  alt = "",
  url,
  defaultIcon: DefaultIcon = icons.Person,
  className,
  initials,
  size = "medium",
  "data-test-id": testId = "avatar",
  ...rest
}) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = react.useState(!url);
  const [imageSource, setImageSource] = react.useState(null);
  const classes = classix.cx(styles.Avatar, styles[`Avatar--${size}`], className);
  const processImageSource = react.useCallback(async (res) => {
    var _a;
    if (res.status === 404 || ((_a = res.headers.get("Content-type")) == null ? void 0 : _a.includes("image/svg"))) {
      setImageSource(null);
    } else {
      const img = await res.blob();
      setImageSource(URL.createObjectURL(img));
    }
  }, []);
  react.useEffect(() => {
    if (url) {
      fetch(url).then((res) => {
        if (isMounted()) {
          processImageSource(res);
        }
      }).catch();
    } else {
      setImageSource("");
    }
  }, [url, processImageSource, isMounted]);
  if (useDefaultAvatar || !imageSource) {
    if (initials) {
      const color = (initials.charCodeAt(0) + initials.charCodeAt(1)) % 5;
      const initialsContainerClasses = classix.cx(
        classes,
        styles["Avatar--initials"],
        styles[`Avatar--color${color}`]
      );
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: initialsContainerClasses, "data-test-id": testId, ...rest, children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles["Avatar-initials-content"], children: initials }) });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(DefaultIcon, { className: classes, "data-test-id": testId, size, ...rest });
    }
  }
  const dimension = DIMENSIONS[size];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      ...rest,
      alt,
      className: classes,
      src: imageSource,
      width: dimension,
      height: dimension,
      "data-test-id": testId,
      onError: () => setUseDefaultAvatar(true)
    }
  );
};
exports.Avatar = Avatar;
//# sourceMappingURL=index.js.map
