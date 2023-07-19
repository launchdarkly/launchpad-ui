import type { InlineVariants } from './styles/InlineEdit.css';
import type { ComponentProps, Dispatch, SetStateAction } from 'react';

import { ButtonGroup, IconButton } from '@launchpad-ui/button';
import { TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { Slot } from '@radix-ui/react-slot';
import { cx } from 'classix';
import { useRef, useState } from 'react';

import { container, cancelButton, inline } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants &
  Pick<ComponentProps<'input'>, 'defaultValue'> & {
    'data-test-id'?: string;
    onSave: Dispatch<SetStateAction<string>>;
  };

const InlineEdit = ({
  className,
  'data-test-id': testId = 'inline-edit',
  layout = 'horizontal',
  children,
  defaultValue,
  onSave,
}: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return isEditing ? (
    <div className={cx(container, inline({ layout }), className)} data-test-id={testId}>
      <TextField defaultValue={defaultValue} autoFocus ref={inputRef} />
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
    <div className={container}>
      <Slot onClick={handleEdit}>{children}</Slot>
      <IconButton icon={<Icon name="edit" />} aria-label="edit" size="small" onClick={handleEdit} />
    </div>
  );
};

export { InlineEdit };
export type { InlineEditProps };
