import type { TextareaHTMLAttributes } from 'react';

import cx from 'clsx';
import { forwardRef } from 'react';

import './styles/FormInput.css';
import { createFieldErrorId } from './utils';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.key === 'ArrowRight' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowLeft'
    ) {
      e.stopPropagation();
    }
    if (e.key === 'Escape') {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  return (
    <textarea
      {...props}
      className={cx('FormInput', className)}
      ref={ref}
      aria-describedby={props['aria-describedby'] || createFieldErrorId(props.id)}
      onKeyDown={onKeyDown}
    />
  );
});

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
