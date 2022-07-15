import { test, expect } from '@playwright/experimental-ct-react';

import { Modal } from '../src/Modal';
import { ModalBody } from '../src/ModalBody';
import { ModalFooter } from '../src/ModalFooter';
import { ModalHeader } from '../src/ModalHeader';
import { Prompt } from '../src/Prompt';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Modal', () => {
  test('is accessible', async ({ mount, page }) => {
    await mount(
      <div>
        <button>test</button>
        <Prompt>
          <Modal transition="pop" withCloseButton>
            <ModalHeader>Modal</ModalHeader>
            <ModalBody>Body</ModalBody>
            <ModalFooter>Footer</ModalFooter>
          </Modal>
        </Prompt>
      </div>
    );

    // skip animations
    await page.locator('.Modal-overlay').evaluate((node) => (node.style.opacity = '1'));
    await page.locator('[role="dialog"]').evaluate((node) => (node.style.opacity = '1'));
    await expect(page).toBeAccessible();
  });
});
