/* exported isVowel */

function isVowel(char) {
  const lowerCase = char.toLowerCase();
  return (
    lowerCase === 'a' ||
    lowerCase === 'e' ||
    lowerCase === 'i' ||
    lowerCase === 'o' ||
    lowerCase === 'u'
  );
}
