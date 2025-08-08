import type { IconProps } from '@launchpad-ui/icons';
import type { PopoverPlacement } from '@launchpad-ui/popover';
import type { ComponentPropsWithRef, ElementType, JSX, PropsWithRef, ReactElement } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Slot } from '@radix-ui/react-slot';
import { FocusRing } from '@react-aria/focus';
import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Menu.module.css';

// Merge two types and get rid of overlapping definitions
type Merge<T, U> = Omit<T, keyof U> & U;

type PropsWithComponent<P, T extends ElementType> = P & { component?: T };

type PolymorphicPropsWithRef<P, T extends ElementType> = Merge<
	T extends keyof JSX.IntrinsicElements
		? PropsWithRef<JSX.IntrinsicElements[T]>
		: ComponentPropsWithRef<T>,
	PropsWithComponent<P, T>
>;

type MenuItemOwnProps = {
	isHighlighted?: boolean;
	icon?: ReactElement<IconProps>;
	disabled?: boolean;
	nested?: boolean;
	groupHeader?: boolean;
	tooltip?: string | ReactElement;
	tooltipOptions?: ComponentPropsWithRef<typeof Tooltip>;
	tooltipPlacement?: PopoverPlacement;
	asChild?: boolean;
	'data-test-id'?: string;
};

const defaultElement = 'button';

type MenuItemProps<P, T extends ElementType = typeof defaultElement> = PolymorphicPropsWithRef<
	| (MenuItemOwnProps & {
			item: P; // Infer the type if it is included
	  })
	| (MenuItemOwnProps & {
			item?: undefined;
	  }),
	T
>;

const MenuItem = <P, T extends ElementType = typeof defaultElement>({
	...props
}: MenuItemProps<P, T>) => {
	const {
		// TODO: remove component prop once we migrate over to asChild format
		component,
		children,
		isHighlighted,
		icon,
		nested,
		groupHeader,
		// biome-ignore lint/correctness/noUnusedVariables: ignore
		item,
		disabled,
		className,
		tooltip,
		role = 'menuitem',
		tooltipPlacement,
		onKeyDown,
		tooltipOptions,
		asChild,
		'data-test-id': testId = 'menu-item',
		...rest
	} = props;

	const Component: ElementType = component || (asChild ? Slot : defaultElement);

	const renderIcon = icon && cloneElement(icon, { size: 'small' });

	const renderedItem = (
		<FocusRing focusRingClass={styles['has-focus']}>
			<Component
				{...addLaunchPadAttribution('MenuItem')}
				{...rest}
				disabled={disabled}
				aria-disabled={disabled ? disabled : undefined}
				className={cx(
					styles['Menu-item'],
					className,
					isHighlighted && styles['is-highlighted'],
					nested && styles['Menu-item--nested'],
					groupHeader && styles['Menu-item--header'],
				)}
				data-test-id={testId}
				role={role}
				onKeyDown={onKeyDown}
			>
				{asChild ? (
					children
				) : (
					<>
						{icon && <span className={styles['Menu-item-icon']}>{renderIcon}</span>}
						{children}
					</>
				)}
			</Component>
		</FocusRing>
	);

	if (tooltip) {
		return (
			<Tooltip
				content={tooltip}
				rootElementStyle={{ display: 'block' }}
				allowBoundaryElementOverflow
				placement={tooltipPlacement ? tooltipPlacement : 'bottom'}
				{...(tooltipOptions || {})}
			>
				{renderedItem}
			</Tooltip>
		);
	}

	return renderedItem;
};

export { MenuItem };
export type { MenuItemProps };
