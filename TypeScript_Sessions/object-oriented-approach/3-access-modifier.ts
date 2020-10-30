/**
 * Public - selected by default
 *  All members are by default public
 *  So you dont need to prefix members with public keyword
 *  they will be accesible everywhere without restriction
 * Private
 *  A private member cant be accessed outside of its containing class.
 *  its accessible only in its own class
 *  
 * Protected
 *  A protected member cannot be access outside of its class
 *  only children or its class can access
 */
class Employee {
    // Data members (Attribute)
    private empCode: number;
    private empName: string;
    private empAge: number;

    constructor(eCode,eName,eAge) {
        this.empCode = eCode;
        this.empName = eName;
        this.empAge = eAge;
    }
    //Member Function (Methods or Behavior)
    displayDetails(){
        console.log(`Employee Code: ${this.empCode}`)
        console.log(`Employee Name: ${this.empName}`)
        console.log(`Employee Age : ${this.empAge}`)
    }
}

var emp1 = new Employee(1001,"Kartik Sharma", 23);
console.log(`${emp1.empCode} : ${emp1.empName} : ${emp1.empAge}`)
emp1.displayDetails()

var emp2 = new Employee(1002,"Gautam Bhalla", 34);
console.log(`${emp2.empCode} : ${emp2.empName} : ${emp2.empAge}`)
emp2.displayDetails()