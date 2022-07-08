/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}): ReturnType<typeof render> =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
