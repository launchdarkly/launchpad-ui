import type { RefObject } from 'react';
import type { RadioProps as AriaRadioProps, RadioRenderProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import styles from './styles/Radio.module.css';

const radio = cva(styles.radio);
const circle = cva(styles.circle);

interface RadioProps extends AriaRadioProps {
	ref?: RefObject<HTMLLabelElement | null>;
}

const RadioInner = ({ isSelected }: Partial<RadioRenderProps>) => (
	<div className={circle()}>
		{isSelected ? <Icon name="circle" className={styles.icon} /> : null}
	</div>
);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const Radio = ({ ref, ...props }: RadioProps) => {
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

export { Radio, RadioInner, radio };
export type { RadioProps };
