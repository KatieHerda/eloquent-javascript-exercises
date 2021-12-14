//Define a recursive function that accepts a single parameter (positive or negative whole number) and returns a boolean.

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num > 0) {
    return isEven(num - 2)
  } else {
    return isEven(- num);
  }
};

console.log(isEven(-9));
console.log(isEven(4));
