//Write a function that takes two arguments and returns their minimum.

const minNum = function(a, b) {
  let result = b;

  if (a < b) {
    result = a;
  }

  return result;
}

console.log(minNum(35, 30))