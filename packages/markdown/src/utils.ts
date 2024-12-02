import type { Config } from 'isomorphic-dompurify';
import type { Tokens } from 'marked';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

function isAnchorNode(node: Element): node is HTMLAnchorElement {
	return node.tagName.toLowerCase() === 'a';
}

function renderMarkdown(
	source: string,
	{
		baseUri,
		allowedTags,
	}: {
		baseUri?: string;
		allowedTags?: string[];
	} = {},
) {
	const renderer = new marked.Renderer();
	marked.setOptions({
		gfm: true,
		breaks: true,
	});
	renderer.link = function ({ href, title, tokens }) {
		const link = marked.Renderer.prototype.link.call(this, { href, title, tokens } as Tokens.Link);
		if (!(href.startsWith('https://') || href.startsWith('http://'))) {
			return link;
		}
		if (baseUri && href.startsWith(baseUri)) {
			return link;
		}
		return link.replace('<a', "<a target='_blank' rel='noopener noreferrer'");
	};

	const html = marked(source, { renderer }) as string;

	const sanitizationConfig: Config = {
		KEEP_CONTENT: false,
		ADD_ATTR: ['target'],
		FORBID_ATTR: ['style', 'class'],
		FORBID_TAGS: ['style'],
		ALLOWED_TAGS: ['a', '#text', 'p', 'li', 'ol', 'ul', 'b', 'strong', 'i', 'em', 'del', 'code'],
	};

	if (allowedTags) {
		sanitizationConfig.ALLOWED_TAGS = allowedTags;
	}

	return DOMPurify.sanitize(html, sanitizationConfig);
}

export { isAnchorNode, renderMarkdown };
