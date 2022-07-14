// 1. Write a function that takes a number and returns true 
// if it is a positive number and false if it is a negative number.
function positiveOrNegativeNumber(num) {
  if (Math.sign(num) >=  0) {
    return true;
  }

    return false
}
console.log(positiveOrNegativeNumber(2));
console.log(positiveOrNegativeNumber(-3));
console.log(positiveOrNegativeNumber(0));
console.log(positiveOrNegativeNumber(389));
