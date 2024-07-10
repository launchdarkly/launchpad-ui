import type { TransformedToken } from 'style-dictionary/types';
import type {
	ColorInformation,
	ColorPresentation,
	CompletionItem,
	Hover,
	InitializeResult,
	TextDocumentPositionParams,
} from 'vscode-languageserver/node';

import tokens from '@launchpad-ui/tokens/dist/tokens.json';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	Color,
	CompletionItemKind,
	MarkupKind,
	ProposedFeatures,
	Range,
	TextDocumentSyncKind,
	TextDocuments,
	TextEdit,
	createConnection,
} from 'vscode-languageserver/node';

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
	body: /font/,
	borderRadius: /border-radius/,
	borderWidth: /border|border-width/,
	code: /font/,
	color: /color|background|shadow|border|outline|fill/,
	display: /font/,
	duration: /animation-duration|transition/,
	fontFamily: /font-family/,
	fontSize: /font-size/,
	heading: /font/,
	label: /font/,
	lineHeight: /line-height/,
	size: /height|min-height|max-height|width|min-width|max-width/,
	small: /font/,
	spacing: /margin|padding|gap|top|left|right|bottom/,
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
			if (token?.detail && property.startsWith('lp-color')) {
				const color = parseColor(token.detail, 0);
				colorInfos.push({ color, range });
			}
		}
	}

	return colorInfos;
});

connection.onColorPresentation(({ color, range }) => {
	const result: ColorPresentation[] = [];
	const red256 = Math.round(color.red * 255);
	const green256 = Math.round(color.green * 255);
	const blue256 = Math.round(color.blue * 255);

	const toTwoDigitHex = (n: number) => {
		const r = n.toString(16);
		return r.length !== 2 ? `0${r}` : r;
	};

	const label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}`;
	result.push({ label: label, textEdit: TextEdit.replace(range, label) });

	return result;
});

enum CharCode {
	Digit0 = 48,
	Digit9 = 57,

	A = 65,
	F = 70,

	a = 97,
	f = 102,
}

const parseHexDigit = (charCode: CharCode) => {
	if (charCode >= CharCode.Digit0 && charCode <= CharCode.Digit9) {
		return charCode - CharCode.Digit0;
	}
	if (charCode >= CharCode.A && charCode <= CharCode.F) {
		return charCode - CharCode.A + 10;
	}
	if (charCode >= CharCode.a && charCode <= CharCode.f) {
		return charCode - CharCode.a + 10;
	}
	return 0;
};

const parseColor = (content: string, offset: number) => {
	const r =
		(16 * parseHexDigit(content.charCodeAt(offset + 1)) +
			parseHexDigit(content.charCodeAt(offset + 2))) /
		255;
	const g =
		(16 * parseHexDigit(content.charCodeAt(offset + 3)) +
			parseHexDigit(content.charCodeAt(offset + 4))) /
		255;
	const b =
		(16 * parseHexDigit(content.charCodeAt(offset + 5)) +
			parseHexDigit(content.charCodeAt(offset + 6))) /
		255;
	return Color.create(r, g, b, 1);
};

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
