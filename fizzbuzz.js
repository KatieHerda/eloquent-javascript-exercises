/* Write a program that uses console.log to print all numbers from 1 to 100. 
For numbers divisible by 3, print "Fizz"
For numbers divisible by 5, print "Buzz"
For numbers divisible by both 3 and 5, print "FizzBuzz"
*/

for(let num = 1; num <= 100; num++){
  if(num % 3 === 0 && num % 5 === 0){
  console.log("FizzBuzz");
  } else if (num % 3 === 0){
  console.log("Fizz")
  } else if(num % 5 === 0){
  console.log("Buzz")
  } else {
    console.log(num)
  }
};
