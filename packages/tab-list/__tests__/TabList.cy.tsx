import type { TabListProps } from '../src';

import { Button } from '@launchpad-ui/button';
import { Item } from '@react-stately/collections';

import { TabList } from '../src';

const TABS = '[role="tab"]';

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
    cy.get('[data-test-id="tab-list"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });

  it('can be reached with the keyboard', () => {
    cy.mount(createComponent());

    cy.get(TABS).first().focus();
    cy.get(TABS).first().should('have.focus');

    cy.realPress('Tab');
    cy.get('[role="tabpanel"]').first().should('have.focus');
  });

  it('can cycle through tabs with keyboard', () => {
    cy.mount(createComponent());

    cy.get(TABS).first().focus();

    cy.get(TABS).first().should('have.focus');
    cy.realPress('ArrowRight');
    cy.get(TABS).eq(1).should('have.focus');
    cy.realPress('ArrowRight');
    cy.get(TABS).first().should('have.focus');
    cy.realPress('ArrowLeft');
    cy.get(TABS).eq(1).should('have.focus');
    cy.realPress('ArrowLeft');
    cy.get(TABS).first().should('have.focus');
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
    cy.get(TABS).eq(2).should('have.attr', 'aria-disabled', 'true');
    cy.get(TABS).eq(3).should('have.attr', 'aria-disabled', 'true');
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

    cy.get(TABS).first().focus();

    cy.get(TABS).first().should('have.focus');
    cy.realPress('Tab');
    cy.contains('Click me once').should('have.focus');
  });
});
