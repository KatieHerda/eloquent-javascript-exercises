/* Write a function that takes in a string as it's only argument and returns a number that indicates how many uppercase B's are in the string.
*/

function countBs(string) {
  let numBs = 0;
  for (let i = 0; i < string.length; i++) { 
    if (string[i] === "B") {
    numBs += 1;
    }
  }
  return numBs;
};

console.log(countBs("BBC"));
