import type { ForwardedRef } from 'react';
import type { DialogProps, DialogTriggerProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Dialog as AriaDialog, DialogTrigger } from 'react-aria-components';

import styles from './styles/Dialog.module.css';

const dialog = cva(styles.dialog);

const _Dialog = ({ className, ...props }: DialogProps, ref: ForwardedRef<HTMLElement>) => {
  return <AriaDialog {...props} ref={ref} className={dialog({ className })} />;
};

/**
 * A dialog is an overlay shown above other content in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Dialog.html
 */
const Dialog = forwardRef(_Dialog);

export { Dialog, DialogTrigger };
export type { DialogProps, DialogTriggerProps };
