// Find the letter count present in the string. For example, 'Aruna' → Output: {a: 2, r: 1, u: 1, n: 1}.

function count(str) {
  let obj = {};

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
  }
  return obj;
}

console.log(count("eeeErj"));
