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

// 2. Write a function that takes a number of days and converts it into an age.




// 3. Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);

}
console.log(getLargestNumber(2, 1, 4));