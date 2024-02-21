import { Button } from '@launchpad-ui/button';
import { Item } from '@react-stately/collections';
import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { TabList } from '../src';

describe('TabList', () => {
  it('renders', async () => {
    render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );

    expect(screen.getAllByRole('tab')).toHaveLength(2);
  });

  it('can be reached with the keyboard', async () => {
    const user = userEvent.setup();
    render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );

    const tabs = screen.getAllByRole('tab');
    const tabpanels = screen.getAllByRole('tabpanel');
    await user.tab();

    expect(tabs[0]).toHaveFocus();
    await user.tab();
    expect(tabpanels[0]).toHaveFocus();
  });

  it('can cycle through tabs with keyboard', async () => {
    const user = userEvent.setup();
    render(
      <TabList>
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );

    const tabs = screen.getAllByRole('tab');
    await user.tab();

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
    render(
      <TabList activeTab="2">
        <Item key="1" title="First Tab">
          <p style={{ padding: '1rem' }}>Active tabpanel</p>
        </Item>
        <Item key="2" title="Another tab">
          <p style={{ padding: '1rem' }}>Another tabpanel</p>
        </Item>
      </TabList>
    );

    const activeTab = screen.getByText('Another tab');

    expect(activeTab).toBeInTheDocument();
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
  });

  it('renders a disabled Tab', async () => {
    render(
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
    const tabs = screen.getAllByRole('tab');
    expect(tabs[2]).toHaveAttribute('aria-disabled', 'true');
    expect(tabs[3]).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with focusable content', async () => {
    const user = userEvent.setup();
    render(
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
    const tabs = screen.getAllByRole('tab');
    const button = screen.getByRole('button');
    const buttonText = screen.getByText('Click me once');

    await user.tab();

    expect(tabs[0]).toHaveFocus();
    await user.tab();
    expect(button).toHaveFocus();
    expect(buttonText).toBeInTheDocument();
  });
});
