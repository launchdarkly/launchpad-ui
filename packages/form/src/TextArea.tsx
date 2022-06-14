/* eslint-disable react-prefer-function-component/react-prefer-function-component */
import cx from 'clsx';
import { Component, createRef, RefObject, TextareaHTMLAttributes } from 'react';

import './styles/FormInput.css';
import { createFieldErrorId } from './utils';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

class TextArea extends Component<TextAreaProps> {
  textareaRef: RefObject<HTMLTextAreaElement>;

  constructor(props: TextAreaProps) {
    super(props);
    this.textareaRef = createRef();
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <textarea
        {...props}
        className={cx('FormInput', className)}
        ref={this.textareaRef}
        aria-describedby={props['aria-describedby'] || createFieldErrorId(props.id)}
        onKeyDown={onKeyDown}
      />
    );
  }

  focus() {
    this.textareaRef.current?.focus();
  }
}

function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
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
}

export { TextArea };
export type { TextAreaProps };
