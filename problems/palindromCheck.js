function palindrom(input) {
  let lowerCase = input.toLowerCase();
  //   let arr = lowerCase.split("");
  //   arr.reverse();
  //   let check = arr.join("");

  let check = lowerCase.split("").reverse().join("");

  if (lowerCase == check) {
    console.log(`${input} is Palindrome`);
  } else {
    console.log(`${input} is Not Palindrome`);
  }
}

palindrom("eEelleee");

// TODO: input can be number also
