import type { BoxProps } from '@launchpad-ui/box';

import { Box } from '@launchpad-ui/box';
import { cva, cx } from 'class-variance-authority';

import styles from './styles/FlairIcon.module.css';

const flair = cva(styles.flair);

interface FlairIconProps extends BoxProps {}

const FlairIcon = ({ children, className, ...props }: FlairIconProps) => {
	return (
		<Box
			background="$purple-blue"
			borderRadius="50%"
			color="$white.950"
			display="inline-flex"
			padding="$400"
			className={cx(flair(), className)}
			{...props}
		>
			{children}
		</Box>
	);
};

export { FlairIcon };
export type { FlairIconProps };
