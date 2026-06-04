import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components/Switch';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Switch as AriaSwitch } from 'react-aria-components/Switch';

import styles from './styles/Switch.module.css';
import { useLPContextProps } from './utils';

const switchStyles = cva(styles.switch, {
	variants: {
		variant: {
			default: '',
			primary: styles.primary,
		},
		compact: {
			true: styles.compact,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface SwitchProps extends AriaSwitchProps, Omit<VariantProps<typeof switchStyles>, 'compact'> {
	ref?: Ref<HTMLLabelElement>;
	/** Pass `false` to hide On/Off labels and render a compact track. */
	switchLabels?: false;
}

const SwitchContext = createContext<ContextValue<SwitchProps, HTMLLabelElement>>(null);

/**
 * A switch allows a user to turn a setting on or off.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = ({ ref, ...props }: SwitchProps) => {
	[props, ref] = useLPContextProps(props, ref, SwitchContext);
	const { switchLabels, variant } = props;
	const hideLabels = switchLabels === false ? true : undefined;
	return (
		<AriaSwitch
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				switchStyles({ ...renderProps, variant, compact: hideLabels, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<div className={styles.track}>
						{!hideLabels && isSelected && <div className={styles.label}>On</div>}
						<span className={styles.handle} />
						{!hideLabels && !isSelected && <div className={styles.label}>Off</div>}
					</div>
					{children}
				</>
			))}
		</AriaSwitch>
	);
};

export { Switch, SwitchContext, switchStyles };
export type { SwitchProps };
