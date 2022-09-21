import type { ElementType, RefObject } from 'react';

import { cx } from 'classix';
import DOMPurify from 'isomorphic-dompurify';

import './styles/Markdown.css';
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
};

const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = 'div',
  textRef,
  'data-test-id': testId = 'markdown',
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
      data-test-id={testId}
    />
  );
};

export { Markdown };
export type { MarkdownProps };
