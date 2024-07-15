import type { TransformedToken } from 'style-dictionary/types';
import type {
	ColorInformation,
	CompletionItem,
	Hover,
	InitializeResult,
	TextDocumentPositionParams,
} from 'vscode-languageserver/node';

import tokens from '@launchpad-ui/tokens/dist/tokens.json';
import { getCSSLanguageService } from 'vscode-css-languageservice/lib/esm/cssLanguageService';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	Color,
	CompletionItemKind,
	MarkupKind,
	ProposedFeatures,
	Range,
	TextDocumentSyncKind,
	TextDocuments,
	createConnection,
} from 'vscode-languageserver/node';

const cssLanguageService = getCSSLanguageService();

/**
 * Grouped VS Code `CompletionItem`s for LP custom properties
 */
const groupedTokens = Object.entries(tokens).reduce(
	(accum, [key, value]) => {
		accum[key] = value.map(
			(token: TransformedToken) =>
				({
					label: `lp-${token.name}`,
					insertText: `var(--lp-${token.name})`,
					detail: token.$value.toString(),
					documentation: token.$description,
					kind: key === 'color' ? CompletionItemKind.Color : CompletionItemKind.Variable,
				}) satisfies CompletionItem,
		);
		return accum;
	},
	{} as Record<string, CompletionItem[]>,
);

const allTokens: CompletionItem[] = Object.values(groupedTokens).flat();

const groupPatterns = {
	borderRadius: /border-radius/,
	borderWidth: /border|border-width/,
	color: /color|background|shadow|border|outline|fill/,
	duration: /animation-duration|transition/,
	fontFamily: /font-family/,
	fontSize: /font-size/,
	lineHeight: /line-height/,
	size: /height|min-height|max-height|width|min-width|max-width/,
	spacing: /margin|padding|gap|top|left|right|bottom/,
	text: /font/,
	zIndex: /z-index/,
};

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(() => {
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				triggerCharacters: ['--'],
			},
			hoverProvider: true,
			colorProvider: {},
		},
	};
	return result;
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	({ textDocument, position }: TextDocumentPositionParams): CompletionItem[] => {
		const doc = documents.get(textDocument.uri);
		let matches: CompletionItem[] = [];

		if (!doc) {
			return [];
		}

		const currentText = doc.getText({
			start: { line: position.line, character: 0 },
			end: { line: position.line, character: 1000 },
		});

		for (const [tokenGroupName, pattern] of Object.entries(groupPatterns)) {
			if (!pattern.test(currentText)) continue;

			const currentCompletionItems = groupedTokens[tokenGroupName as keyof typeof groupPatterns];

			matches = matches.concat(currentCompletionItems);
		}

		if (matches.length > 0) {
			return matches;
		}

		return allTokens;
	},
);

connection.onHover(({ textDocument, position }): Hover => {
	const doc = documents.get(textDocument.uri);

	if (!doc) {
		return {
			contents: '',
		};
	}

	const currentText = doc.getText({
		start: { line: position.line, character: 0 },
		end: { line: position.line, character: 1000 },
	});

	const hasProperty = currentText.includes('var(--lp');

	if (!hasProperty) {
		return {
			contents: '',
		};
	}

	const property = currentText.substring(
		currentText.lastIndexOf('--') + 2,
		currentText.lastIndexOf(')'),
	);

	const token = allTokens.find((token) => token.label === property);

	return {
		contents: {
			kind: MarkupKind.Markdown,
			value: token
				? ['```css', ':root {', `  --${token.label}: ${token.detail};`, '}', '```'].join('\n')
				: '',
		},
	};
});

// https://github.com/microsoft/vscode-extension-samples/blob/main/lsp-web-extension-sample/server/src/browserServerMain.ts
connection.onDocumentColor(({ textDocument }) => {
	const cssVarRegExp = /var\(([a-z-0-9,\s]+)\)/g;
	const colorInfos: ColorInformation[] = [];
	const doc = documents.get(textDocument.uri);

	if (doc) {
		const text = doc.getText();
		cssVarRegExp.lastIndex = 0;
		let match: RegExpExecArray | null;

		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		while ((match = cssVarRegExp.exec(text)) != null) {
			const offset = match.index;
			const length = match[0].length;

			const range = Range.create(doc.positionAt(offset), doc.positionAt(offset + length));
			const property = match[0].substring(
				match[0].lastIndexOf('--') + 2,
				match[0].lastIndexOf(')'),
			);

			const token = allTokens.find((token) => token.label === property);
			if (
				property.startsWith('lp-color') &&
				token?.detail &&
				!token?.detail.includes('linear-gradient')
			) {
				const rgb = token.detail
					.trim()
					.split('(')[1]
					.split(')')[0]
					.split(',')
					.map((item) => Number.parseFloat(item));
				const color = Color.create(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3] ?? 1);
				colorInfos.push({ color, range });
			}
		}
	}

	return colorInfos;
});

connection.onColorPresentation(({ textDocument, color, range }) => {
	const doc = documents.get(textDocument.uri);

	if (!doc) {
		return undefined;
	}

	return cssLanguageService.getColorPresentations(
		doc,
		cssLanguageService.parseStylesheet(doc),
		color,
		range,
	);
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
