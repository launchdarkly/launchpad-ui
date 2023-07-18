import type { InlineVariants } from './styles/InlineEdit.css';
import type { ComponentProps } from 'react';

import { ButtonGroup, IconButton } from '@launchpad-ui/button';
import { TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import { container, cancelButton, inline } from './styles/InlineEdit.css';

type InlineEditProps = ComponentProps<'div'> &
  InlineVariants & {
    'data-test-id'?: string;
  };

const InlineEdit = ({
  className,
  'data-test-id': testId = 'inline-edit',
  layout = 'horizontal',
}: InlineEditProps) => {
  return (
    <div className={cx(container, inline({ layout }), className)} data-test-id={testId}>
      <TextField />
      <ButtonGroup spacing="compact">
        <IconButton kind="primary" icon={<Icon name="check" />} aria-label="save" />
        <IconButton
          kind="default"
          icon={<Icon name="close" />}
          aria-label="cancel"
          className={cancelButton}
        />
      </ButtonGroup>
    </div>
  );
};

export { InlineEdit };
export type { InlineEditProps };
