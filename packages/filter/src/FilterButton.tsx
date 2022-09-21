import type { ReactNode, SyntheticEvent } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, ExpandMore } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { cx } from 'classix';
import { Children, forwardRef, useId } from 'react';

import './styles/Filter.css';

type FilterButtonProps = {
  name: ReactNode;
  hideName?: boolean;
  isClearable?: boolean;
  onClear?(event: SyntheticEvent): void;
  className?: string;
  isSelected?: boolean;
  clearTooltip?: string | JSX.Element;
  children?: ReactNode;
  onClickFilterButton?(): void;
  'data-test-id'?: string;
};

type Ref = HTMLButtonElement;

const FilterButton = forwardRef<Ref, FilterButtonProps>((props, ref) => {
  const {
    children,
    name,
    hideName,
    isClearable,
    clearTooltip,
    onClear,
    isSelected,
    onClickFilterButton,
    className,
    'data-test-id': testId = 'filter-button',
    ...rest
  } = props;
  const nameId = useId();
  const descriptionId = useId();

  const hasDescription = Children.count(children) !== 0;

  const nameElement = (
    <span className="Filter-name">
      {name}
      {hasDescription && ':'}
    </span>
  );

  return (
    <div className="Filter-buttonContainer" data-test-id={testId}>
      <button
        {...rest}
        aria-labelledby={`${nameId} ${hasDescription ? descriptionId : ''}`}
        aria-haspopup
        className={cx('Filter-button', className, (isClearable || isSelected) && 'is-clearable')}
        ref={ref}
        onClick={onClickFilterButton}
      >
        {hideName ? (
          <VisuallyHidden id={nameId}>{nameElement}</VisuallyHidden>
        ) : (
          <span id={nameId}>{nameElement}</span>
        )}
        {hasDescription && (
          <span id={descriptionId} className="Filter-description">
            {children}
          </span>
        )}
        {!isClearable && <ExpandMore size="small" />}
      </button>
      {isClearable && (
        <Tooltip targetClassName="Filter-clearTooltip" content={clearTooltip}>
          <IconButton
            aria-label="Clear filter"
            className="Filter-clear"
            icon={<Close size="tiny" />}
            onClick={onClear}
          />
        </Tooltip>
      )}
    </div>
  );
});

FilterButton.defaultProps = {
  clearTooltip: 'Clear filter',
};

FilterButton.displayName = 'FilterButton';

export { FilterButton };
export type { FilterButtonProps };
