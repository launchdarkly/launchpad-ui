import type { TabListProps } from '../src';

import { Button } from '@launchpad-ui/button';
import { Item } from '@react-stately/collections';

import { TabList } from '../src';

const createComponent = (props?: Partial<TabListProps<string>>) => (
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
    cy.getByTestId('tab-list').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });

  it('can be reached with the keyboard', () => {
    cy.mount(createComponent());

    cy.getByRole('tab').first().focus();
    cy.getByRole('tab').first().should('have.focus');

    cy.realPress('Tab');
    cy.getByRole('tabpanel').first().should('have.focus');
  });

  it('can cycle through tabs with keyboard', () => {
    cy.mount(createComponent());

    cy.getByRole('tab').first().focus();

    cy.getByRole('tab').first().should('have.focus');
    cy.realPress('ArrowRight');
    cy.getByRole('tab').eq(1).should('have.focus');
    cy.realPress('ArrowRight');
    cy.getByRole('tab').first().should('have.focus');
    cy.realPress('ArrowLeft');
    cy.getByRole('tab').eq(1).should('have.focus');
    cy.realPress('ArrowLeft');
    cy.getByRole('tab').first().should('have.focus');
  });

  it('renders a default selected Tab', () => {
    cy.mount(createComponent({ activeTab: '2' }));

    cy.contains('Another tab').should('be.visible');
    cy.contains('Another tab').should('have.attr', 'aria-selected', 'true');
  });

  it('renders a disabled Tab', () => {
    cy.mount(
      <TabList disabledTabs={['3', '4']}>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
        <Item key="3" title="One more tab">
          <p style={{ padding: '1rem' }}>One more tabpanel</p>
        </Item>
        <Item key="4" title="Yet another tab">
          <p style={{ padding: '1rem' }}>Yet another tabpanel</p>
        </Item>
      </TabList>
    );
    cy.getByRole('tab').eq(2).should('have.attr', 'aria-disabled', 'true');
    cy.getByRole('tab').eq(3).should('have.attr', 'aria-disabled', 'true');
  });

  it('renders with focusable content', () => {
    cy.mount(
      <TabList>
        <Item key="3" title="First Tab">
          <div>
            <p style={{ padding: '1rem 0' }}>Active tabpanel</p>
            <Button kind="primary">Click me once</Button>
          </div>
        </Item>
        <Item key="4" title="Another tab">
          <div>
            <p style={{ padding: '1rem 0' }}>Another tabpanel</p>
            <Button kind="primary">Click me twice</Button>
          </div>
        </Item>
      </TabList>
    );

    cy.getByRole('tab').first().focus();

    cy.getByRole('tab').first().should('have.focus');
    cy.realPress('Tab');
    cy.contains('Click me once').should('have.focus');
  });
});
