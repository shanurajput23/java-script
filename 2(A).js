//Take a sentence as an input and reverse every word in that sentence. 
//a. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWordsInSentence(sentence) {
    let reversedSentence = ''; 
    function reverseWord(word) {
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      return reversedWord;
    }
    
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (char === ' ' || i === sentence.length - 1) {
        reversedSentence += reverseWord(word);
        word = ''; 
        if (i !== sentence.length - 1) {
          reversedSentence += ' '; 
        }
      } else {
        word += char;
      }
    }
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence);
  