import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuProps as AriaMenuProps,
	MenuTriggerProps,
	SubmenuTriggerProps,
} from 'react-aria-components/Menu';
import { Menu as AriaMenu, MenuItem as AriaMenuItem, MenuTrigger, SubmenuTrigger } from 'react-aria-components/Menu';
import type { ContextValue } from 'react-aria-components/slots';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { CheckboxIcon, checkboxStyles } from './Checkbox';
import { useLPContextProps } from './utils';

import styles from './styles/Menu.module.css';

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
// oxlint-disable-next-line typescript/no-explicit-any -- Context objects can't carry an open generic; matches existing biome-ignore precedent
const MenuContext = createContext<ContextValue<MenuProps<any>, HTMLDivElement>>(null);

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * https://react-spectrum.adobe.com/react-aria/Menu.html
 */
const Menu = <T extends object>({ ref, ...props }: MenuProps<T>) => {
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
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
			{composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu, isDisabled }) => (
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
			))}
		</AriaMenuItem>
	);
};

export { Menu, MenuContext, MenuItem, MenuTrigger, SubmenuTrigger, menuItemStyles, menuStyles };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
