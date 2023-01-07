import { LogarithmicRegression } from '..';

describe('test LogarithmicRegression', () => {
  const x = [1.5, 2.5, 3.5, 5.0, 7.5];
  const y = [0, 1, 2, 3, 4];
  const result = new LogarithmicRegression(x, y);
  expect(result);
});
