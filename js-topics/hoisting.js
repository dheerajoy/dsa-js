// Hoisting is a behavior in JavaScript where variable and function declaration are moved to top of their scope during complie phase.

console.log(a); // undefined
var a = "dheeraj";
console.log(a); // dheeraj

greet(); //hello
// message(); // Cannot access 'message' before initialization

function greet() {
  console.log("Hello");
}

const message = (name) => {
  console.log(`Welcome, ${name}`);
};

message("dheeraj");
