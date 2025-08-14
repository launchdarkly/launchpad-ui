import type { ComponentPropsWithRef } from 'react';
import type { MenuProps } from './Menu';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Menu.module.css';

type MenuBaseProps = ComponentPropsWithRef<'div'> & {
	isVirtual?: boolean;
	size?: MenuProps<string>['size'];
};

const MenuBase = forwardRef<HTMLDivElement, MenuBaseProps>(
	({ children, size, isVirtual, ...props }, ref) => {
		const classes = cx(
			styles.Menu,
			isVirtual && styles['Menu--isVirtual'],
			size && styles[`MenuSize--${size}`],
		);

		return (
			<div
				{...addLaunchPadAttribution('Menu')}
				{...props}
				role="menu"
				className={classes}
				ref={ref}
			>
				{children}
			</div>
		);
	},
);

MenuBase.displayName = 'MenuBase';

export { MenuBase };
export type { MenuBaseProps };
