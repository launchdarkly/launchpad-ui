import type { IconProps } from '@launchpad-ui/icons';
import type {
	ButtonHTMLAttributes,
	ElementType,
	KeyboardEventHandler,
	MouseEvent,
	ReactElement,
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'classix';
import { cloneElement, forwardRef, isValidElement, memo } from 'react';

import styles from './styles/Button.module.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'default' | 'primary' | 'destructive' | 'minimal' | 'close';
	icon: Omit<ReactElement<IconProps>, 'size'>;
	size?: 'small' | 'medium';
	'aria-label': string;
	asChild?: boolean;
	'data-test-id'?: string;
};

const IconButtonComponent = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	const {
		icon,
		children,
		className,
		size = 'medium',
		kind = 'minimal',
		disabled = false,
		asChild = false,
		onKeyDown,
		onClick,
		type = 'button',
		'data-test-id': testId = 'icon-button',
		...rest
	} = props;

	const Component: ElementType = asChild ? Slot : 'button';

	const classes = cx(
		styles.IconButton,
		styles.Button,
		styles['Button--icon'],
		styles[`Button--${kind}`],
		size && styles[`Button--${size}`],
		className,
	);

	const iconSize = () => {
		if (props.size === 'small') return 'small';

		return 'medium';
	};

	const clonedIcon = cloneElement(icon, {
		key: 'icon',
		size: iconSize(),
		'aria-hidden': true,
		className: cx(icon.props.className, 'Button-icon'),
	});

	const renderChildren = () => {
		if (asChild && isValidElement(children)) {
			return cloneElement(children, undefined, clonedIcon);
		}

		return clonedIcon;
	};

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
			disabled={disabled}
			onKeyDown={onKeyDown || handleKeyDown}
			type={type}
			data-test-id={testId}
			{...rest}
		>
			{renderChildren()}
		</Component>
	);
});

IconButtonComponent.displayName = 'IconButton';

/**
 * @deprecated use `IconButton` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-buttons-iconbutton--docs
 */
const IconButton = memo(IconButtonComponent);

export { IconButton };
export type { IconButtonProps };
