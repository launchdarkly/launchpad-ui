import type { InlineVariants } from './styles/InlineEdit.css';
import type { ButtonProps } from '@launchpad-ui/button';
import type { ComponentProps, Dispatch, KeyboardEventHandler, SetStateAction } from 'react';

import { Button, ButtonGroup, IconButton } from '@launchpad-ui/button';
import { TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { Slot } from '@radix-ui/react-slot';
import { focusSafely } from '@react-aria/focus';
import { useUpdateEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { useRef, useState } from 'react';

import { container, cancelButton, inline, buttonText } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants &
  Pick<ComponentProps<'input'>, 'defaultValue'> & {
    'data-test-id'?: string;
    onSave: Dispatch<SetStateAction<string>>;
    hideEdit?: boolean;
  };

const InlineEdit = ({
  'data-test-id': testId = 'inline-edit',
  layout = 'horizontal',
  children,
  defaultValue,
  onSave,
  hideEdit = false,
}: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const editRef = useRef<HTMLButtonElement>(null);

  useUpdateEffect(() => {
    isEditing
      ? inputRef.current && focusSafely(inputRef.current)
      : editRef.current && focusSafely(editRef.current);
  }, [isEditing]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    onSave(inputRef.current?.value || '');
    setEditing(false);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSave();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      handleCancel();
    }
  };

  const ReadComponent = hideEdit ? Button : Slot;
  const buttonProps: Partial<ButtonProps> = hideEdit
    ? {
        kind: 'minimal',
        'aria-label': 'edit',
        className: buttonText,
      }
    : {};

  return isEditing ? (
    <div className={cx(container, inline({ layout }))} data-test-id={testId}>
      <TextField defaultValue={defaultValue} ref={inputRef} onKeyDown={handleKeyDown} />
      <ButtonGroup spacing="compact">
        <IconButton
          kind="primary"
          icon={<Icon name="check" />}
          aria-label="save"
          onClick={handleSave}
        />
        <IconButton
          kind="default"
          icon={<Icon name="close" />}
          aria-label="cancel"
          className={cancelButton}
          onClick={handleCancel}
        />
      </ButtonGroup>
    </div>
  ) : (
    <div className={cx(container)} data-test-id={testId}>
      <ReadComponent
        ref={editRef}
        onClick={hideEdit ? handleEdit : () => undefined}
        {...buttonProps}
      >
        {children}
      </ReadComponent>
      {!hideEdit && (
        <IconButton
          ref={editRef}
          icon={<Icon name="edit" />}
          aria-label="edit"
          size="small"
          onClick={handleEdit}
        />
      )}
    </div>
  );
};

export { InlineEdit };
export type { InlineEditProps };
