// Find the sum of all numbers from 1 to 𝑛.

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(20));
