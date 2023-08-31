import type { InlineEditProps } from '../src';

import { TextArea } from '@launchpad-ui/form';
import { useState } from 'react';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, waitFor, userEvent } from '../../../test/utils';
import { InlineEdit } from '../src';

const InlineEditComponent = ({ ...props }: Omit<Partial<InlineEditProps>, 'ref'>) => {
  const [editValue, setEditValue] = useState('');

  return (
    <InlineEdit defaultValue={editValue} onConfirm={setEditValue} {...props}>
      <span>{editValue}</span>
    </InlineEdit>
  );
};

describe('InlineEdit', () => {
  it('renders', () => {
    render(<InlineEditComponent />);
    expect(screen.getByTestId('inline-edit')).toBeVisible();
  });

  it('renders an input in edit mode', async () => {
    render(<InlineEditComponent />);

    await waitFor(() => {
      screen.getByLabelText('edit').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('text-field')).toBeVisible();
    });
  });

  it('renders a button wrapper in edit mode when hideEdit is passed', async () => {
    render(<InlineEditComponent hideEdit />);
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('renders a custom input', async () => {
    render(<InlineEditComponent renderInput={<TextArea />} />);

    await waitFor(() => {
      screen.getByLabelText('edit').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('text-area')).toBeVisible();
    });
  });

  it('enters edit mode when button wrapper is clicked', async () => {
    render(<InlineEditComponent hideEdit />);

    await waitFor(() => {
      screen.getByRole('button').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('text-field')).toBeVisible();
    });
  });

  it('returns to read mode when cancel is clicked', async () => {
    render(<InlineEditComponent />);

    await waitFor(() => {
      screen.getByLabelText('edit').click();
    });

    await waitFor(() => {
      screen.getByLabelText('cancel').click();
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });
  });

  it('returns to read mode when the escape key is pressed', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);

    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.keyboard('{Escape}');
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });
  });

  it('confirms the value and returns to read mode when the enter key is pressed', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);

    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.keyboard('test');
      await user.keyboard('{Enter}');
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText('test')).toBeVisible();
    });
  });

  it('confirms the value and returns to read mode when confirm is clicked', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);

    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.keyboard('test');
      screen.getByLabelText('confirm').click();
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText('test')).toBeVisible();
    });
  });

  it('delegates focus with keyboard nav', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);
    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.tab();
      await user.keyboard('{Enter}');
    });

    await waitFor(async () => {
      expect(screen.getByLabelText('edit')).toHaveFocus();
    });
  });

  it('calls handlers for edit, cancel, and confirm', async () => {
    const editSpy = vi.fn();
    const cancelSpy = vi.fn();
    const confirmSpy = vi.fn();

    render(<InlineEditComponent onCancel={cancelSpy} onEdit={editSpy} onConfirm={confirmSpy} />);

    await waitFor(async () => {
      screen.getByLabelText('edit').click();
    });

    expect(editSpy).toHaveBeenCalledTimes(1);

    await waitFor(async () => {
      screen.getByLabelText('cancel').click();
    });

    expect(cancelSpy).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      screen.getByLabelText('edit').click();
    });

    await waitFor(() => {
      screen.getByLabelText('confirm').click();
    });

    expect(confirmSpy).toHaveBeenCalledTimes(1);
  });

  it('allows control over the read and edit modes', async () => {
    const { rerender } = render(<InlineEditComponent isEditing />);

    await waitFor(() => {
      expect(screen.getByTestId('text-field')).toBeVisible();
    });

    rerender(<InlineEditComponent isEditing={false} />);

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });
  });

  it('cancels when input is blurred', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);

    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.tab({ shift: true });
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });
  });

  it('cancels when cancel button is blurred', async () => {
    const user = userEvent.setup();
    render(<InlineEditComponent />);

    await user.tab();
    await user.keyboard('{Enter}');

    await waitFor(async () => {
      expect(screen.getByTestId('text-field')).toHaveFocus();
      await user.tab();
      await user.tab();
      await user.tab();
    });

    await waitFor(() => {
      expect(screen.getByLabelText('edit')).toBeVisible();
    });
  });
});
