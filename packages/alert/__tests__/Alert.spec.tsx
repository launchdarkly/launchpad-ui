import { it, expect, describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import type { AlertProps } from '../src';
import { Alert, AlertKind, AlertSize } from '../src';

const createComponent = (props?: AlertProps) => <Alert {...props}>Alert text!</Alert>;

describe('Alert', () => {
  it('should render an alert with text', () => {
    render(createComponent());
    expect(screen.getByText('Alert text!')).toBeInTheDocument();

    // check for default absence of close button
    const closeButton = screen.queryByLabelText('Close this alert.');
    expect(closeButton).not.toBeInTheDocument();
  });

  describe('with dismissible', () => {
    it('should render close button with dismissible', () => {
      render(createComponent({ dismissible: true }));
      const closeButton = screen.getByLabelText('Close this alert.');
      expect(closeButton).toBeInTheDocument();
    });

    it('close button should trigger onDismiss when clicked and hide Alert', () => {
      const onDismiss = vi.fn();
      render(createComponent({ dismissible: true, onDismiss }));

      const closeButton = screen.getByLabelText('Close this alert.');

      fireEvent.click(closeButton);

      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Alert text!')).not.toBeInTheDocument();
    });
  });

  describe('a11y', () => {
    it('is accessible', async () => {
      const { container } = render(createComponent());
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should render with role status by default', () => {
      render(createComponent({ size: AlertSize.MEDIUM }));
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should render with role alert for the error variant', () => {
      render(createComponent({ kind: AlertKind.ERROR }));
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});
