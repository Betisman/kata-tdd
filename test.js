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

test('5 (index 4) has to be Buzz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[4]).toBe('Buzz');
});

test('10 (index 9) has to be Buzz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[9]).toBe('Buzz');
});

test('15 (index 14) has to be FizzBuzz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[14]).toBe('FizzBuzz');
});

test('30 (index 29) has to be FizzBuzz', () => {
  const fbArray = fizzbuzz();
  expect(fbArray[29]).toBe('FizzBuzz');
});