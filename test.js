const fizzbuzz = require('./index');

test('prints 100 elements', () => {
  expect(fizzbuzz().length).toBe(100);
});

// test('index is same (-1) number than value', () => {
//   const fbArray = fizzbuzz();
//   for (let i = 0; i < fbArray.length; i++) {
//     expect(fbArray[i]).toBe(i+1);
//   }
// });

test('index 0 has to be 1', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[0]).toBe(1);
});

test('3 (index 2) has to be Fizz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[2]).toBe('Fizz');
});

test('6 (index 5) has to be Fizz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[5]).toBe('Fizz');
});
