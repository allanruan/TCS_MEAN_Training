
// Declare a number as variable
var num1 = 100;

console.log(num1);
console.log(typeof num1);

// Declare a number as object
var number1 = new Number(1000);
var number2 = new Number(1000);
var number3 = number1;

console.log(number1 == number2);    // False, because these are two different object.
console.log(number1 === number2);   // False
console.log(number3 == number1);    // True
console.log(number3 === number1);   // True

/**
 * == : operator compares number object and not the values
 * === : operator compares object/type and value
 */