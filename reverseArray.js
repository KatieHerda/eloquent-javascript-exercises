// Write a function that takes an array as an argument and produces a new array that has the same elements in the inverse order.

const arr = [1, 2, 3, 4, 5];

const reverseArray = function(arr) {
  let reversedArr = [];

  for (let i = arr.length; i > 0; i--) {
    reversedArr.push(i)
  }
  return reversedArr;
}

// console.log(reverseArray(arr));

const reverseArrayInPlace = function() {

}