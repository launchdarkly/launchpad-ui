import type { RefObject } from 'react';

import cx from 'clsx';
import DOMPurify from 'isomorphic-dompurify';

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
  container?: React.ElementType;
  textRef?: RefObject<HTMLElement>;
};

const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = 'div',
  textRef,
}: MarkdownProps) => {
  const Container = container;
  const classes = cx('Markdown', className);
  return (
    <Container
      className={classes}
      // We sanitize "source" (via DOMPurify) before inserting it into the DOM, to protect against XSS attacks.
      // Using dangerouslySetInnerHTML is safe.
      dangerouslySetInnerHTML={{
        __html: renderMarkdown(source, { baseUri, allowedTags }),
      }}
      ref={textRef}
    />
  );
};

export { Markdown };
export type { MarkdownProps };
