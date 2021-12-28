// Write a function that builds up a list structure, taking an array as an argument
const arr = [1, 2, 3]

const arrayToList = function(arr) {
  //first you have to know the structure of a list is this {value:whatevervalue, next:otherlist}
  let result = {value:undefined, next:undefined};// this is the begin of the list a have never lose it
  let pointer = result; // This binding points to the same value that result.
  
  for (let val of arr) {// This loop iterates for each element inside the array and extracts the value first 1, then 2, and so on.
    pointer.value = val;// pointer.value == undefined -> pointer.value == 1 at first iteration
    pointer.next = {value:undefined, next:undefined}; //Create a new list inside the pointer.next before its value was undefined.
    pointer = pointer.next;// now change the pointer for the next list, for the next iteration, and the result is waiting while the pointer creates the whole list.
  }
  console.log(result);
}

arrayToList(arr);
