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
		hideLabels: {
			true: styles.compact,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface SwitchProps extends AriaSwitchProps {
	ref?: Ref<HTMLLabelElement>;
	/** Hide the On/Off labels inside the track. */
	hideLabels?: boolean;
	/** Color variant for the selected state. */
	variant?: 'default' | 'primary';
}

const SwitchContext = createContext<ContextValue<SwitchProps, HTMLLabelElement>>(null);

/**
 * A switch allows a user to turn a setting on or off.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = ({ ref, hideLabels, variant, ...props }: SwitchProps) => {
	[props, ref] = useLPContextProps(props, ref, SwitchContext);
	return (
		<AriaSwitch
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				switchStyles({ ...renderProps, variant, hideLabels, className }),
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
