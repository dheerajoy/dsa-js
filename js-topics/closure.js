// function will retain access to its outer scope variables, even after outer function has executed.
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
