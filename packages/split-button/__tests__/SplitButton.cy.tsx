import type { SplitButtonProps } from '../src';

import { Menu, MenuItem } from '@launchpad-ui/menu';

import {
  SplitButton,
  SplitButtonDropdown,
  SplitButtonDropdownButton,
  SplitButtonMainButton,
} from '../src';

const createComponent = (props?: SplitButtonProps) => (
  <SplitButton {...props}>
    <SplitButtonMainButton>Save changes</SplitButtonMainButton>
    <SplitButtonDropdown>
      <SplitButtonDropdownButton />
      <Menu>
        <MenuItem>Save changes</MenuItem>
      </Menu>
    </SplitButtonDropdown>
  </SplitButton>
);

describe('SplitButton', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.getByTestId('split-button').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });
});
