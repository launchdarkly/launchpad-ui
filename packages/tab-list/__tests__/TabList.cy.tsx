import type { TabListProps } from '../src';

import { Item } from '@react-stately/collections';

import { TabList } from '../src';

const createComponent = (props?: TabListProps<string>) => (
  <TabList {...props}>
    <Item key="1" title="First Tab">
      <p style={{ padding: '1rem' }}>Active tabpanel</p>
    </Item>
    <Item key="2" title="Another tab">
      <p style={{ padding: '1rem' }}>Another tabpanel</p>
    </Item>
  </TabList>
);

describe('TabList', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get('[data-test-id="tab-list"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });
});
