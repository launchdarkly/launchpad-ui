import type { KeyboardEvent, TextareaHTMLAttributes } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/FormInput.css';
import { createFieldErrorId } from './utils';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  'data-test-id'?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, 'data-test-id': testId = 'text-area', ...props }, ref) => {
    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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
        data-test-id={testId}
        aria-describedby={props['aria-describedby'] || createFieldErrorId(props.id)}
        onKeyDown={onKeyDown}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
