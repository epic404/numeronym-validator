function isNumeronym(basePhrase, testPhrase) {
  // start w/ the testPhrase and build: extractedChars & embeddedNums
  let extractedChars = [];
  let extractedNums = [];

  scanChar(0);

  /**
   * Rule:
   * The number of characters removed must be equal to the digits representing them.
   * Example 1: Brandon = Br4n -> true
   * Example 2: Brandon = Br2n -> false
   */
  if (basePhrase.length !== (extractedChars.length + getSkippedCharCount())) {
    console.log(extractedChars)
    console.log(extractedNums)
    console.log('Rule: The number of characters removed must be equal to the digits representing them.');
    return false;
  } else {
    return true;
  }

  function scanChar(index, lastWasNumber = false) {
    const currentChar = testPhrase[index];
    const isNumber = checkIsNumber(currentChar);

    if (isNumber && lastWasNumber) {
      extractedNums[extractedNums.length - 1] += currentChar;

    } else if (isNumber && !lastWasNumber) {
      extractedNums.push(currentChar);

    } else {
      const skippedCharCount = getSkippedCharCount();
      const expectedCharIndex = skippedCharCount + index;

      /**
       * Rule:
       * Characters must line-up in the same order.
       * Example 1: Brandon = Br3on -> true
       * Example 2: Brandon = Ba3on -> false
       */
      if (currentChar !== basePhrase[expectedCharIndex]) {
        console.log('Rule: Characters must line-up in the same order.');
        return false;
      }

      if (index < testPhrase.length) {
        extractedChars.push(currentChar);
      }
    }

    scanChar(index + 1, isNumber);
  }

  function checkIsNumber(char) {
    return !isNaN(parseInt(char));
  }

  function getSkippedCharCount() {
    return extractedNums.reduce((previous, current) => previous + parseInt(current), 0);
  }
}



module.exports = isNumeronym;