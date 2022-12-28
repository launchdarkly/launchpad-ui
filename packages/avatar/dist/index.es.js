import './style.css';
import { Person } from "@launchpad-ui/icons";
import { cx } from "classix";
import { useRef, useEffect, useCallback, useState } from "react";
import { jsx } from "react/jsx-runtime";
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
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return useCallback(() => isMounted.current, []);
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
  defaultIcon: DefaultIcon = Person,
  className,
  initials,
  size = "medium",
  "data-test-id": testId = "avatar",
  ...rest
}) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(!url);
  const [imageSource, setImageSource] = useState(null);
  const classes = cx(styles.Avatar, styles[`Avatar--${size}`], className);
  const processImageSource = useCallback(async (res) => {
    var _a;
    if (res.status === 404 || ((_a = res.headers.get("Content-type")) == null ? void 0 : _a.includes("image/svg"))) {
      setImageSource(null);
    } else {
      const img = await res.blob();
      setImageSource(URL.createObjectURL(img));
    }
  }, []);
  useEffect(() => {
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
      const initialsContainerClasses = cx(classes, styles["Avatar--initials"], styles[`Avatar--color${color}`]);
      return /* @__PURE__ */ jsx("div", {
        className: initialsContainerClasses,
        "data-test-id": testId,
        ...rest,
        children: /* @__PURE__ */ jsx("span", {
          className: styles["Avatar-initials-content"],
          children: initials
        })
      });
    } else {
      return /* @__PURE__ */ jsx(DefaultIcon, {
        className: classes,
        "data-test-id": testId,
        size,
        ...rest
      });
    }
  }
  const dimension = DIMENSIONS[size];
  return /* @__PURE__ */ jsx("img", {
    ...rest,
    alt,
    className: classes,
    src: imageSource,
    width: dimension,
    height: dimension,
    "data-test-id": testId,
    onError: () => setUseDefaultAvatar(true)
  });
};
export {
  Avatar
};
//# sourceMappingURL=index.es.js.map
