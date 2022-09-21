import type { ChangeEvent } from 'react';

import { TextField } from '@launchpad-ui/form';
import { forwardRef } from 'react';

import './styles/Menu.css';

type MenuSearchProps = {
  ariaLabel?: string;
  value?: string;
  placeholder?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  'data-test-id'?: string;
};

const MenuSearch = forwardRef<HTMLInputElement, MenuSearchProps>((props, ref) => {
  const { ariaLabel, placeholder, 'data-test-id': testId = 'menu-search', ...finalProps } = props;

  return (
    <div className="Menu-search">
      <TextField
        {...finalProps}
        ref={ref}
        className="Menu-search-input"
        tiny
        type="search"
        data-test-id={testId}
        autoComplete="off"
        placeholder={placeholder}
        aria-label={ariaLabel || 'Search'}
      />
    </div>
  );
});

MenuSearch.displayName = 'MenuSearch';

export { MenuSearch };
export type { MenuSearchProps };
