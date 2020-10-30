//Class  in JavaScript,  js does not support full OOP,  no class  keyword
// function Person(fName,lName){
//     this.firstName = fName || 'Unknown';
//     this.lastName = lName  ||'Unknown';
//     this.getFullName = ()=> {
//         return  `${this.firstName} ${this.lastName}`
//     }
// }

//create Object Constructor
// var person = new Person();
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person["firstName"])
// console.log(person["lastName"])
// console.log(person.getFullName())


// var p1 = new Person('King','Kochhar')
// console.log(p1.getFullName())
// var p2= new Person('Bhawna', 'Gunwani')
// console.log(p2.getFullName())
// var p3 = new Person('Avin','Grewal')
// console.log(p3.getFullName())
// var p4 = new Person()
// console.log(p4.getFullName())

function Person(fName,lName){
    this.firstName = fName || 'Unknown';
    this.lastName = lName  ||'Unknown';
    //PascalCase  for properties
    // Object.defineProperties(this,{
    //     "FirstName": {
    //         get:function() {return  this.firstName},
    //         set:function(value) {this.firstName = value}
    //     },
    //     "LastName": {
    //         get:function() {return  this.lastName},
    //         set:function(value) {this.lastName = value}
        
    //     }
    // })
}

var p1 = new Person();
console.log(p1.firstName)
//Only works because we  defined setter property
p1.FirstName = "Bhawna";
console.log(p1.FirstName)
p1.LastName =  "Gunwani"
console.log(p1.LastName)