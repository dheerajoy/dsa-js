// Promise are object that represents eventual complition or rejection of a asynchronus operation.

const task = new Promise((resolve, reject) => {
  setTimeout(() => resolve(console.log("completed")), 1000);
});

task
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
