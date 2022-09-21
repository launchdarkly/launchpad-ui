import type { FormHTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Form.css';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  inline?: boolean;
  // Increases margin between form fields to make room for error messages.
  // This prevents the form from shifting when rendering a field error.
  // This may be desired when the form contains external links that will
  // shift while clicking if the form shifts from validation.
  hasIncreasedErrorMargin?: boolean;
  'data-test-id'?: string;
};

const Form = (props: FormProps) => {
  const {
    className,
    inline,
    children,
    hasIncreasedErrorMargin,
    'data-test-id': testId = 'form',
    ...rest
  } = props;

  const classes = cx(
    'Form',
    className,
    inline && 'Form--inline',
    !!hasIncreasedErrorMargin && 'Form--increasedErrorMargin'
  );

  return (
    <form {...rest} data-test-id={testId} className={classes}>
      {children}
    </form>
  );
};

export { Form };
export type { FormProps };
