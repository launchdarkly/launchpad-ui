import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';

import { DRAWER_LABELLED_BY } from './constants';

type DrawerHeaderProps = ComponentProps<'div'> & {
	closeable?: boolean;
	titleID?: string;
	titleClassName?: string;
	onClose?(): void;
	'data-test-id'?: string;
};

const DrawerHeader = ({
	className,
	children,
	titleID,
	titleClassName,
	'data-test-id': testId = 'drawer-header',
	...rest
}: DrawerHeaderProps) => {
	return (
		<div
			{...addLaunchPadAttribution('DrawerHeader')}
			data-test-id={testId}
			className={className}
			{...rest}
		>
			<h2 id={DRAWER_LABELLED_BY} className={titleClassName}>
				{children}
			</h2>
		</div>
	);
};

export { DrawerHeader };
export type { DrawerHeaderProps };
