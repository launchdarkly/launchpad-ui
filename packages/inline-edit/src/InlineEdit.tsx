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
import { mergeProps, useUpdateEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { cloneElement, useRef, useState } from 'react';

import { container, cancelButton, inline, readButton } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants &
  Pick<ComponentProps<'input'>, 'defaultValue'> & {
    'data-test-id'?: string;
    onSave: Dispatch<SetStateAction<string>>;
    hideEdit?: boolean;
    renderInput?: ReactElement<TextFieldProps | TextAreaProps>;
    isEditing?: boolean;
    onCancel?: () => void;
    onEdit?: () => void;
  };

const InlineEdit = ({
  'data-test-id': testId = 'inline-edit',
  layout = 'horizontal',
  children,
  defaultValue,
  onSave,
  hideEdit = false,
  renderInput = <TextField />,
  'aria-label': ariaLabel,
  isEditing: isEditingProp,
  onCancel,
  onEdit,
}: InlineEditProps) => {
  const [isEditing, setEditing] = useState(isEditingProp ?? false);
  const inputRef = useRef<HTMLInputElement>(null);
  const editRef = useRef<HTMLButtonElement>(null);
  const controlled = isEditingProp !== undefined;

  useUpdateEffect(() => {
    if (controlled) {
      setEditing(isEditingProp);
    }
  }, [isEditingProp]);

  useUpdateEffect(() => {
    isEditing
      ? inputRef.current && focusSafely(inputRef.current)
      : editRef.current && focusSafely(editRef.current);
  }, [isEditing]);

  const handleEdit = () => {
    !controlled && setEditing(true);
    onEdit?.();
  };

  const handleCancel = () => {
    !controlled && setEditing(false);
    onCancel?.();
  };

  const handleSave = () => {
    onSave(inputRef.current?.value || '');
    !controlled && setEditing(false);
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
      elementType: 'span',
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

  const input = cloneElement(
    renderInput,
    mergeProps(renderInput.props, {
      ref: inputRef,
      defaultValue,
      onKeyDown: handleKeyDown,
      'aria-label': ariaLabel,
    })
  );

  return isEditing ? (
    <div className={cx(container, inline({ layout }))} data-test-id={testId}>
      {input}
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
