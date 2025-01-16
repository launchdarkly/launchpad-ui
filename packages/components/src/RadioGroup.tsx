import type { Ref } from 'react';
import type { RadioGroupProps as AriaRadioGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { RadioGroup as AriaRadioGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/RadioGroup.module.css';

const group = cva(styles.group);

interface RadioGroupProps extends AriaRadioGroupProps {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioGroup = ({ ref, ...props }: RadioGroupProps) => {
	return (
		<AriaRadioGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				group({ ...renderProps, className }),
			)}
		/>
	);
};

export { RadioGroup };
export type { RadioGroupProps };
