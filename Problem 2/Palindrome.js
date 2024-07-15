const isPalindrome = function (s) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');

  // Check if the normalized string is equal to its reverse
  return normalizedStr === reversedStr;
};

const input = 'A man, a plan, a canal, Panama';
const result = isPalindrome(input);
console.log(result);
