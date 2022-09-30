import { IconButton } from '@launchpad-ui/button';
import {
  ChevronLeft,
  ChevronRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@launchpad-ui/icons';
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
  first: KeyboardDoubleArrowLeft,
  prev: ChevronLeft,
  next: ChevronRight,
  last: KeyboardDoubleArrowRight,
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

  const Icon = ICON_MAP[kind];

  const label = `${LABEL_MAP[kind]} ${resourceName} page`;

  return (
    <IconButton
      disabled={disabled}
      className={classes}
      data-test-id={testId}
      onClick={() => onClick(kind)}
      icon={<Icon size="small" />}
      aria-label={label}
    />
  );
};

export { PaginationButton };
export type { PaginationButtonProps, PaginationChange };
