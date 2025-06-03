import type { IconProps } from '@launchpad-ui/icons';
import type {
	ButtonHTMLAttributes,
	ElementType,
	JSX,
	KeyboardEventHandler,
	MouseEvent,
	ReactElement,
	ReactNode,
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'classix';
import { cloneElement, forwardRef, isValidElement, memo } from 'react';

import styles from './styles/Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isLoading?: boolean;
	loadingText?: string | JSX.Element;
	size?: 'tiny' | 'small' | 'medium' | 'big';
	kind?:
		| 'default'
		| 'primary'
		| 'destructive'
		| 'minimal'
		| 'link'
		| 'close'
		| 'primaryFlair'
		| 'defaultFlair'
		| 'minimalFlair';
	fit?: boolean;
	disabled?: boolean;
	icon?: ReactElement<Omit<IconProps, 'size'>>;
	renderIconFirst?: boolean;
	asChild?: boolean;
	'data-test-id'?: string;
};

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		icon,
		children,
		className,
		size,
		fit,
		kind = 'default',
		isLoading = false,
		loadingText,
		renderIconFirst = false,
		disabled = false,
		asChild = false,
		onKeyDown,
		onClick,
		type = 'button',
		'data-test-id': testId = 'button',
		...rest
	} = props;

	const Component: ElementType = asChild ? Slot : 'button';

	const classes = cx(
		styles.Button,
		styles[`Button--${kind}`],
		size && styles[`Button--${size}`],
		fit && styles['Button--fit'],
		className,
	);

	const getIconSize = () => {
		let iconSize: IconProps['size'] = 'small';

		if (size === 'big') {
			iconSize = 'medium';
		}

		return iconSize;
	};

	const renderIcon =
		icon &&
		cloneElement(icon as ReactElement<IconProps>, {
			key: 'icon',
			size: getIconSize(),
			'aria-hidden': true,
			className: cx(icon.props.className, styles['Button-icon']),
		});

	const getFinalChildren = (c: ReactNode) => [
		renderIconFirst && renderIcon,
		isLoading && <span key="text">{loadingText || c}</span>,
		!isLoading && c && <span key="text">{c}</span>,
		!renderIconFirst && renderIcon,
		isLoading && <span key="spinner">…</span>,
	];

	const renderChildren = () => {
		if (asChild && isValidElement(children)) {
			return cloneElement(
				children,
				undefined,
				// biome-ignore lint/suspicious/noExplicitAny: ignore
				getFinalChildren((children as ReactElement<any>).props.children),
			);
		}

		return getFinalChildren(children);
	};

	const isDisabled = disabled || isLoading;

	const handleClick = (event: MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>) => {
		if (disabled) return event.preventDefault();

		onClick?.(event);
	};

	const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			const spacebarKeys = ['Spacebar', ' '];

			if (spacebarKeys.includes(event.key)) {
				event.preventDefault();
				const link = event.target as HTMLAnchorElement;
				link.click();
			}
		}
	};

	return (
		<Component
			className={classes}
			ref={ref}
			onClick={handleClick}
			onKeyDown={onKeyDown || handleKeyDown}
			disabled={isDisabled}
			type={asChild ? undefined : type}
			data-test-id={testId}
			{...rest}
		>
			{renderChildren()}
		</Component>
	);
});

ButtonComponent.displayName = 'Button';

/**
 * @deprecated use `Button` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-buttons-button--docs
 */
const Button = memo(ButtonComponent);

export { Button };
export type { ButtonProps };
