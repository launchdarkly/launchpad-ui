import type { FocusEvent, FormEvent, ReactNode } from 'react';

import cx from 'clsx';

import './styles/Form.css';

type FormProps = {
  id?: string;
  name?: string;
  action?: string;
  className?: string;
  inline?: boolean;
  method?: string;
  // Increases margin between form fields to make room for error messages.
  // This prevents the form from shifting when rendering a field error.
  // This may be desired when the form contains external links that will
  // shift while clicking if the form shifts from validation.
  hasIncreasedErrorMargin?: boolean;
  onBlurCapture?(e: FocusEvent): void;
  onSubmit?(e: FormEvent<EventTarget>): void;
  ariaLabel?: string;
  children: ReactNode;
};

const Form = (props: FormProps) => {
  const { id, name, className, inline, children, ariaLabel, hasIncreasedErrorMargin, ...rest } =
    props;
  const classes = cx('Form', className, {
    'Form--inline': inline,
    'Form--increasedErrorMargin': !!hasIncreasedErrorMargin,
  });

  return (
    <form id={id} name={name} aria-label={ariaLabel} {...rest} className={classes}>
      {children}
    </form>
  );
};

export { Form };
export type { FormProps };
