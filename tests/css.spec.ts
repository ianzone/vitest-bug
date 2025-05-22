import { expect, test } from 'vitest';

test('getComputedStyle', () => {
  const container = document.createElement('div');
  container.style.width = '600px';
  const style = getComputedStyle(container);
  expect(style.width).toBe('600px');
  container.style.width = '300px';
  const style1 = getComputedStyle(container);
  expect(style1.width).toBe('300px');
});
