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
	MenuTrigger,
	SubmenuTrigger,
	composeRenderProps,
} from 'react-aria-components';

import { CheckboxInner, checkbox } from './Checkbox';
import { RadioInner, radio } from './Radio';
import styles from './styles/Menu.module.css';
import { useLPContextProps } from './utils';

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

interface MenuProps<T> extends AriaMenuProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface MenuItemProps<T> extends AriaMenuItemProps<T>, VariantProps<typeof item> {
	ref?: Ref<T>;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
				menu({ ...renderProps, className }),
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
				item({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { selectionMode, isSelected, hasSubmenu, isDisabled }) => (
					<>
						{selectionMode === 'multiple' && (
							<div
								className={checkbox()}
								data-selected={isSelected || undefined}
								data-disabled={isDisabled || undefined}
							>
								<CheckboxInner isSelected={isSelected} />
							</div>
						)}
						{selectionMode === 'single' && (
							<div
								className={radio()}
								data-selected={isSelected || undefined}
								data-disabled={isDisabled || undefined}
							>
								<RadioInner isSelected={isSelected} />
							</div>
						)}
						<span className={styles.content}>{children}</span>
						{hasSubmenu && <Icon name="chevron-right" size="small" />}
					</>
				),
			)}
		</AriaMenuItem>
	);
};

export { Menu, MenuContext, MenuItem, MenuTrigger, SubmenuTrigger };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
