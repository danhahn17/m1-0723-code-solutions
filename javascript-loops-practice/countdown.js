/* exported countdown */

function countdown(number) {
  const numbers = [];
  let start = number;
  while (start >= 0) {
    numbers.push(start);
    start--;
  }
  return numbers;
}
