import type { ElementType, RefObject } from 'react';
type MarkdownProps = {
    source: string;
    className?: string;
    baseUri?: string;
    allowedTags?: string[];
    container?: ElementType;
    textRef?: RefObject<HTMLElement>;
    'data-test-id'?: string;
};
declare const Markdown: ({ source, className, baseUri, allowedTags, container, textRef, "data-test-id": testId, }: MarkdownProps) => JSX.Element;
export { Markdown };
export type { MarkdownProps };
//# sourceMappingURL=Markdown.d.ts.map