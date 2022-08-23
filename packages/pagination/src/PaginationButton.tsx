import { Button, ButtonSize, ButtonType } from '@launchpad-ui/button';
import {
  ChevronLeft,
  ChevronRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@launchpad-ui/icons';
import { cx } from 'classix';

import { PaginationChange } from './types';

type PaginationButtonProps<T = PaginationChange> = {
  resourceName: string;
  kind: PaginationChange;
  disabled: boolean;
  onClick: (change: T) => void;
  className?: string;
};

const ICON_MAP = {
  [PaginationChange.FIRST]: KeyboardDoubleArrowLeft,
  [PaginationChange.PREV]: ChevronLeft,
  [PaginationChange.NEXT]: ChevronRight,
  [PaginationChange.LAST]: KeyboardDoubleArrowRight,
};

const LABEL_MAP: { [key in PaginationChange]: string } = {
  [PaginationChange.FIRST]: 'first',
  [PaginationChange.PREV]: 'previous',
  [PaginationChange.NEXT]: 'next',
  [PaginationChange.LAST]: 'last',
};

const PaginationButton = ({
  resourceName,
  kind,
  disabled,
  onClick,
  className,
}: PaginationButtonProps) => {
  const classes = cx(
    'PaginationButton',
    {
      'PaginationButton--disabled': disabled,
    },
    className
  );

  const Icon = ICON_MAP[kind];

  const label = `${LABEL_MAP[kind]} ${resourceName} page`;

  return (
    <Button
      disabled={disabled}
      className={classes}
      onClick={() => onClick(kind)}
      size={ButtonSize.SMALL}
      type={ButtonType.ICON}
      icon={<Icon />}
      aria-label={label}
    />
  );
};

export { PaginationButton };
export type { PaginationButtonProps };
