// Write a range function that takes two arguments start to end and returns an array containing all the numbers from start up and including end.

const range = function(start, end) {
  let rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i)
  }
  return rangeArr;
}
// console.log(range(1, 5))

// Write a sum function that takes an array of numbers and returns the sum of these numbers.
const arr = [1, 2, 3, 4, 5, 6, 7];

const sumOfRange = function(arr) {
  let finalSum = 0;

  for (const num of arr) {
    finalSum += num;
  }
  return finalSum;
}

console.log(sumOfRange(arr));
