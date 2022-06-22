import type { ChangeEvent } from 'react';

import { forwardRef } from 'react';

import './styles/Menu.css';

type MenuSearchProps = {
  ariaLabel?: string;
  value?: string;
  placeholder?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
};

const MenuSearch = forwardRef<HTMLInputElement, MenuSearchProps>((props, ref) => {
  const { ariaLabel, placeholder, ...finalProps } = props;

  return (
    <div className="Menu-search">
      <input
        {...finalProps}
        ref={ref}
        className="Menu-search-input FormInput FormInput--tiny"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        aria-label={ariaLabel || 'Search'}
      />
      <div
        className="Menu-search-hidden-placeholder Menu-search-input FormInput FormInput--tiny"
        aria-hidden="true"
      >
        {placeholder}
      </div>
    </div>
  );
});

MenuSearch.displayName = 'MenuSearch';

export { MenuSearch };
export type { MenuSearchProps };
