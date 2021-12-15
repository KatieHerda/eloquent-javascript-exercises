//Write a range function that takes two arguments start to end and returns an array containing all the numbers from start up and including end.

const range = function(start, end) {
  let rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i)
  }
  return rangeArr;
}

console.log(range(1, 5))