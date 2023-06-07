import type { FieldErrorProps } from './FieldError';
import type { FormHintProps } from './FormHint';
import type { LabelProps } from './Label';

import { cx } from 'classix';

import { FieldError } from './FieldError';
import { FormGroup } from './FormGroup';
import { FormHint } from './FormHint';
import { Label } from './Label';
import styles from './styles/Form.module.css';

type FormFieldProps = {
  isRequired: boolean;
  label?: string;
  name: string;
  htmlFor: string;
  hint?: string;
  errorMessage?: string;
  ignoreValidation?: boolean;
  isInvalid?: boolean;
  children: JSX.Element;
  className?: string;
  onBlur?: (field: string) => void;
  'data-test-id'?: string;
  LabelProps?: Partial<LabelProps>;
  FormHintProps?: Partial<FormHintProps>;
  FieldErrorProps?: Partial<FieldErrorProps>;
};

const FormField = ({
  isRequired,
  label,
  name,
  htmlFor,
  hint,
  errorMessage,
  ignoreValidation,
  isInvalid,
  children,
  className,
  onBlur,
  'data-test-id': testId = 'form-field',
  LabelProps = {},
  FormHintProps = {},
  FieldErrorProps = {},
}: FormFieldProps) => {
  const handleBlur = () => {
    onBlur && onBlur(name);
  };

  return (
    <FormGroup
      className={cx(styles.field, className)}
      name={name}
      ignoreValidation={ignoreValidation}
      isInvalid={isInvalid}
      onBlur={handleBlur}
      data-test-id={testId}
    >
      {label && (
        <Label htmlFor={htmlFor} required={isRequired} {...LabelProps}>
          {label}
        </Label>
      )}
      {hint && (
        <FormHint className={styles.hint} {...FormHintProps}>
          {hint}
        </FormHint>
      )}
      {children}
      <FieldError
        className={styles.fieldErrorMessage}
        name={name}
        errorMessage={errorMessage}
        {...FieldErrorProps}
      />
    </FormGroup>
  );
};

export type { FormFieldProps };
export { FormField };
