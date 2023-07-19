function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  console.log(
    'The number of seconds in ' +
      minutes +
      ' minutes is ' +
      seconds +
      ' seconds.'
  );
}
convertMinutesToSeconds(5);

function greet(name) {
  const greetName = 'Hey, ' + name;
  console.log(greetName);
}
greet('Beavis');

function getArea(width, height) {
  const area = width * height;
  console.log(
    'The area of a figure with a width of ' +
      width +
      ' and a height of ' +
      height +
      ' has an area of ' +
      area +
      '.'
  );
}
getArea(17, 42);

function getFirstName(person) {
  const personFirstName = person.firstName;
  console.log('The first name of the person is ' + personFirstName + '.');
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  console.log('The last element in the array is ' + lastElement + '.');
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
