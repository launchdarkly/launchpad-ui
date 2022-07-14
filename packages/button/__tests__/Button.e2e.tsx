import { test, expect } from '@playwright/experimental-ct-react';

import { Button } from '../src';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<Button>test</Button>);
  await expect(component).toContainText('test');
});
