import type { SeparatorProps } from '@react-aria/separator';
import type { RefObject } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { useSeparator } from '@react-aria/separator';

import styles from './styles/Menu.module.css';

type MenuDividerProps = SeparatorProps & {
	innerRef?: RefObject<HTMLDivElement>;
	'data-test-id'?: string;
};

const MenuDivider = ({
	elementType = 'div',
	orientation,
	innerRef,
	'data-test-id': testId = 'menu-divider',
}: MenuDividerProps) => {
	const { separatorProps } = useSeparator({
		orientation,
		elementType,
	});

	return (
		<div
			{...addLaunchPadAttribution('MenuDivider')}
			{...separatorProps}
			data-test-id={testId}
			ref={innerRef}
			className={styles['Menu-divider']}
		/>
	);
};

export { MenuDivider };
export type { MenuDividerProps };
