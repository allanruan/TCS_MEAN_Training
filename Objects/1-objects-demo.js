// // Empty  Literal
// var  person  =  {};
// console.log(person)
// //Object literal with properties
// var person = {
//     firstName:  'King',
//     lastName: 'Smith',
// }
// console.log(person)
// //Object literals  with  properties and Methods
// var  person = {
//     firstName: 'King',
//     lastName: 'Smith',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person)
// var  emp1 =  {
//     name:  'King Kochhar',
//     age:  23,
//     city:  'Delhi'

// }

// var  emp2  = {
//     name: 'Gautam Bhalla',
//     age:34,
//     city:  'Mumbai'
// }

// console.log(person)

var person = {
    firstName:  'King',
    lastName: 'Smith',
    getFullName:  function(){
        return  `${this.firstName} ${this.lastName}`
    }
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.getFullName())
