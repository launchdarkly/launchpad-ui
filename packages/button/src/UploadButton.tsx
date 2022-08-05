import type { ButtonProps } from '@launchpad-ui/core';
import type { ChangeEventHandler, KeyboardEvent } from 'react';

import { Button } from '@launchpad-ui/core';
import cx from 'clsx';
import { useRef } from 'react';

import './styles/UploadButton.css';

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget;
};

type UploadButtonProps = ButtonProps & {
  onSelect(file?: File | null): void;
  id: string;
  maxSize: number;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  accept?: string;
};

const UploadButton = ({
  id,
  className,
  children,
  disabled,
  accept,
  maxSize,
  onSelect,
  ...rest
}: UploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = cx('UploadButton', className);

  const handleKeyDown = (event: KeyboardEvent<Element>) => {
    const actionKeys = ['Spacebar', ' ', 'Enter'];

    if (actionKeys.includes(event.key)) {
      event.preventDefault();
      inputRef.current?.click();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let file;
    if (event) {
      const e = event as unknown as HTMLInputEvent;
      file = e.target.files?.[0];
    }

    if (file && file.size > maxSize) {
      return;
    }

    event?.persist();
    onSelect(file);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <span className={classes}>
      <input
        ref={inputRef}
        className="UploadButton-input"
        id={id}
        type="file"
        onChange={handleChange}
        disabled={disabled}
        accept={accept}
      />
      <label htmlFor={id} className="UploadButton-label">
        <Button
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          role="button"
          onKeyDown={handleKeyDown}
          onClick={() => inputRef.current?.click()}
          {...rest}
        >
          {children}
        </Button>
      </label>
    </span>
  );
};

export { UploadButton };
export type { UploadButtonProps };
