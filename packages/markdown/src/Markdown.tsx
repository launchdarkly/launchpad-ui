import type { Element, Text } from 'html-react-parser';
import type { RefObject, ElementType } from 'react';

import { cx } from 'classix';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import styles from './styles/Markdown.module.css';
import { isAnchorNode, renderMarkdown } from './utils';

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  // Ensure we add the required rel attribute.
  if (isAnchorNode(node) && node.target.toLowerCase() === '_blank') {
    node.setAttribute('rel', 'noopener noreferrer');
  } else {
    node.removeAttribute('target');
  }
});

type MarkdownProps = {
  source: string;
  className?: string;
  baseUri?: string;
  allowedTags?: string[];
  container?: ElementType;
  textRef?: RefObject<HTMLElement>;
  'data-test-id'?: string;
  debug?: boolean;
  smartLinks?: {
    domain: string;
    renderer: (props: { href: string; text?: string }) => JSX.Element;
  }[];
};

const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = 'div',
  textRef,
  debug,
  smartLinks,
  'data-test-id': testId = 'markdown',
}: MarkdownProps) => {
  const Container = container;
  const classes = cx(styles.Markdown, className);

  const renderedMarkdown = renderMarkdown(source, { baseUri, allowedTags, debug });
  const parsed = parse(renderedMarkdown as string, {
    replace: (domNode) => {
      if ((domNode as Element)?.attribs?.href) {
        const domElement = domNode as Element;
        const { href } = domElement.attribs;
        const firstChild = domElement.firstChild;
        if (firstChild?.type !== 'text') {
          return;
        }
        const textNode = firstChild as Text;
        const url = new URL(href);
        const smartLink = smartLinks?.find((s) => {
          return url.hostname.endsWith(s.domain);
        });
        if (!smartLink) {
          return;
        }
        return smartLink.renderer({
          href,
          text: textNode.data !== href ? textNode.data : undefined,
        });
      }
      return;
    },
  });
  return (
    <Container
      className={classes}
      // We sanitize "source" (via DOMPurify) before inserting it into the DOM, to protect against XSS attacks.
      // Using dangerouslySetInnerHTML is safe.
      // dangerouslySetInnerHTML={{
      //   __html: renderedMarkdown,
      // }}
      ref={textRef}
      data-test-id={testId}
    >
      {parsed}
    </Container>
  );
};

export { Markdown };
export type { MarkdownProps };
