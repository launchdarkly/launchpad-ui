import type { Ref } from 'react';
import type { SwitchProps as AriaSwitchProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Switch as AriaSwitch, composeRenderProps } from 'react-aria-components';

import styles from './styles/Switch.module.css';
import { useLPContextProps } from './utils';

const switchStyles = cva(styles.switch);

interface SwitchProps extends AriaSwitchProps {
	ref?: Ref<HTMLLabelElement>;
}

const SwitchContext = createContext<ContextValue<SwitchProps, HTMLLabelElement>>(null);

/**
 * A switch allows a user to turn a setting on or off.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = ({ ref, ...props }: SwitchProps) => {
	[props, ref] = useLPContextProps(props, ref, SwitchContext);
	return (
		<AriaSwitch
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				switchStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<div className={styles.track}>
						{isSelected && <div className={styles.label}>On</div>}
						<span className={styles.handle} />
						{!isSelected && <div className={styles.label}>Off</div>}
					</div>
					{children}
				</>
			))}
		</AriaSwitch>
	);
};

export { Switch, SwitchContext, switchStyles };
export type { SwitchProps };
