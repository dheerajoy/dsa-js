// debounce
/* It ensure a function is exectued only after a certain period of time since the last time it was invoked */

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Function executed!");
}, 2000);

debouncedFunction();
