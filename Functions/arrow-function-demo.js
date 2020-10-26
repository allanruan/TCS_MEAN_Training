/**
 * Arrow functin is the concept of ES6
 * An alternative way to write a shorter syntax compared to the function or function expression
 */

// var add = function addition(a,b){
//      return a+b
//  }
// console.log(add(100,200))


// var sayHello = ()=>console.log("Hello")
// sayHello()

// console.log("-------------------------------")
// var  sayHelloWithMessage=()=>{
//     console.log('Hello Everyone')
//     console.log('Lets Learn Interesting facts about JS!!')
// }

// sayHelloWithMessage()

// console.log("======================================")
// var add  = (num1,num2)=> {return num1+num2}
// console.log(add(100,200))

// console.log("--------------------------------")
// console.log(typeof)

let numbers = [4,2,6]
numbers.sort((a,b)=>b-a);
console.log(numbers)