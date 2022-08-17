import type { DropdownProps } from '@launchpad-ui/dropdown';

import { Dropdown } from '@launchpad-ui/dropdown';
import { useContext } from 'react';

import { SplitButtonContext } from './context';
import './styles/SplitButton.css';

type SplitButtonDropdownProps = Omit<
  DropdownProps<string | number | object>,
  'enableArrow' | 'restrictWidth'
>;

const SplitButtonDropdown = ({ disabled, children, ...rest }: SplitButtonDropdownProps) => {
  const { disabled: parentDisabled } = useContext(SplitButtonContext);

  const isDisabled = parentDisabled || disabled;

  return (
    <Dropdown {...rest} enableArrow={false} restrictWidth={false} disabled={isDisabled}>
      {children}
    </Dropdown>
  );
};

export { SplitButtonDropdown };
export type { SplitButtonDropdownProps };
