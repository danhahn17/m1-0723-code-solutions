/* exported oddOrEven */

function oddOrEven(numbers) {
  const oddEven = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEven.push('even');
    } else if (numbers[i] % 2 === 1) {
      oddEven.push('odd');
    }
  }
  return oddEven;
}
