import type { Ref } from 'react';
import type { FormProps as AriaFormProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Form as AriaForm } from 'react-aria-components';

import styles from './styles/Form.module.css';

const form = cva(styles.form);

interface FormProps extends AriaFormProps {
	ref?: Ref<HTMLFormElement>;
}

/**
 * A form is a group of inputs that allows users to submit data to a server, with support for providing field validation errors.
 *
 * https://react-spectrum.adobe.com/react-aria/Form.html
 */
const Form = ({ ref, className, ...props }: FormProps) => {
	return <AriaForm {...props} ref={ref} className={form({ className })} />;
};

export { Form };
export type { FormProps };
