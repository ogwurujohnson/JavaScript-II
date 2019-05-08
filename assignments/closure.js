// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const Johnson = () => {
  const name = 'Johnson Ogwuru';

  return () => {
    const address = 'lagos, nigeria';
    return `my name is ${name} i stay in ${address}`;
  }
};
const me = Johnson();
console.log(me());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count ++;
    return count;
  }
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  count = 0;
  return {
    increment() {
      count ++;
      return count;
    },
    decrement() {
      count --;
      return count;
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

console.log(counterFactory().decrement());
console.log(counterFactory().increment());

