import type { ForwardedRef } from 'react';
import type { RadioProps, RadioRenderProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import styles from './styles/Radio.module.css';

const radio = cva(styles.radio);
const circle = cva(styles.circle);

const RadioInner = ({ isSelected }: Partial<RadioRenderProps>) => (
	<div className={circle()}>
		{isSelected ? <Icon name="circle" className={styles.icon} /> : null}
	</div>
);

const _Radio = (props: RadioProps, ref: ForwardedRef<HTMLLabelElement>) => {
	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radio({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<RadioInner isSelected={isSelected} />
					{children}
				</>
			))}
		</AriaRadio>
	);
};

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const Radio = forwardRef(_Radio);

export { Radio, RadioInner, radio };
export type { RadioProps };
