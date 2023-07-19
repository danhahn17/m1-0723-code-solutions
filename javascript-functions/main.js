function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  const greetName = 'Hey, ' + name;
  return greetName;
}
const greetNameResult = greet('Beavis');
console.log('greetNameResult:', greetNameResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const areaResult = getArea(17, 42);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  const personFirstName = person.firstName;
  return personFirstName;
}
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
