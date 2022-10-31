import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Modal } from '../src';

globalThis.matchMedia = vi.fn().mockReturnValue({
  matches: true,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
});

describe('Modal', () => {
  it('renders', async () => {
    render(
      <Modal title="a">
        <p>Body text</p>
      </Modal>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal title="a" onCancel={spy}>
        Body
      </Modal>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onReady when modal is rendered', async () => {
    const spy = vi.fn();

    render(
      <Modal title="a" onReady={spy}>
        Body
      </Modal>
    );

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when overlay is clicked', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal title="a" onCancel={spy}>
        Body
      </Modal>
    );

    const overlay = screen.getByTestId('modal-overlay');
    await user.click(overlay);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when close button is clicked', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal title="a" onCancel={spy}>
        Body
      </Modal>
    );

    const overlay = screen.getByTestId('modal-close-button');
    await user.click(overlay);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders header icon when warning status is passed', async () => {
    render(
      <Modal title="a" status="warning">
        Body
      </Modal>
    );

    const component = screen.getByTestId('modal-header-icon');

    expect(component).toBeInTheDocument();
  });

  it('renders required field when prop is passed', async () => {
    render(
      <Modal title="a" hasRequiredField>
        Body
      </Modal>
    );

    const component = screen.getByTestId('modal-required-field');

    expect(component).toBeInTheDocument();
  });

  it('renders description when passed', async () => {
    const content = 'test';

    render(
      <Modal title="a" description={content}>
        Body
      </Modal>
    );

    const component = screen.getByTestId('modal-description');

    expect(component).toHaveTextContent(content);
  });

  it('does not render footer when no buttons are passed', async () => {
    render(<Modal title="a">Body</Modal>);

    const component = screen.queryByTestId('modal-footer');

    expect(component).not.toBeInTheDocument();
  });

  it('renders footer when button is passed', async () => {
    render(
      <Modal title="a" primaryButton={<button>click me</button>}>
        Body
      </Modal>
    );

    const component = screen.queryByTestId('modal-footer');

    expect(component).toBeInTheDocument();
  });
});
