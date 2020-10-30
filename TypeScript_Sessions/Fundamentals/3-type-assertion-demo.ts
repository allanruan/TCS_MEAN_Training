
// //implicit casting
// var value: any = 100;
// // var moreValue = value;
// var moreValue = <number>value;

// console.log(value);
// console.log(moreValue)

// console.log(typeof(value))
// console.log(typeof(moreValue))

// var customer = {};
// customer.custCode = 1001; //Compile Time Error
// customer.custName = "King kochhar"; //Compile Time Error

interface Customer {
    custCode: number;
    custName: string;
}

var cust1= <Customer>{custCode: 1001, custName: "Shreya", custAge:23}
var cust2= <Customer>{custCode: 1002, custName: "Bhawna"}
console.log(cust1)
console.log(cust2)