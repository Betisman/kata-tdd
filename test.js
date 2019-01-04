const fizzbuzz = require('./index');

test('prints 100 elements', () => {
  expect(fizzbuzz().length).toBe(100);
});