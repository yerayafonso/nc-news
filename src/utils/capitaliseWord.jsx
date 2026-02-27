function capitaliseWord(str) {
  const firstLetter = str.slice(0, 1).toUpperCase();
  const restOfWord = str.slice(1);

  const result = firstLetter + restOfWord;

  return result;
}

export default capitaliseWord;
