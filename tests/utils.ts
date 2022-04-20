import { axe as jestAxe } from 'jest-axe';
import type { JestAxe } from 'jest-axe';
import { vi } from 'vitest';

export const axe: JestAxe = async (html: Element | string) => {
  const mockedDate = new Date();
  vi.useRealTimers();

  const results = await jestAxe(html);

  vi.useFakeTimers();
  vi.setSystemTime(mockedDate);

  return results;
};
