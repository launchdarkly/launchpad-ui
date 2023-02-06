import type { ElementType, ReactNode, RefObject } from 'react';

import { cx } from 'classix';
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
  children?: (rendered: string) => ReactNode;
};

const Markdown = ({
  source,
  className,
  baseUri,
  allowedTags,
  container = 'div',
  textRef,
  children,
  'data-test-id': testId = 'markdown',
}: MarkdownProps) => {
  const Container = container;
  const classes = cx(styles.Markdown, className);

  const renderedMarkdown = renderMarkdown(source, { baseUri, allowedTags }) as string;

  return (
    <Container className={classes} ref={textRef} data-test-id={testId}>
      {children ? (
        children(renderedMarkdown)
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: renderedMarkdown,
          }}
        />
      )}
    </Container>
  );
};

export { Markdown };
export type { MarkdownProps, SmartLink };
