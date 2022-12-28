import './style.css';
import { jsx } from "react/jsx-runtime";
import { cx } from "classix";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
const Markdown$1 = "_Markdown_1lphk_1";
const styles = {
  Markdown: Markdown$1
};
function isAnchorNode(node) {
  return node.tagName.toLowerCase() === "a";
}
function renderMarkdown(source, {
  baseUri,
  allowedTags
} = {}) {
  const renderer = new marked.Renderer();
  marked.setOptions({
    gfm: true,
    breaks: true
  });
  renderer.link = function(href, title, text) {
    const link = marked.Renderer.prototype.link.call(this, href, title, text);
    if (!(href.startsWith("https://") || href.startsWith("http://"))) {
      return link;
    }
    if (baseUri && href.startsWith(baseUri)) {
      return link;
    }
    return link.replace("<a", "<a target='_blank' rel='noopener noreferrer'");
  };
  const html = marked(source, { renderer });
  const sanitizationConfig = {
    KEEP_CONTENT: false,
    ADD_ATTR: ["target"],
    FORBID_ATTR: ["style", "class"]
  };
  if (allowedTags) {
    sanitizationConfig.ALLOWED_TAGS = allowedTags;
  }
  return DOMPurify.sanitize(html, sanitizationConfig);
}
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (isAnchorNode(node) && node.target.toLowerCase() === "_blank") {
    node.setAttribute("rel", "noopener noreferrer");
  } else {
    node.removeAttribute("target");
  }
});
const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = "div",
  textRef,
  "data-test-id": testId = "markdown"
}) => {
  const Container = container;
  const classes = cx(styles.Markdown, className);
  return /* @__PURE__ */ jsx(
    Container,
    {
      className: classes,
      dangerouslySetInnerHTML: {
        __html: renderMarkdown(source, { baseUri, allowedTags })
      },
      ref: textRef,
      "data-test-id": testId
    }
  );
};
export {
  Markdown
};
//# sourceMappingURL=index.es.js.map
