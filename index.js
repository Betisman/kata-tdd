module.exports = () => {
  const fizzbuzz = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) fizzbuzz.push('Fizz');
    else if (i === 5) fizzbuzz.push('Buzz');
    else fizzbuzz.push(i);
  }
  return fizzbuzz;
};