import { Button, ButtonKind } from '@launchpad-ui/button';
import { Item } from '@react-stately/collections';
import { axe } from 'jest-axe';

import { render, screen, userEvent } from '../../../tests/utils';
import { TabList } from '../src';

describe('TabList', () => {
  it('renders', async () => {
    const { container } = render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('can be reached with the keyboard', async () => {
    const { container } = render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );
    const results = await axe(container);
    const tabs = screen.getAllByRole('tab');
    const tabpanels = screen.getAllByRole('tabpanel');
    const user = userEvent.setup();
    await user.tab();

    expect(results).toHaveNoViolations();
    expect(tabs[0]).toHaveFocus();
    await user.tab();
    expect(tabpanels[0]).toHaveFocus();
  });

  it('can cycle through tabs with keyboard', async () => {
    const { container } = render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );
    const results = await axe(container);
    const tabs = screen.getAllByRole('tab');
    const user = userEvent.setup();
    await user.tab();

    expect(results).toHaveNoViolations();
    expect(tabs[0]).toHaveFocus();
    await user.keyboard('{arrowright}');
    expect(tabs[1]).toHaveFocus();
    await user.keyboard('{arrowright}');
    expect(tabs[0]).toHaveFocus();
    await user.keyboard('{arrowleft}');
    expect(tabs[1]).toHaveFocus();
    await user.keyboard('{arrowleft}');
    expect(tabs[0]).toHaveFocus();
  });

  it('renders a default selected Tab', async () => {
    const { container } = render(
      <TabList activeTab="2">
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );
    const results = await axe(container);
    const activeTab = screen.getByText('Another tab');

    expect(activeTab).toBeInTheDocument();
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(results).toHaveNoViolations();
  });

  it('renders a disabled Tab', async () => {
    const { container } = render(
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
    const results = await axe(container);
    const tabs = screen.getAllByRole('tab');
    expect(tabs[2]).toHaveAttribute('aria-disabled', 'true');
    expect(tabs[3]).toHaveAttribute('aria-disabled', 'true');
    expect(results).toHaveNoViolations();
  });

  it('renders with focusable content', async () => {
    const { container } = render(
      <TabList>
        <Item key="3" title="First Tab">
          <div>
            <p style={{ padding: '1rem 0' }}>Active tabpanel</p>
            <Button kind={ButtonKind.PRIMARY}>Click me once</Button>
          </div>
        </Item>
        <Item key="4" title="Another tab">
          <div>
            <p style={{ padding: '1rem 0' }}>Another tabpanel</p>
            <Button kind={ButtonKind.PRIMARY}>Click me twice</Button>
          </div>
        </Item>
      </TabList>
    );
    const results = await axe(container);
    const tabs = screen.getAllByRole('tab');
    const button = screen.getByRole('button');
    const buttonText = screen.getByText('Click me once');
    const user = userEvent.setup();
    await user.tab();

    expect(tabs[0]).toHaveFocus();
    await user.tab();
    expect(button).toHaveFocus();
    expect(buttonText).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });
});
