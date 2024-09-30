import type { BoxProps } from '@launchpad-ui/box';

import { Box } from '@launchpad-ui/box';

interface FlairIconProps extends BoxProps {}

const FlairIcon = ({ children, ...props }: FlairIconProps) => {
	return (
		<Box
			background="$purple-blue"
			borderRadius="50%"
			color="$white.950"
			display="inline-flex"
			padding="$400"
			{...props}
		>
			{children}
		</Box>
	);
};

export { FlairIcon };
export type { FlairIconProps };
