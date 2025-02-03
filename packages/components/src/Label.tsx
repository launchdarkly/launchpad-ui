import type { Ref } from 'react';
import type { LabelProps as AriaLabelProps } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { Label as AriaLabel, useSlottedContext } from 'react-aria-components';

import { LabelContext } from './Form';
import styles from './styles/Label.module.css';

const label = cva(styles.label);

interface LabelProps extends AriaLabelProps {
	ref?: Ref<HTMLLabelElement>;
}

const Label = ({ className, ref, ...props }: LabelProps) => {
	const labelProps = useSlottedContext(LabelContext);

	return (
		<AriaLabel
			{...props}
			{...labelProps}
			ref={ref}
			className={cx(label({ className }), labelProps?.className)}
		/>
	);
};

export { Label };
export type { LabelProps };
