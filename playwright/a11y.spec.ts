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

      await page.addScriptTag({
        content: `
          async function __getContext(storyId) {
            return globalThis.__STORYBOOK_PREVIEW__.storyStore.loadStory({ storyId });
          }
        `,
      });

      const storyContext = await page.evaluate(({ storyId }) => globalThis.__getContext(storyId), {
        storyId: story,
      });

      // Skip stories that disable a11y
      if (storyContext.parameters?.a11y?.disable) {
        return;
      }

      const root = page.locator('#storybook-root');
      await root.waitFor();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules([
          'region',
          'landmark-unique',
          'landmark-one-main',
          'page-has-heading-one',
          'scrollable-region-focusable',
        ])
        .include('#storybook-root')
        .include('[data-test-id="portal"]')
        .analyze();

      await expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
