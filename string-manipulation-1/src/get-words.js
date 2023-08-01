/* exported getWords */

/*
  Define function 'getWords' that accepts one argument 'string'.
    Declare a variable 'wordList' and assign it to an empty array.
    Declare a variable 'word'.
    Declare an if statement to address an empty argument 'string'
    Begin a loop that iterates through the argument 'string' where:
      For each index in the array:
        Check if the character is a ' ' or not
          If the character is not a ' ' then use addition assignment to add the character to word.
          Else push 'word' into array 'wordList'
            Declare the variable 'word' again
      Push 'word' into array 'wordList' again to push the final word of 'string'
      Return the array 'wordList
*/

function getWords(string) {
  const wordList = [];
  let word = '';
  if (string === '') {
    return [];
  }
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== ' ') {
      word += string.charAt(i);
    } else {
      wordList.push(word);
      word = '';
    }
  }
  wordList.push(word);
  return wordList;
}
