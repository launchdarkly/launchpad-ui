declare function isAnchorNode(node: Element): node is HTMLAnchorElement;
declare function renderMarkdown(source: string, { baseUri, allowedTags, }?: {
    baseUri?: string;
    allowedTags?: string[];
}): string | HTMLElement | DocumentFragment;
export { isAnchorNode, renderMarkdown };
//# sourceMappingURL=utils.d.ts.map