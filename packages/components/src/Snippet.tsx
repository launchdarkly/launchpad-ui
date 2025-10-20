import { IconButton } from '@launchpad-ui/components';
import Prism from 'prismjs';
import { type JSX, useLayoutEffect, useRef } from 'react';

// Import languages based on what you need
import 'prismjs/components/prism-apex';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-brightscript';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-erlang';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-gradle';
import 'prismjs/components/prism-haskell';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-makefile';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
// Import plugins
import 'prismjs/plugins/keep-markup/prism-keep-markup';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import { CopyToClipboard } from './CopyToClipboard';

import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import styles from './styles/Snippet.module.css';

export const languages = [
	'bash',
	'shell',
	'json',
	'html',
	'xml',
	'js',
	'javascript',
	'lua',
	'ts',
	'typescript',
	'php',
	'java',
	'ruby',
	'python',
	'go',
	'csharp',
	'c',
	'cpp',
	'objectivec',
	'swift',
	'makefile',
	'haskell',
	'brightscript',
	'dart',
	'rust',
	'tsx',
	'gradle',
	'powershell',
	'kotlin',
	'erlang',
	'yaml',
	'apex',
	// text and empty string are not a recognized languages by prism, we use it here as a default option for when you don't want styling.
	'text',
	'',
] as const;

export type SnippetLang = (typeof languages)[number];

type SnippetProps = {
	children: string | JSX.Element;
	className?: string;
	highlightRange?: string;
	highlightOffset?: number;
	lang: SnippetLang;
	label?: string;
	withHeader?: boolean;
	withLineNumbers?: boolean;
	useDefaultHighlighting?: boolean;
	withCopyButton?: boolean;
	trackAnalyticsOnClick?: () => void;
};

// Example usage:
//
// const json = JSON.stringify({
//    'key': 'test@test.com',
//    'ip': '192.168.0.1',
//    'custom': {
//      'customer_ranking': 10004
//    }
// }, null, 2);
//
// <Snippet withCopyButton={true} lang="json">{json}</Snippet>
export function Snippet({
	children,
	className,
	highlightRange,
	highlightOffset,
	lang,
	label,
	withHeader,
	withLineNumbers,
	useDefaultHighlighting = false,
	withCopyButton,
	trackAnalyticsOnClick,
}: SnippetProps) {
	const codeEl = useRef<HTMLElement>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: children and lang are intentionally included to re-highlight when they change
	useLayoutEffect(() => {
		const element = codeEl.current;
		if (!element) {
			return;
		}

		// Use requestAnimationFrame to ensure that the element is mounted
		// before highlighting it.
		const frame = requestAnimationFrame(() => {
			Prism.highlightElement(element);
		});

		// Cancel the animation frame when the component unmounts.
		return () => cancelAnimationFrame(frame);
	}, [children, lang]);

	return (
		<>
			{withHeader && (
				<div className={styles.header}>
					{label && <span>{label}</span>}
					{lang && <span>{lang}</span>}
				</div>
			)}
			<div
				className={`${styles.snippet} ${className ?? ''} ${withCopyButton ? styles.copyable : ''} ${useDefaultHighlighting ? styles.useDefaultHighlighting : ''}`}
			>
				<pre
					className={withLineNumbers ? styles['line-numbers'] : ''}
					data-start={1}
					data-line-offset={highlightOffset ? highlightOffset.toString() : ''}
					data-line={highlightRange}
				>
					<code className={`language-${lang}`} ref={codeEl}>
						{children}
					</code>
					{withCopyButton && (
						<CopyToClipboard text={children as string} showTooltip={false}>
							<IconButton
								className={styles.copyButton}
								aria-label="Copy code snippet"
								variant="minimal"
								icon="copy-code"
								onPress={trackAnalyticsOnClick}
							/>
						</CopyToClipboard>
					)}
				</pre>
			</div>
		</>
	);
}
