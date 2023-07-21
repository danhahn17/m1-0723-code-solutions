/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  return number < 5;
}
console.log('4 is under 5:', isUnderFive(4));
console.log('10 is under 5:', isUnderFive(10));
console.log('5 is under 5:', isUnderFive(5));

function isEven(number) {
  return number % 2 === 0;
}
console.log('4 is even:', isEven(4));
console.log('10 is even:', isEven(10));
console.log('5 is even:', isEven(5));

function startsWithJ(string) {
  return string.charAt(0) === 'J';
}
console.log('Javascript starts with J:', startsWithJ('Javascript'));
console.log('PHP starts with J:', startsWithJ('PHP'));
console.log('HTML starts with J:', startsWithJ('HTML'));
console.log('Java starts with J:', startsWithJ('Java'));
console.log('Kotlin starts with J:', startsWithJ('Kotlin'));
console.log('C# starts with J:', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
const bart = {
  name: 'Bartholomew Jojo Simpson',
  age: 10,
};
console.log('Bart is old enough to drink:', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log('Homer is old enough to drink:', isOldEnoughToDrink(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
const Daniel = {
  name: 'Daniel Hahn',
  age: 26,
};
console.log(
  'Daniel is old enough to drink and drive:',
  isOldEnoughToDrinkAndDrive(Daniel)
);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else if (pH) {
    return 'invalid pH level';
  }
}
console.log('pH level of -1:', categorizeAcidity(-1));
console.log('pH level of 14.0000001:', categorizeAcidity(14.0000001));
console.log('pH level of 7:', categorizeAcidity(7));
console.log('pH level of 2:', categorizeAcidity(2));
console.log('pH level of 9:', categorizeAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('Yakko:', introduceWarnerBro('yakko'));
console.log('Wakko:', introduceWarnerBro('wakko'));
console.log('Dot:', introduceWarnerBro('dot'));
console.log('Cody:', introduceWarnerBro('cody'));
console.log('Minerva:', introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Spider-Man: No Way Home';
    case 'comedy':
      return 'Good Boys';
    case 'horror':
      return 'Insidious';
    case 'drama':
      return 'Oppenheimer';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not regulated. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
console.log('Movie - Action:', recommendMovie('action'));
console.log('Movie - Comedy:', recommendMovie('comedy'));
console.log('Movie - Random:', recommendMovie('random'));
