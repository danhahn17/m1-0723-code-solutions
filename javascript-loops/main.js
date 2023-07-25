/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumberstoTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word + ' ';
    count++;
  }
  return repeated;
}
console.log('repeatWord:', repeatWord('Daniel', 4));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}
console.log('logEachCharacter (Empty String):', logEachCharacter(' '));
console.log('logEachCharacter (Name):', logEachCharacter('Daniel'));
console.log(
  'logEachCharacter (Sentence):',
  logEachCharacter('Today is Tuesday')
);

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}
console.log('doubleAll example1:', doubleAll([1, 2, 3, 4]));
console.log('doubleAll example2:', doubleAll([2, 4, 6, 8]));

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys example1:', getKeys({ name: 'Daniel', age: 26, pets: 1 }));
console.log(
  'getKeys example2:',
  getKeys({
    favoriteSport: 'volleyball',
    favoriteFood: 'pasta',
    favoriteMovie: 'La La Land',
  })
);

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(
  'getValues example1:',
  getValues({ name: 'Daniel', age: 26, pets: 1 })
);
console.log(
  'getValues example2:',
  getValues({
    favoriteSport: 'volleyball',
    favoriteFood: 'pasta',
    favoriteMovie: 'La La Land',
  })
);
