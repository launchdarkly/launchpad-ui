import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	RadioProps as AriaRadioProps,
	ContextValue,
	RadioRenderProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import styles from './styles/Radio.module.css';
import { useLPContextProps } from './utils';

const radioStyles = cva(styles.radio, {
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
const radioIconStyles = cva(styles.circle);

interface RadioProps extends AriaRadioProps, VariantProps<typeof radioStyles> {
	ref?: Ref<HTMLLabelElement>;
}

const RadioContext = createContext<ContextValue<RadioProps, HTMLLabelElement>>(null);

const RadioIcon = ({ isSelected }: Partial<RadioRenderProps>) => (
	<div className={radioIconStyles()}>
		{isSelected ? (
			<svg aria-hidden="true" className={styles.icon} viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					clipPath="evenodd"
					d="M6.852 5.228a3 3 0 1 1 2.296 5.544 3 3 0 0 1-2.296-5.544Z"
				/>
			</svg>
		) : null}
	</div>
);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const Radio = ({ ref, ...props }: RadioProps) => {
	[props, ref] = useLPContextProps(props, ref, RadioContext);
	const contextProps = useContext(RadioContext) as any;
	const { variant = 'default' } = { ...contextProps, ...props };

	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radioStyles({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<RadioIcon isSelected={isSelected} />
					{children}
				</>
			))}
		</AriaRadio>
	);
};

export { Radio, RadioContext, RadioIcon, radioIconStyles, radioStyles };
export type { RadioProps };
