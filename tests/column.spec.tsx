import { Chart } from '@antv/g2';
import { expect, test } from 'vitest';

test('basic G2 chart', () => {
  const chart = new Chart({
    container: document.createElement('div'),
    width: 400,
    height: 300,
  });
  expect(chart).toBeDefined();
});
