import { test, expect } from '@playwright/experimental-ct-react';

import { Markdown, type MarkdownProps } from '../src/Markdown';

import { SAMPLE_MARKDOWN } from './constants';

test.use({ viewport: { width: 500, height: 500 } });

const createComponent = (props: MarkdownProps) => <Markdown {...props} />;

test.describe('Markdown', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent({ source: SAMPLE_MARKDOWN }));

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
