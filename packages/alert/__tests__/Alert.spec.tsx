import type { AlertProps } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Alert } from '../src';
import styles from '../src/styles/Alert.module.css';

const createComponent = (props?: AlertProps) => <Alert {...props}>Alert text!</Alert>;

describe('Alert', () => {
  it('renders an alert with text', () => {
    render(createComponent());
    expect(screen.getByText('Alert text!')).toBeInTheDocument();

    // check for default absence of close button
    const closeButton = screen.queryByLabelText('Close this alert.');
    expect(closeButton).not.toBeInTheDocument();
  });

  describe('with dismissible', () => {
    it('renders close button with dismissible', () => {
      render(createComponent({ dismissible: true }));
      const closeButton = screen.getByLabelText('Close this alert.');
      expect(closeButton).toBeInTheDocument();
    });

    it('triggers onDismiss when close button is clicked and hides the alert', async () => {
      const onDismiss = vi.fn();
      const user = userEvent.setup();
      render(createComponent({ dismissible: true, onDismiss }));

      const closeButton = screen.getByLabelText('Close this alert.');

      await user.click(closeButton);

      expect(onDismiss).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Alert text!')).not.toBeInTheDocument();
    });
  });

  describe('with header', () => {
    it('renders header', () => {
      render(createComponent({ header: 'This is a header' }));
      const text = screen.getByText('This is a header');
      expect(text).toBeInTheDocument();
    });
  });

  describe('respects noIcon prop', () => {
    it('renders icon by default', () => {
      render(createComponent());
      const infoIcon = screen.getByRole('img', { name: 'Info' });
      expect(infoIcon).toBeInTheDocument();
    });

    it('renders noIcon when prop is passed', () => {
      render(createComponent({ noIcon: true }));
      const infoIcon = screen.queryByRole('img', { name: 'Info' });
      expect(infoIcon).not.toBeInTheDocument();
    });
  });

  describe('applies class modifiers', () => {
    it('applies size small class when passed', () => {
      render(createComponent({ size: 'small', 'data-test-id': 'alert' }));
      const component = screen.getByTestId('alert');
      expect(component).toHaveClass(styles['Alert--small']);
    });

    it('applies isInline class when passed', () => {
      render(createComponent({ isInline: true, 'data-test-id': 'alert' }));
      const component = screen.getByTestId('alert');
      expect(component).toHaveClass(styles['Alert--inline']);
    });

    it('applies compact class when passed', () => {
      render(createComponent({ compact: true, 'data-test-id': 'alert' }));
      const component = screen.getByTestId('alert');
      expect(component).toHaveClass(styles['Alert--compact']);
    });

    it('applies wide class when passed', () => {
      render(createComponent({ wide: true, 'data-test-id': 'alert' }));
      const component = screen.getByTestId('alert');
      expect(component).toHaveClass(styles['Alert--wide']);
    });
  });

  describe('a11y', () => {
    it('renders with role status by default', () => {
      render(createComponent({ size: 'medium' }));
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders with role alert for the error variant', () => {
      render(createComponent({ kind: 'error' }));
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});
