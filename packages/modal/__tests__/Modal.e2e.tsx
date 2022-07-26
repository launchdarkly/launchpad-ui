import { test, expect } from '@playwright/experimental-ct-react';

import { Modal, type ModalProps } from '../src/Modal';
import { ModalBody } from '../src/ModalBody';
import { ModalFooter } from '../src/ModalFooter';
import { ModalHeader } from '../src/ModalHeader';
import { Prompt } from '../src/Prompt';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ModalProps) => (
  <div>
    <button>test</button>
    <Prompt>
      <Modal transition="pop" withCloseButton {...props}>
        <ModalHeader>Modal</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    </Prompt>
  </div>
);

test.describe('Modal', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
