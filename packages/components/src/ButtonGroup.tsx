import type { Orientation } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ContextValue, GroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	ButtonContext,
	composeRenderProps,
	Group,
	Provider,
	ToggleButtonContext,
} from 'react-aria-components';

import styles from './styles/ButtonGroup.module.css';
import { useLPContextProps } from './utils';

const buttonGroupStyles = cva(styles.base, {
	variants: {
		spacing: {
			basic: styles.basic,
			compact: styles.compact,
			large: styles.large,
		},
		orientation: {
			horizontal: styles.horizontal,
			vertical: styles.vertical,
		},
	},
	defaultVariants: {
		spacing: 'basic',
	},
});

interface ButtonGroupProps extends GroupProps, VariantProps<typeof buttonGroupStyles> {
	orientation?: Orientation | null;
	ref?: Ref<HTMLDivElement>;
}

const ButtonGroupContext = createContext<ContextValue<ButtonGroupProps, HTMLDivElement>>(null);

const ButtonGroup = ({ ref, ...props }: ButtonGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, ButtonGroupContext, 'ButtonGroup');
	const { spacing = 'basic', orientation = 'horizontal' } = props;

	return (
		<Group
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonGroupStyles({ ...renderProps, spacing, orientation, className }),
			)}
			data-orientation={orientation ?? undefined}
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

export { ButtonGroup, ButtonGroupContext, buttonGroupStyles };
export type { ButtonGroupProps };
