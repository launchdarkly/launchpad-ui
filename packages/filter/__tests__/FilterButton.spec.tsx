import type { FilterButtonProps } from '../src/FilterButton';

import { it, expect, describe } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { FilterButton } from '../src/FilterButton';

const createComponent = ({ children, ...rest }: Partial<FilterButtonProps>) => {
  return (
    <FilterButton name="author" {...rest}>
      {children}
    </FilterButton>
  );
};

describe('FilterButton', () => {
  it('should render name and description', () => {
    render(createComponent({ children: 'description' }));
    expect(screen.getByRole('button')).toHaveTextContent('author:description');
    expect(screen.getByRole('button')).toHaveAccessibleName('author: description');
  });

  it('should hide name if hideName is true', () => {
    render(createComponent({ children: 'description', hideName: true }));
    expect(screen.getByRole('button')).toHaveAccessibleName('author: description');
  });

  it('should hide description if no children provided', () => {
    render(createComponent({ children: null }));
    expect(screen.getByRole('button')).toHaveTextContent('author');
    expect(screen.getByRole('button')).toHaveAccessibleName('author');
  });

  it('should render ExpandMore icon if isClearable is false', () => {
    render(createComponent({ isClearable: false }));
    expect(screen.getByRole('img', { hidden: true })).toBeVisible();
  });

  describe('clear button', () => {
    it('should render a button to clear the filter if isClearable is true', () => {
      render(createComponent({ isClearable: true }));
      expect(screen.getByRole('button', { name: '' })).toBeVisible();
    });

    it('should render a tooltip with default label', async () => {
      render(createComponent({ isClearable: true }));
      expect(true).toBe(true);

      await userEvent.hover(screen.getByRole('button', { name: '' }));

      await waitFor(() => {
        expect(screen.getByText('Clear filter')).toBeInTheDocument();
      });
    });

    it('should render a tooltip with provided content', async () => {
      render(createComponent({ isClearable: true, clearTooltip: <span>Bananas</span> }));
      expect(true).toBe(true);

      await userEvent.hover(screen.getByRole('button', { name: '' }));

      await waitFor(() => {
        expect(screen.getByText('Bananas')).toBeInTheDocument();
      });
    });
  });
});
