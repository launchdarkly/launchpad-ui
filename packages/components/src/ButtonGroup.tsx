import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { GroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	ButtonContext,
	Group,
	Provider,
	ToggleButtonContext,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ButtonGroup.module.css';

const buttonGroup = cva(styles.base, {
	variants: {
		spacing: {
			basic: styles.basic,
			compact: styles.compact,
			large: styles.large,
		},
	},
	defaultVariants: {
		spacing: 'basic',
	},
});

interface ButtonGroupProps extends GroupProps, VariantProps<typeof buttonGroup> {}

const _ButtonGroup = (
	{ spacing = 'basic', ...props }: ButtonGroupProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<Group
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonGroup({ ...renderProps, spacing, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isDisabled }) => (
				<Provider
					values={[
						[ButtonContext, { isDisabled }],
						[ToggleButtonContext, { isDisabled }],
					]}
				>
					{children}
				</Provider>
			))}
		</Group>
	);
};

const ButtonGroup = forwardRef(_ButtonGroup);

export { ButtonGroup };
export type { ButtonGroupProps };
