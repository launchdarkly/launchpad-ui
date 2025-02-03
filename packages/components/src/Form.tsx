import type { Orientation } from '@react-types/shared';
import type { Ref } from 'react';
import type { FormProps as AriaFormProps, ContextValue } from 'react-aria-components';
import type { LabelProps } from './Label';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Form as AriaForm, Provider } from 'react-aria-components';

import styles from './styles/Form.module.css';

const form = cva(styles.form);

const LabelContext = createContext<ContextValue<LabelProps, HTMLLabelElement>>(null);

interface FormProps extends AriaFormProps {
	ref?: Ref<HTMLFormElement>;
	orientation?: Orientation | null;
}

/**
 * A form is a group of inputs that allows users to submit data to a server, with support for providing field validation errors.
 *
 * https://react-spectrum.adobe.com/react-aria/Form.html
 */
const Form = ({ ref, className, orientation = 'vertical', children, ...props }: FormProps) => {
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

export { Form, LabelContext };
export type { FormProps };
