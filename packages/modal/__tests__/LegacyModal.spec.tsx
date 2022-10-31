import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { LegacyModal, LegacyModalBody, LegacyModalFooter, LegacyModalHeader } from '../src';

describe('LegacyModal', () => {
  it('renders', async () => {
    render(
      <LegacyModal>
        <LegacyModalHeader>Modal</LegacyModalHeader>
        <LegacyModalBody>Body</LegacyModalBody>
        <LegacyModalFooter>Footer</LegacyModalFooter>
      </LegacyModal>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <LegacyModal onCancel={spy}>
        <LegacyModalHeader>Modal</LegacyModalHeader>
        <LegacyModalBody>Body</LegacyModalBody>
        <LegacyModalFooter>Footer</LegacyModalFooter>
      </LegacyModal>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
