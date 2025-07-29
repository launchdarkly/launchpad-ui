import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { RadioGroupProps as AriaRadioGroupProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { RadioGroup as AriaRadioGroup, composeRenderProps, Provider } from 'react-aria-components';

import { RadioContext } from './Radio';
import styles from './styles/RadioGroup.module.css';
import { useLPContextProps } from './utils';

const radioGroupStyles = cva(styles.group, {
	variants: {
		variant: {
			default: '',
			card: styles.card,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface RadioGroupProps extends AriaRadioGroupProps, VariantProps<typeof radioGroupStyles> {
	ref?: Ref<HTMLDivElement>;
}

const RadioGroupContext = createContext<ContextValue<RadioGroupProps, HTMLDivElement>>(null);

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioGroup = ({ ref, ...props }: RadioGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, RadioGroupContext);
	const { variant = 'default' } = props;

	return (
		<AriaRadioGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radioGroupStyles({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(props.children, (children) => (
				<Provider values={[[RadioContext, { variant } as any]]}>{children}</Provider>
			))}
		</AriaRadioGroup>
	);
};

export { RadioGroup, RadioGroupContext, radioGroupStyles };
export type { RadioGroupProps };
