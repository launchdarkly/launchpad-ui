import type { ForwardedRef } from 'react';
import type { RadioProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import styles from './styles/Radio.module.css';

const radio = cva(styles.radio);
const circle = cva(styles.circle);

const _Radio = ({ children, ...props }: RadioProps, ref: ForwardedRef<HTMLLabelElement>) => {
	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radio({ ...renderProps, className }),
			)}
		>
			{({ isSelected }) => (
				<>
					<div className={circle()}>
						{isSelected ? <Icon name="circle" className={styles.icon} /> : null}
					</div>
					{children}
				</>
			)}
		</AriaRadio>
	);
};

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const Radio = forwardRef(_Radio);

export { Radio };
export type { RadioProps };
