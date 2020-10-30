// /**
//  * data types in TypeScript
//  * String
//  * Number
//  * Boolean
//  * Array
//  * Tuple
//  * Enum
//  * Union
//  * Any
//  * Void
//  * Never
//  */
// var firstName: string = 'John';
// var lastName: String = 'Smith'; 
// console.log(firstName);
// console.log(lastName);
// console.log(firstName + " " + lastName)
// var str: string = 'Hello TypeScript';
// console.log(str.charAt(0))
// console.log(str.charAt(2))
// let str1: string='Hello';
// let str2: string='TypeScript';
// console.log(str1.concat(str2));
// console.log(str1.concat(' ', str2));
// console.log(str1.concat(' Mr. ', 'Bond'));
// //Boolean Type
// var isPresent: boolean = true;
// if(isPresent)
//     console.log('Good..')
// else
//     console.log('Bad')
// //Array Type
// var names: Array<string> = ["John", "Smith", "Karah"];
// console.log(names)
// var values1: Array<string|number> =["John", "Smith", "Karah",123];
// console.log(values1)
// var values2: (string|number)[] =["John", "Smith", "Karah",123];
// console.log(values2)
// Tuple Type: a new DT that can contain two values of different data types in one variable
// var customerCode: number = 1001;
// var customerName: string="King";
// var customerDetail:[number, string] = [1001,"King Kochhar"];
// console.log(customerDetail)
// var userDetail: [number, string, boolean, number, string]; // declare a tuple
// userDetail = [101, 'King',true,20,'Admin']; //order matters
// console.log(userDetail);
// var customerDetail: [number,string][];
// customerDetail = [[1001,"King Kochhar"],[1001,"King Kochhar"],[1001,"King Kochhar"]];
// console.log(customerDetail)
// for(var [x,y] of customerDetail){
//     console.log([x,y])
// }
// var customerDetail: [number, string]=[1001,"KingKochhar"];
// customerDetail.push(1002,"Bhawna");
// customerDetail.push(1003,"Shreya");
// console.log(customerDetail)
var customerDetail = [1001, "KingKochhar"];
console.log(customerDetail[0]);
console.log(customerDetail[1]);
customerDetail[1] = customerDetail[1].concat("something");
console.log(customerDetail[0]);
console.log(customerDetail[1]);
//----------------------------------------------------
//union
var experience;
experience = 2;
experience = "2 year";
function displayType(code) {
    if (typeof (code) === "number") {
        console.log("code is a number");
    }
    else {
        console.log("code is a string");
    }
}
displayType(123);
displayType("ABC");
