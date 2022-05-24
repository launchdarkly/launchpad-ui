import type { Page } from '@playwright/test';
import type { AxeResults } from 'axe-core';

import AxeBuilder from '@axe-core/playwright';

export const skipRules = [
  'landmark-one-main',
  'page-has-heading-one',
  'region',
  'document-title',
  'html-has-lang',
];

export const axe = async (page: Page): Promise<AxeResults> => {
  const builder = new AxeBuilder({ page });
  builder.disableRules(skipRules);
  return await builder.analyze();
};
