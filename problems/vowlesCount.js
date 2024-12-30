const vowles = ["a", "e", "i", "o", "u"];

function vowlesCheck(input) {
  let lowerCase = input.toLowerCase();
  let check = lowerCase.split("");
  console.log(check);
  let sum = 0;
  for (const iterator of check) {
    let count = 0;
    console.log(iterator);
    sum = count + 1;
  }
  console.log(sum);
}

vowlesCheck("Man who sold his ferrari");
