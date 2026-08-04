import type { Ref } from 'react';
import { createContext } from 'react';
import type { FormProps as AriaFormProps } from 'react-aria-components/Form';
import { Form as AriaForm } from 'react-aria-components/Form';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import type { Orientation } from '@react-types/shared';
import { cva } from 'class-variance-authority';

import { LabelContext } from './Label';
import { useLPContextProps } from './utils';

import styles from './styles/Form.module.css';

const formStyles = cva(styles.form);

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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, FormContext);
	const { className, orientation = 'vertical', children } = mergedProps;

	return (
		<AriaForm
			{...mergedProps}
			ref={mergedRef}
			className={formStyles({ className })}
			data-orientation={orientation || undefined}
		>
			<Provider values={[[LabelContext, { className: styles.label }]]}>{children}</Provider>
		</AriaForm>
	);
};

export { Form, FormContext, formStyles };
export type { FormProps };
