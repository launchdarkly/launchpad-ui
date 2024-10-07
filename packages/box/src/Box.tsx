import type { HTMLAttributes } from 'react';
import type { Sprinkles } from './styles/rainbow-sprinkles.css';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'class-variance-authority';

import { rainbowSprinkles } from './styles/rainbow-sprinkles.css';

interface BoxProps extends Sprinkles, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	asChild?: boolean;
}

const Box = ({ asChild, children, className, ...props }: BoxProps) => {
	const Component = asChild ? Slot : 'div';
	const { className: classes, style, otherProps } = rainbowSprinkles(props);

	return (
		<Component className={cx(className, classes)} style={style} {...otherProps}>
			{children}
		</Component>
	);
};

export { Box };
export type { BoxProps };
