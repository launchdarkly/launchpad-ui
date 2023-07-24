import type { InlineVariants } from './styles/InlineEdit.css';
import type { TextAreaProps, TextFieldProps } from '@launchpad-ui/form';
import type {
  ComponentProps,
  Dispatch,
  KeyboardEventHandler,
  ReactElement,
  SetStateAction,
} from 'react';

import { ButtonGroup, IconButton } from '@launchpad-ui/button';
import { TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { focusSafely } from '@react-aria/focus';
import { useUpdateEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { cloneElement, useRef, useState } from 'react';

import { container, cancelButton, inline, readButton } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants &
  Pick<ComponentProps<'input'>, 'defaultValue'> & {
    'data-test-id'?: string;
    onSave: Dispatch<SetStateAction<string>>;
    hideEdit?: boolean;
    input?: ReactElement<TextFieldProps | TextAreaProps>;
  };

const InlineEdit = ({
  'data-test-id': testId = 'inline-edit',
  layout = 'horizontal',
  children,
  defaultValue,
  onSave,
  hideEdit = false,
  input = <TextField />,
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

  const { buttonProps } = useButton(
    {
      'aria-label': 'edit',
      elementType: 'div',
      onPress: handleEdit,
    },
    editRef
  );

  const renderReadContent = hideEdit ? (
    <span ref={editRef} {...buttonProps} className={readButton}>
      {children}
    </span>
  ) : (
    <>
      {children}
      <IconButton
        ref={editRef}
        icon={<Icon name="edit" />}
        aria-label="edit"
        size="small"
        onClick={handleEdit}
      />
    </>
  );

  const renderInput = cloneElement(input, {
    ref: inputRef,
    defaultValue,
    onKeyDown: handleKeyDown,
  });

  return isEditing ? (
    <div className={cx(container, inline({ layout }))} data-test-id={testId}>
      {renderInput}
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
    <div className={cx(!hideEdit && container)} data-test-id={testId}>
      {renderReadContent}
    </div>
  );
};

export { InlineEdit };
export type { InlineEditProps };
