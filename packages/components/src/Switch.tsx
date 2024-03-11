import type { ForwardedRef, ReactNode } from 'react';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Switch as AriaSwitch, composeRenderProps } from 'react-aria-components';

import styles from './styles/Switch.module.css';

const _switch = cva(styles.switch);

type SwitchProps = Omit<AriaSwitchProps, 'children'> & {
	children?: ReactNode;
};

const _Switch = ({ children, ...props }: SwitchProps, ref: ForwardedRef<HTMLLabelElement>) => {
	return (
		<AriaSwitch
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				_switch({ ...renderProps, className }),
			)}
		>
			{({ isSelected }) => (
				<>
					<div className={styles.track}>
						{isSelected && <div className={styles.label}>On</div>}
						<span className={styles.handle} />
						{!isSelected && <div className={styles.label}>Off</div>}
					</div>
					{children}
				</>
			)}
		</AriaSwitch>
	);
};

/**
 * A switch allows a user to turn a setting on or off.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = forwardRef(_Switch);

export { Switch };
export type { SwitchProps };
