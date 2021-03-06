// Write a function that takes an array as an argument and produces a new array that has the same elements in the inverse order.

// const arr = [1, 2, 3, 4, 5];

const reverseArray = function(arr) {
  let reversedArr = [];

  for (let i = arr.length; i > 0; i--) {
    reversedArr.push(i)
  }
  return reversedArr;
}

// console.log(arr)
// console.log(reverseArray(arr));
// console.log(arr)

const arr = [1, 2, 3, 4, 5, 6];

// Write a function that reverses an array in place vs creating a new one.
const reverseArrayInPlace = function(arr) {
  // start at beginning of array, and finish when i is half the length.
  // swapping first and last indices, then second and second last, etc.
  for (let i = 0; i < Math.floor(arr.length / 2); i ++) {
    // set first element
    let elem = arr[i];
    // then set first element to equal the last
    arr[i] = arr[arr.length - 1 - i];
    // set the last element to equal the first
    arr[arr.length - 1 - i] = elem;
  }
  return arr;
}

console.log(arr);
console.log(reverseArrayInPlace(arr));
console.log(arr);