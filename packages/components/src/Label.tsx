import type { RefObject } from 'react';
import type { LabelProps as AriaLabelProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';

const label = cva(styles.label);

interface LabelProps extends AriaLabelProps {
	ref?: RefObject<HTMLLabelElement | null>;
}

const Label = ({ className, ref, ...props }: LabelProps) => {
	return <AriaLabel {...props} ref={ref} className={label({ className })} />;
};

export { Label };
export type { LabelProps };
