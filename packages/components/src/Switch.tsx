import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components/Switch';
import { Switch as AriaSwitch } from 'react-aria-components/Switch';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/Switch.module.css';

const switchStyles = cva(styles.switch, {
	variants: {
		variant: {
			default: '',
			primary: styles.primary,
		},
		compact: {
			true: styles.compact,
		},
		labelPosition: {
			start: styles.labelStart,
			end: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		labelPosition: 'end',
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
 * Provide an accessible name via `children` (visible label) or `aria-label` (visually hidden label).
 * A visible label renders after the track by default; pass `labelPosition="start"` to render it
 * before the track while keeping it part of the switch's label and click target.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = ({ ref, ...props }: SwitchProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, SwitchContext);
	const { switchLabels, variant, labelPosition } = mergedProps;
	const hideLabels = switchLabels === false ? true : undefined;
	return (
		<AriaSwitch
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				switchStyles({ ...renderProps, variant, labelPosition, compact: hideLabels, className }),
			)}
		>
			{composeRenderProps(mergedProps.children, (children, { isSelected }) => (
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
