import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuProps as AriaMenuProps,
	MenuTriggerProps,
	SubmenuTriggerProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import {
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuTrigger,
	SubmenuTrigger,
	composeRenderProps,
} from 'react-aria-components';

import { CheckboxInner, checkbox } from './Checkbox';
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

interface MenuProps<T> extends AriaMenuProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface MenuItemProps<T> extends AriaMenuItemProps<T>, VariantProps<typeof item> {
	ref?: Ref<T>;
}

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * https://react-spectrum.adobe.com/react-aria/Menu.html
 */
const Menu = <T extends object>({ className, ref, ...props }: MenuProps<T>) => {
	return <AriaMenu {...props} ref={ref} className={menu({ className })} />;
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
						<span className={styles.content}>{children}</span>
						{selectionMode === 'single' && isSelected && <Icon name="check-circle" size="small" />}
						{hasSubmenu && <Icon name="chevron-right" size="small" />}
					</>
				),
			)}
		</AriaMenuItem>
	);
};

export { Menu, MenuItem, MenuTrigger, SubmenuTrigger };
export type { MenuProps, MenuItemProps, MenuTriggerProps, SubmenuTriggerProps };
