import type { ReactNode, RefObject } from 'react';
import type { SwitchProps as AriaSwitchProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Switch as AriaSwitch, composeRenderProps } from 'react-aria-components';

import styles from './styles/Switch.module.css';

const _switch = cva(styles.switch);

interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
	children?: ReactNode;
	ref?: RefObject<HTMLLabelElement | null>;
}

/**
 * A switch allows a user to turn a setting on or off.
 *
 * https://react-spectrum.adobe.com/react-aria/Switch.html
 */
const Switch = ({ ref, ...props }: SwitchProps) => {
	return (
		<AriaSwitch
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				_switch({ ...renderProps, className }),
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

export { Switch };
export type { SwitchProps };
