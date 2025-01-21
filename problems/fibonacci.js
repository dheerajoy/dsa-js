// fibonacci sequence

function fibonacci(number) {
  let n1 = 0,
    n2 = 1,
    next;

  let sequence = [];
  for (i = 0; i <= number; i++) {
    sequence.push(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  return console.log(`Fibonacci : ${sequence}`);
}

fibonacci(15);
