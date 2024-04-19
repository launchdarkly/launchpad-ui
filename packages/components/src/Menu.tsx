import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuProps as AriaMenuProps,
	MenuTriggerProps,
	SubmenuTriggerProps,
} from 'react-aria-components';
import type { forwardRefType } from './utils';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuTrigger,
	SubmenuTrigger,
	composeRenderProps,
} from 'react-aria-components';

import { CheckboxInner, checkbox } from './Checkbox';
import { RadioInner, radio } from './Radio';
import styles from './styles/Menu.module.css';

const menu = cva(styles.menu);
const item = cva(styles.item, {
	variants: {
		variant: {
			default: styles.default,
			destructive: styles.destructive,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface MenuProps<T> extends AriaMenuProps<T> {}
interface MenuItemProps<T> extends AriaMenuItemProps<T>, VariantProps<typeof item> {}

const _Menu = <T extends object>(
	{ className, ...props }: MenuProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaMenu {...props} ref={ref} className={menu({ className })} />;
};

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * https://react-spectrum.adobe.com/react-aria/Menu.html
 */
const Menu = (forwardRef as forwardRefType)(_Menu);

const _MenuItem = <T extends object>(
	{ variant = 'default', ...props }: MenuItemProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaMenuItem
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				item({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { selectionMode, isSelected, hasSubmenu, isDisabled }) => (
					<>
						{selectionMode === 'multiple' && (
							<div
								className={checkbox({ className: styles.check })}
								data-selected={isSelected || undefined}
								data-disabled={isDisabled || undefined}
							>
								<CheckboxInner isSelected={isSelected} className={styles.checkbox} />
							</div>
						)}
						{selectionMode === 'single' && (
							<div
								className={radio({ className: styles.check })}
								data-disabled={isDisabled || undefined}
							>
								<RadioInner isSelected={isSelected} />
							</div>
						)}
						{children}
						{hasSubmenu && <Icon name="chevron-right" size="small" className={styles.submenu} />}
					</>
				),
			)}
		</AriaMenuItem>
	);
};

/**
 * A MenuItem represents an individual action in a Menu.
 */
const MenuItem = (forwardRef as forwardRefType)(_MenuItem);

export { Menu, MenuItem, MenuTrigger, SubmenuTrigger };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
