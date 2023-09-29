import { IconButton } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Pagination.module.css';

type PaginationChange = 'first' | 'prev' | 'next' | 'last';

type PaginationButtonProps<T = PaginationChange> = {
  resourceName: string;
  kind: PaginationChange;
  disabled: boolean;
  onClick: (change: T) => void;
  className?: string;
  'data-test-id'?: string;
};

const ICON_MAP = {
  first: <Icon name="chevrons-left" />,
  prev: <Icon name="chevron-left" />,
  next: <Icon name="chevron-right" />,
  last: <Icon name="chevrons-right" />,
};

const LABEL_MAP: { [key in PaginationChange]: string } = {
  first: 'first',
  prev: 'previous',
  next: 'next',
  last: 'last',
};

const PaginationButton = ({
  resourceName,
  kind,
  disabled,
  onClick,
  className,
  'data-test-id': testId = 'pagination-button',
}: PaginationButtonProps) => {
  const classes = cx(
    styles.PaginationButton,
    disabled && styles['PaginationButton--disabled'],
    className
  );

  const IconComponent = ICON_MAP[kind];

  const label = `${LABEL_MAP[kind]} ${resourceName} page`;

  return (
    <IconButton
      disabled={disabled}
      className={classes}
      size="small"
      data-test-id={testId}
      onClick={() => onClick(kind)}
      icon={IconComponent}
      aria-label={label}
    />
  );
};

export { PaginationButton };
export type { PaginationButtonProps, PaginationChange };
