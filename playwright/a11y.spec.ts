import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe('Storybook a11y', async () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stories = require('./stories.json');

  for (const story of stories) {
    test(`${story}`, async ({ page }) => {
      await page.goto(
        `${process.env.STORYBOOK_URL}iframe.html?args=&globals=theme:side-by-side&id=${story}&viewMode=story`
      );

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules('region')
        .include('#storybook-root')
        .analyze();

      await expect(accessibilityScanResults.violations).not.toBeNull();
    });
  }
});
