import type { InlineVariants } from './styles/InlineEdit.css';
import type { TextAreaProps, TextFieldProps } from '@launchpad-ui/form';
import type { ComponentProps, KeyboardEventHandler, ReactElement } from 'react';

import { ButtonGroup, IconButton } from '@launchpad-ui/button';
import { TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { focusSafely } from '@react-aria/focus';
import { useFocusWithin } from '@react-aria/interactions';
import { mergeProps, mergeRefs, useUpdateEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { cloneElement, forwardRef, useRef, useState } from 'react';

import { container, cancelButton, inline, readButton } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants &
  Pick<ComponentProps<'input'>, 'defaultValue'> & {
    'data-test-id'?: string;
    onConfirm: (value: string) => void;
    hideEdit?: boolean;
    renderInput?: ReactElement<TextFieldProps | TextAreaProps>;
    isEditing?: boolean;
    onCancel?: () => void;
    onEdit?: () => void;
    cancelButtonLabel?: string;
    editButtonLabel?: string;
    confirmButtonLabel?: string;
  };

const InlineEdit = forwardRef<HTMLInputElement, InlineEditProps>(
  (
    {
      'data-test-id': testId = 'inline-edit',
      layout = 'horizontal',
      children,
      defaultValue,
      onConfirm,
      hideEdit = false,
      renderInput = <TextField />,
      'aria-label': ariaLabel,
      isEditing: isEditingProp,
      onCancel,
      onEdit,
      cancelButtonLabel = 'cancel',
      editButtonLabel = 'edit',
      confirmButtonLabel = 'confirm',
      className,
      ...rest
    },
    ref
  ) => {
    const [isEditing, setEditing] = useState(isEditingProp ?? false);
    const [isFocusWithin, setFocusWithin] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const editRef = useRef<HTMLButtonElement>(null);
    const controlled = isEditingProp !== undefined;

    useUpdateEffect(() => {
      if (controlled) {
        setEditing(isEditingProp);
      }
    }, [isEditingProp]);

    useUpdateEffect(() => {
      if (isFocusWithin) {
        isEditing
          ? inputRef.current && focusSafely(inputRef.current)
          : editRef.current && focusSafely(editRef.current);
      }
    }, [isEditing]);

    const handleEdit = () => {
      !controlled && setEditing(true);
      onEdit?.();
    };

    const handleCancel = () => {
      !controlled && setEditing(false);
      onCancel?.();
    };

    const handleConfirm = () => {
      onConfirm(inputRef.current?.value || '');
      !controlled && setEditing(false);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleConfirm();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        handleCancel();
      }
    };

    const { focusWithinProps } = useFocusWithin({
      onBlurWithin: () => isEditing && handleCancel(),
      onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
    });

    const { buttonProps } = useButton(
      {
        'aria-label': editButtonLabel,
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
          aria-label={editButtonLabel}
          size="small"
          onClick={handleEdit}
        />
      </>
    );

    const input = cloneElement(
      renderInput,
      mergeProps(renderInput.props, {
        ref: mergeRefs(inputRef, ref),
        defaultValue,
        onKeyDown: handleKeyDown,
        'aria-label': ariaLabel,
      })
    );

    return isEditing ? (
      <div
        {...rest}
        className={cx(container, inline({ layout }), className)}
        data-test-id={testId}
        {...focusWithinProps}
      >
        {input}
        <ButtonGroup spacing="compact">
          <IconButton
            kind="primary"
            icon={<Icon name="check" />}
            aria-label={confirmButtonLabel}
            onClick={handleConfirm}
          />
          <IconButton
            kind="default"
            icon={<Icon name="close" />}
            aria-label={cancelButtonLabel}
            className={cancelButton}
            onClick={handleCancel}
          />
        </ButtonGroup>
      </div>
    ) : (
      <div
        {...rest}
        className={cx(!hideEdit && container, className)}
        data-test-id={testId}
        {...focusWithinProps}
      >
        {renderReadContent}
      </div>
    );
  }
);

InlineEdit.displayName = 'InlineEdit';

export { InlineEdit };
export type { InlineEditProps };
