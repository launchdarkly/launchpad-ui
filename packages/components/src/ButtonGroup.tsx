import type { Ref } from 'react';
import { createContext } from 'react';
import { ButtonContext } from 'react-aria-components/Button';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { GroupProps } from 'react-aria-components/Group';
import { Group } from 'react-aria-components/Group';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { ToggleButtonContext } from 'react-aria-components/ToggleButton';
import type { Orientation } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/ButtonGroup.module.css';

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
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
	[props, ref] = useLPContextProps(props, ref, ButtonGroupContext);
	const { spacing = 'basic', orientation = 'horizontal' } = props;

	return (
		<Group
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonGroupStyles({ ...renderProps, spacing, orientation, className }),
			)}
			data-orientation={orientation ?? undefined}
			data-spacing={spacing}
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
