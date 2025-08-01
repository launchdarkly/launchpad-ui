import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuProps as AriaMenuProps,
	ContextValue,
	MenuTriggerProps,
	SubmenuTriggerProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	composeRenderProps,
	MenuTrigger,
	SubmenuTrigger,
} from 'react-aria-components';

import { CheckboxIcon, checkboxStyles } from './Checkbox';
import styles from './styles/Menu.module.css';
import { useLPContextProps } from './utils';

const menuStyles = cva(styles.menu);
const menuItemStyles = cva(styles.item, {
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

interface MenuProps<T> extends AriaMenuProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface MenuItemProps<T> extends AriaMenuItemProps<T>, VariantProps<typeof menuItemStyles> {
	ref?: Ref<HTMLDivElement>;
}

// biome-ignore lint/suspicious/noExplicitAny: ignore
const MenuContext = createContext<ContextValue<MenuProps<any>, HTMLDivElement>>(null);

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * https://react-spectrum.adobe.com/react-aria/Menu.html
 */
const Menu = <T extends object>({ ref, ...props }: MenuProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, MenuContext);
	return (
		<AriaMenu
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				menuStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A MenuItem represents an individual action in a Menu.
 */
const MenuItem = <T extends object>({ variant = 'default', ref, ...props }: MenuItemProps<T>) => {
	return (
		<AriaMenuItem
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				menuItemStyles({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { selectionMode, isSelected, hasSubmenu, isDisabled }) => (
					<>
						{selectionMode === 'multiple' && (
							<div
								className={checkboxStyles()}
								data-selected={isSelected || undefined}
								data-disabled={isDisabled || undefined}
							>
								<CheckboxIcon isSelected={isSelected} />
							</div>
						)}
						<span className={styles.content}>{children}</span>
						{selectionMode === 'single' && isSelected && <Icon name="check-circle" size="small" />}
						{hasSubmenu && <Icon name="chevron-right" size="small" />}
					</>
				),
			)}
		</AriaMenuItem>
	);
};

export { Menu, MenuContext, MenuItem, MenuTrigger, SubmenuTrigger, menuItemStyles, menuStyles };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
