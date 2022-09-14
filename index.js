export default function isNumeronym(basePhrase, testPhrase) {
  // start w/ the testPhrase and build: extractedChars & embeddedNums
  // iterate through testPhrase and recursively check:
    // is this character in the basePhrase (have it be a value here and minus each letter as you go, if it isn't in the remaining phrase chars then return false)
    // is this character a number? Have a flag like "lastCharWasNumber" or something and if it is then build on that number, else add a new entry in the numbers array.
    // by the end we want to havea extractedChars with only letters, and the embeddedNums which is an array of the numbers embedded
  // Then we can check if the added-up numbers is equal to the count of missing letters from the basePhrase
  // And then build the same extractedChars by taking the basePhrase and slicing it up w/ the embeddedNums
  // And check if its equal to the extractedChars from up top.
}