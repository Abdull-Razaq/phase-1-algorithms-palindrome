function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("");

  if (word === reverseWord) {
      return true;
  } else {
      return false;
  }
}

/* 
  Add your pseudocode here
  Code to check whether words are of palindrome nature
  Check whether a string passed is a palindrome; if a palindrome passes true else passes false
  let isPalindrome = string;
  if (string == Palindrome){ return true }
  else ( rerturn false)
*/

/*
  Add written explanation of your solution here
  The above code receives a string and checks whether the string is of Palindrome nature; if it fulfils the condition a true boolean value is passed and the vice versa is true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
