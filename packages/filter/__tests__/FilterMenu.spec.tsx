import type { FilterMenuProps } from '../src/FilterMenu';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { FilterMenu } from '../src/FilterMenu';

const createComponent = (props?: Partial<FilterMenuProps>) => (
  <FilterMenu options={[]} {...props} />
);

const oneOption = [
  {
    name: 'one',
    value: 1,
  },
];

const twoOptions = [
  {
    name: 'one',
    value: 1,
  },
  { isDivider: true, value: '' },
  {
    name: 'two',
    value: 2,
  },
];

const getClearButton = () => screen.queryByRole('button', { name: 'CLEAR FILTER' });

describe('FilterMenu', () => {
  it('should create unchecked, named menu items and dividers', () => {
    render(createComponent({ options: twoOptions }));
    expect(screen.getByText('one')).toBeVisible();
    expect(screen.getByText('one')).not.toBeChecked();

    expect(screen.getByText('two')).toBeVisible();
    expect(screen.getByText('two')).not.toBeChecked();

    expect(screen.getByText('two').parentElement?.querySelector('div.Menu-divider')).toBeVisible();
  });

  it('should create checked menu items', () => {
    const checkedOptions = [{ name: 'one', value: 1, isChecked: true }];
    render(createComponent({ options: checkedOptions }));
    expect(screen.getByText('one')).toBeChecked();
  });

  it('should display a tooltip on a disabled menu item when a title is provided', async () => {
    const disabledOptions = [{ name: 'one', value: 1, isDisabled: true }];
    const props = { options: disabledOptions, disabledOptionTooltip: 'disabled tooltip' };

    render(createComponent(props));
    await userEvent.hover(screen.getByText('one'));

    await waitFor(() => {
      expect(screen.getByText('disabled tooltip')).toBeInTheDocument();
    });
  });

  it('should display a search field when enableSearch is true', () => {
    render(createComponent({ enableSearch: true, options: oneOption }));
    expect(screen.getByLabelText('Search', { selector: 'input' })).toBeVisible();
  });

  it('should display a disabled loading menu item when isLoading is true', () => {
    render(createComponent({ isLoading: true }));
    expect(screen.getByText('loading...')).toBeVisible();
    expect(screen.getByText('loading...')).toBeDisabled();
  });

  it('should render a clear filter button in menu when the onClearFilter function is passed', async () => {
    const onClearFilter = vi.fn();
    render(createComponent({ options: twoOptions, onClearFilter }));

    expect(getClearButton()).toBeVisible();

    const user = userEvent.setup();
    await user.click(getClearButton()!);
    expect(onClearFilter).toHaveBeenCalled();
  });

  it('should not render a clear filter button in menu when no onClearFilter function is passed', () => {
    render(createComponent({ options: twoOptions }));
    expect(getClearButton()).not.toBeInTheDocument();
  });
});
