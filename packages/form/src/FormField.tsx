import { cx } from 'classix';

import { FieldError } from './FieldError';
import { FormGroup } from './FormGroup';
import { FormHint } from './FormHint';
import { RequiredAsterisk } from './RequiredAsterisk';
import './styles/FormField.css';

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
}: FormFieldProps) => {
  const handleBlur = () => {
    onBlur && onBlur(name);
  };

  return (
    <FormGroup
      className={cx('FormField', className)}
      name={name}
      ignoreValidation={ignoreValidation}
      isInvalid={isInvalid}
      onBlur={handleBlur}
      data-test-id={testId}
    >
      {label && (
        <label htmlFor={htmlFor}>
          {label}
          {isRequired && <RequiredAsterisk />}
        </label>
      )}
      {hint && <FormHint className="FormField-hint">{hint}</FormHint>}
      {children}
      <FieldError className="FormField-errorMessage" name={name} errorMessage={errorMessage} />
    </FormGroup>
  );
};

export type { FormFieldProps };
export { FormField };
