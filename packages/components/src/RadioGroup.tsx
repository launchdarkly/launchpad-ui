import type { ForwardedRef } from 'react';
import type { RadioGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { RadioGroup as AriaRadioGroup, composeRenderProps } from 'react-aria-components';

import styles from './styles/RadioGroup.module.css';

const group = cva(styles.group);

const _RadioGroup = (props: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaRadioGroup
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        group({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioGroup = forwardRef(_RadioGroup);

export { RadioGroup };
export type { RadioGroupProps };
