import type { ComponentPropsWithRef } from 'react';

import { forwardRef } from 'react';

import styles from './styles/Menu.module.css';

type MenuItemListProps = Omit<ComponentPropsWithRef<'div'>, 'className'>;

const MenuItemList = forwardRef<HTMLDivElement, MenuItemListProps>(({ children, ...rest }, ref) => (
	<div {...rest} ref={ref} data-test-id='menu-item-list' className={styles['Menu-item-list']}>
		{children}
	</div>
));

MenuItemList.displayName = 'MenuItemList';

export { MenuItemList };
export type { MenuItemListProps };
