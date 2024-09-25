import type { ComponentProps, ReactElement } from 'react';
import type { IconProps } from './Icon';

import { cx } from 'class-variance-authority';
import { cloneElement } from 'react';

import styles from './styles/Icon.module.css';

type FlairIconProps = Omit<ComponentProps<'div'>, 'className'> & {
	'data-test-id'?: string;
	gradient?: 'purpleToBlue' | 'yellowToCyan' | 'pinkToPurple' | 'cyanToBlue' | 'cyanToPurple';
	isRounded?: boolean;
	children: ReactElement<IconProps>;
};

const FlairIcon = ({
	children,
	'data-test-id': testId = 'flair-icon',
	isRounded,
	gradient = 'purpleToBlue',
	...props
}: FlairIconProps) => {
	const getIconSize = () => {
		let iconSize: IconProps['size'] = children.props.size;

		if (!iconSize) {
			iconSize = 'medium';
		}

		return iconSize;
	};

	const icon = cloneElement(children as ReactElement<IconProps>, {
		className: styles.flairIcon,
		size: getIconSize(),
	});

	const classes = cx(styles.flairIconContainer, styles[gradient], isRounded && styles.isRounded);

	return (
		<div className={classes} {...props} data-test-id={testId}>
			{icon}
		</div>
	);
};

export { FlairIcon };
export type { FlairIconProps };
