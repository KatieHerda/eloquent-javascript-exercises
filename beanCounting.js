/* Write a function that takes in a string as it's only argument and returns a number that indicates how many uppercase B's are in the string.
*/

function countBs(string) {
  let numBs = 0;
  for (let i = 0; i < string.length; i++) { 
    if (string[i] === "B" || string[i] === "b") {
    numBs += 1;
    }
  }
  return numBs;
};

console.log(countBs("BBC"));


/* Write a function that behaves like countBs but takes a second argument to indicate which character you want to count.
*/
function countChar(string, character) {
  let numCounted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      numCounted += 1;
    }
  }
  return numCounted;
};

console.log(countChar("kakkerlak", "k"));
console.log(countChar("My name is katie and I really like apples.", "a"))