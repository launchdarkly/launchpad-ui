import type { TooltipProps } from '@launchpad-ui/tooltip';
import type { ComponentPropsWithoutRef, JSX, KeyboardEventHandler } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Slot } from '@radix-ui/react-slot';
import { announce } from '@react-aria/live-announcer';
import { cx } from 'classix';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import { CopyCodeButton } from './CopyCodeButton';
import styles from './styles/CopyToClipboard.module.css';

type CopyToClipboardProps = ComponentPropsWithoutRef<'span'> & {
	triggerAriaLabel?: string;
	customCopiedText?: string;
	text: string;
	tooltip?: string | JSX.Element;
	tooltipOptions?: Partial<TooltipProps>;
	popoverTargetClassName?: string;
	onCopy?(): void;
	kind?: 'minimal' | 'basic' | 'default';
	asChild?: boolean;
	'data-test-id'?: string;
};

type CopyToClipboardHandleRef = {
	handleCopy: () => void;
};

const CopyConfirmation = () => (
	<span className={styles['Clipboard-confirmation']}>
		<Icon name="check-circle" className={styles['Clipboard-checkmark']} size="medium" />
		<span className={styles['Clipboard-copied']}>Copied!</span>
	</span>
);

/**
 * @deprecated follow the recipe from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/recipes-composition--docs#copy%20to%20clipboard
 */
const CopyToClipboard = forwardRef<CopyToClipboardHandleRef, CopyToClipboardProps>(
	(
		{
			customCopiedText,
			text,
			tooltip,
			kind,
			tooltipOptions = {
				placement: 'bottom',
			},
			className,
			popoverTargetClassName,
			children,
			triggerAriaLabel,
			onCopy,
			asChild,
			'data-test-id': testId = 'copy-to-clipboard',
			...rest
		},
		ref,
	) => {
		const [isOpen, setIsOpen] = useState(false);
		const [wasCopied, setWasCopied] = useState(false);
		const triggerRef = useRef<HTMLButtonElement>(null);

		const classes = cx(styles.CopyToClipboard, className);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		const handleCopy = useCallback(async () => {
			await navigator.clipboard.writeText(text);
			const node = triggerRef.current;

			if (node) {
				node.focus();
			}

			setIsOpen(true);
			setWasCopied(true);
			announce('Copied!', 'polite', 300);

			onCopy?.();
		}, [onCopy, triggerRef, text, setIsOpen, setWasCopied]);

		// this imperative handle is useful when a parent needs to programmatically
		// call `handleCopy`, e.g. when the parent node is clicked
		useImperativeHandle(
			ref,
			() => ({
				handleCopy,
			}),
			[handleCopy],
		);

		const tooltipText = wasCopied
			? customCopiedText || <CopyConfirmation />
			: tooltip || 'Copy to clipboard';
		const triggerAriaLabelText = triggerAriaLabel || `Copy ${text} to your clipboard.`;

		const handleInteraction = (isOpen: boolean) => {
			setIsOpen(isOpen);
			setTimeout(() => setWasCopied((prev) => (!isOpen ? isOpen : prev)));
		};

		const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
			const validKeys = ['Spacebar', ' ', 'Enter'];

			if (validKeys.includes(event.key)) {
				event.preventDefault();
				handleCopy();
			}
		};

		const Component = asChild ? Slot : CopyCodeButton;

		return (
			<span className={classes} data-test-id={testId} {...rest}>
				<Tooltip
					{...tooltipOptions}
					isOpen={isOpen}
					content={tooltipText}
					onInteraction={handleInteraction}
					targetClassName={popoverTargetClassName}
				>
					<Component
						onClick={handleCopy}
						onKeyDown={handleKeyDown}
						ref={triggerRef}
						aria-label={triggerAriaLabelText}
						role="button"
						kind={kind}
						tabIndex={0}
					>
						{children}
					</Component>
				</Tooltip>
			</span>
		);
	},
);

CopyToClipboard.displayName = 'CopyToClipboard';

export { CopyConfirmation, CopyToClipboard };
export type { CopyToClipboardProps, CopyToClipboardHandleRef };
