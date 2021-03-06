// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// callback function
function outputCallback(message) {
  console.log(message);
}

// problem 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const length = arr.length;
  cb(length);
}

getLength([1,2,3,4], outputCallback);
// or 
getLength([1,2,3,4], (message) => {
  console.log(message);
});


// problem2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const last = arr[arr.length-1];
  cb(last);
}
last([1,2,3,5], outputCallback);
// or 
last([1,2,3,5], (error) => {
  console.log(error);
});



// problem 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  cb(sum);
}
sumNums(2,4,outputCallback);
// or
sumNums(2,4, (sum) => {
  console.log(sum);
});



// problem 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiply = x*y;
  cb(multiply);
}
multiplyNums(2,2,outputCallback);
// or
multiplyNums(2,2,(mult) => {
  console.log(mult);
});


// problem 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}
contains(5, [1,2,3], outputCallback);
// or
contains(2, [1,2,3], (status) => {
  console.log(status);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniq = [...new Set(array)];
  cb(uniq);
}

removeDuplicates([1,2,3,1,2,4,5,6,7,5,9,5], outputCallback);
removeDuplicates([1,2,3,1,2,4,5,6,7,5,9,5], (noduplicate) => {
  console.log(noduplicate);
});
