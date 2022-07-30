import type { FilterMenuProps } from '../src/FilterMenu';

import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Filter } from '../src';
import { FilterMenu } from '../src/FilterMenu';

describe('Filter', () => {
  it('renders', () => {
    render(<Filter>An important message</Filter>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});

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
  it('should create the right menu items', () => {
    render(createComponent({ options: twoOptions }));
    expect(screen.getByText('one')).toBeVisible();
    expect(screen.getByText('two')).toBeVisible();
    expect(screen.getByText('two').parentElement?.querySelector('div.Menu-divider')).toBeVisible();
  });

  it('should display a search field as requested', () => {
    render(createComponent({ enableSearch: true, options: oneOption }));
    expect(screen.getByLabelText('Search', { selector: 'input' })).toBeVisible();
  });

  it('should display a loading menu item when isLoading is true', () => {
    render(createComponent({ isLoading: true }));
    expect(screen.getByText('loading...')).toBeVisible();
  });
  it('should render a clear filter button in menu when the onClearFilter function is passed', async () => {
    const onClearFilter = jest.fn();
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
