
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string and compare it to the original string
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome('abba')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('a')); // Output: true
console.log(isPalindrome('robot')); // Output: false
console.log(isPalindrome('ab')); // Output: false

/*
  Add written explanation of your solution here
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