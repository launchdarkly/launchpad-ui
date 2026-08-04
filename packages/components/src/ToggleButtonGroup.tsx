import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from 'react-aria-components/ToggleButtonGroup';
import { ToggleButtonGroup as AriaToggleButtonGroup } from 'react-aria-components/ToggleButtonGroup';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/ToggleButtonGroup.module.css';

const toggleButtonGroupStyles = cva(styles.group, {
	variants: {
		appearance: {
			default: styles.default,
			elevated: styles.elevated,
		},
	},
	defaultVariants: {
		appearance: 'default',
	},
});

interface ToggleButtonGroupVariants extends VariantProps<typeof toggleButtonGroupStyles> {}

interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps, ToggleButtonGroupVariants {
	ref?: Ref<HTMLDivElement>;
}

const ToggleButtonGroupContext = createContext<ContextValue<ToggleButtonGroupProps, HTMLDivElement>>(null);

/**
 * A toggle button group allows a user to toggle multiple options, with single or multiple selection.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html
 */
const ToggleButtonGroup = ({ ref, ...props }: ToggleButtonGroupProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ToggleButtonGroupContext);
	const { appearance = 'default' } = mergedProps;

	return (
		<AriaToggleButtonGroup
			{...mergedProps}
			ref={mergedRef}
			data-appearance={appearance}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				toggleButtonGroupStyles({ ...renderProps, appearance, className }),
			)}
		/>
	);
};

export { ToggleButtonGroup, ToggleButtonGroupContext, toggleButtonGroupStyles };
export type { ToggleButtonGroupProps, ToggleButtonGroupVariants };
