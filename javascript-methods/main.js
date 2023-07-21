const a = 1;
const b = 2;
const c = 3;
const maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

const heroes = ['Batman', 'Iron Man', 'Spiderman', 'Thor'];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Crying in HMart',
    author: 'Michelle Zauner',
  },
  {
    title: 'Ender"s Game',
    author: 'Orson Scott Card',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Daniel Hahn';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
