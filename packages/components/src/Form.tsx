import type { Orientation } from '@react-types/shared';
import type { Ref } from 'react';
import type { FormProps as AriaFormProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Form as AriaForm, Provider } from 'react-aria-components';

import { LabelContext } from './Label';
import styles from './styles/Form.module.css';
import { useLPContextProps } from './utils';

const form = cva(styles.form);

interface FormProps extends AriaFormProps {
	ref?: Ref<HTMLFormElement>;
	orientation?: Orientation | null;
}

const FormContext = createContext<ContextValue<FormProps, HTMLFormElement>>(null);

/**
 * A form is a group of inputs that allows users to submit data to a server, with support for providing field validation errors.
 *
 * https://react-spectrum.adobe.com/react-aria/Form.html
 */
const Form = ({ ref, ...props }: FormProps) => {
	[props, ref] = useLPContextProps(props, ref, FormContext);
	const { className, orientation = 'vertical', children } = props;

	return (
		<AriaForm
			{...props}
			ref={ref}
			className={form({ className })}
			data-orientation={orientation || undefined}
		>
			<Provider values={[[LabelContext, { className: styles.label }]]}>{children}</Provider>
		</AriaForm>
	);
};

export { Form, FormContext };
export type { FormProps };
