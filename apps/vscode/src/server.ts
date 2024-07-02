import type { TransformedToken } from 'style-dictionary/types';
import type {
	CompletionItem,
	InitializeResult,
	TextDocumentPositionParams,
} from 'vscode-languageserver/node';

import tokens from '@launchpad-ui/tokens/dist/tokens.json';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	CompletionItemKind,
	ProposedFeatures,
	TextDocumentSyncKind,
	TextDocuments,
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
					detail:
						typeof token.$value === 'object'
							? `${token.$value.fontWeight} ${token.$value.fontSize}/${token.$value.lineHeight} ${token.$value.fontFamily}`
							: token.$value.toString(),
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
		},
	};
	return result;
});

// This handler provides the initial list of the completion items.
connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	const doc = documents.get(textDocumentPosition.textDocument.uri);
	let matches: CompletionItem[] = [];

	if (!doc) {
		return [];
	}

	const currentText = doc.getText({
		start: { line: textDocumentPosition.position.line, character: 0 },
		end: { line: textDocumentPosition.position.line, character: 1000 },
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
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
