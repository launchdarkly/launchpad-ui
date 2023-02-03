import type { DOMNode, Element as DOMElement, Text as DOMText } from 'html-react-parser';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

function isAnchorNode(node: Element): node is HTMLAnchorElement {
  return node.tagName.toLowerCase() === 'a';
}

function isAnchorDOMNode(node: DOMNode): node is DOMElement {
  const element = node as DOMElement;
  return element?.name === 'a';
}

function isDOMText(node: DOMNode): node is DOMText {
  return (node as DOMText)?.type === 'text';
}

/**
 *
 * parLinkFromDOMNode returns undefined if the node is not anchor node with an href attribute.
 */
function parseLinkFromDOMNode(node: DOMNode) {
  if (!isAnchorDOMNode(node)) {
    return;
  }
  if (!('href' in node.attribs)) {
    return;
  }
  const { href } = node.attribs;
  const textNode = node.firstChild;
  if (!textNode || !isDOMText(textNode)) {
    return;
  }
  try {
    const url = new URL(href);
    return { url, text: textNode.data !== href ? textNode.data : undefined };
  } catch {
    return;
  }
}

function renderMarkdown(
  source: string,
  {
    baseUri,
    allowedTags,
  }: {
    baseUri?: string;
    allowedTags?: string[];
  } = {}
) {
  const renderer = new marked.Renderer();
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  renderer.link = function (href: string, title: string, text: string) {
    const link = marked.Renderer.prototype.link.call(this, href, title, text);
    if (!(href.startsWith('https://') || href.startsWith('http://'))) {
      return link;
    }
    if (baseUri && href.startsWith(baseUri)) {
      return link;
    }
    return link.replace('<a', "<a target='_blank' rel='noopener noreferrer'");
  };

  const html = marked(source, { renderer });

  const sanitizationConfig: DOMPurify.Config = {
    KEEP_CONTENT: false,
    ADD_ATTR: ['target'],
    FORBID_ATTR: ['style', 'class'],
  };

  if (allowedTags) {
    sanitizationConfig.ALLOWED_TAGS = allowedTags;
  }

  return DOMPurify.sanitize(html, sanitizationConfig);
}

export { isAnchorNode, parseLinkFromDOMNode, renderMarkdown };
