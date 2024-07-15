function groupAnagrams(strs) {
  const groups = {};

  for (let str of strs) {
    // Sort the string characters
    const sortedStr = str.split('').sort().join('');

    // Use the sorted string as a key
    if (!groups[sortedStr]) {
      groups[sortedStr] = [];
    }

    // Add the original string to the group
    groups[sortedStr].push(str);
  }

  // Return the grouped anagrams
  return Object.values(groups);
}

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const output = groupAnagrams(input);
console.log(output);
