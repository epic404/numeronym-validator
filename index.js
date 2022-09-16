module.exports = function isNumeronym(basePhrase, testPhrase) {
  let extractedChars = [];
  let extractedNums = [];
  const scanResult = scanChar(0);

  // Rule: Characters removed must be equal the digits representing them.
  if (basePhrase.length !== (extractedChars.length + getSkippedCharCount())) {
    return false;
  } else {
    return scanResult;
  }

  function scanChar(index, lastWasNumber = false) {
    const currentChar = testPhrase[index];
    const isNumber = checkIsNumber(currentChar);
    const nextIndex = index + 1;

    if (isNumber && lastWasNumber) {
      extractedNums[extractedNums.length - 1] += currentChar;
      
    } else if (isNumber && !lastWasNumber) {
      extractedNums.push(currentChar);
      
    } else {
      const skippedCharCount = getSkippedCharCount();
      const expectedCharIndex = skippedCharCount + extractedChars.length;

      // Rule: Characters must line-up in the same order.
      if (currentChar !== basePhrase[expectedCharIndex]) {
        return false;
      }

      extractedChars.push(currentChar);
    }

    if (nextIndex < testPhrase.length) {
      return scanChar(nextIndex, isNumber);
    } else {
      return true;
    }
  }

  function checkIsNumber(char) {
    return !isNaN(parseInt(char));
  }

  function getSkippedCharCount() {
    return extractedNums.reduce((previous, current) => previous + parseInt(current), 0);
  }
}
