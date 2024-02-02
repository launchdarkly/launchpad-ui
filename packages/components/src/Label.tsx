import type { ForwardedRef } from 'react';
import type { LabelProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';

const label = cva(styles.label);

const _Label = ({ className, ...props }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
  return <AriaLabel {...props} ref={ref} className={label({ className })} />;
};

const Label = forwardRef(_Label);

export { Label };
export type { LabelProps };
