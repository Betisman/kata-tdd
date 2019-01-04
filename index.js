module.exports = () => {
  const fizzbuzz = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) fizzbuzz.push('Fizz');
    else fizzbuzz.push(i);
  }
  return fizzbuzz;
};