import type { ProgressBubblesProps } from '../src/ProgressBubbles';

import { test, expect } from '@playwright/experimental-ct-react';

import { ProgressBubbles } from '../src/ProgressBubbles';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props?: ProgressBubblesProps) => {
  const allProps = {
    numBubbles: 3,
    currentBubble: 1,
    bubbleLabels: ['Step 1', 'Step 2', 'Step 3'],
    ...(props || {}),
  };
  return <ProgressBubbles {...allProps} />;
};

test.describe('ProgressBubbles', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
