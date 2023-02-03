import type { ElementType, RefObject } from 'react';

import { cx } from 'classix';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import styles from './styles/Markdown.module.css';
import { isAnchorNode, parseLinkFromDOMNode, renderMarkdown } from './utils';

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  // Ensure we add the required rel attribute.
  if (isAnchorNode(node) && node.target.toLowerCase() === '_blank') {
    node.setAttribute('rel', 'noopener noreferrer');
  } else {
    node.removeAttribute('target');
  }
});

/**
 * Smart links transform markdown links that match a given domain (e.g. atlassian.net).
 */
type SmartLink = {
  domain: string;
  renderer: (props: { href: string; text?: string }) => JSX.Element;
};

type MarkdownProps = {
  source: string;
  className?: string;
  baseUri?: string;
  allowedTags?: string[];
  container?: ElementType;
  textRef?: RefObject<HTMLElement>;
  'data-test-id'?: string;
  smartLinks?: [SmartLink];
};

const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = 'div',
  textRef,
  smartLinks,
  'data-test-id': testId = 'markdown',
}: MarkdownProps) => {
  const Container = container;
  const classes = cx(styles.Markdown, className);

  const renderedMarkdown = renderMarkdown(source, { baseUri, allowedTags });

  // We sanitize "source" (via DOMPurify) before inserting it into the DOM, to protect against XSS attacks.
  const parsedJSX = parse(renderedMarkdown as string, {
    // The replace option will replace all DOM nodes when the replace function returns a valid React element.
    replace: (domNode) => {
      const parsedLink = parseLinkFromDOMNode(domNode);
      if (!parsedLink) {
        return;
      }
      const smartLink = smartLinks?.find((s) => {
        return parsedLink.url.hostname.endsWith(s.domain);
      });
      if (!smartLink) {
        return;
      }
      return smartLink.renderer({
        href: parsedLink.url.toString(),
        text: parsedLink.text,
      });
    },
  });
  return (
    <Container className={classes} ref={textRef} data-test-id={testId}>
      {parsedJSX}
    </Container>
  );
};

export { Markdown };
export type { MarkdownProps, SmartLink };
