/**
 * Data Members of class
 *  1. Instance(object) Members
 *      Instance members are members of class type and its instance.
 *      Within costructor, function or properties, they represent the objects of a class
 *      memory gets allocated to instance members whenever an object is created
 *  2. Static Members
 *      They are declared with static keyword
 *      these members will represent to/by the class not by the instance
 *      Memory gets allocated only once to static members and can be shared by all isntances.
 *      they don't belong to object. always belongs to the class
 *      Memory gets allocated to staic members only once just before creating the very first object of the class.
 */
class Employee {
    // Instance Data members (Attribute)
    private empCode: number;
    private empName: string;
    private empAge: number;


    //Static Data Members
    readonly companyName: string;
    private static country: string;

    constructor(eCode:number,eName: string,eAge:number) {
        this.empCode = eCode;
        this.empName = eName;
        this.empAge = eAge;
        this.companyName = "Simplilearn";
        Employee.country = "India";
    }
    //Member Function (Methods or Behavior)
    displayDetails(){
        console.log(`Employee Code: ${this.empCode}`)
        console.log(`Employee Name: ${this.empName}`)
        console.log(`Employee Age : ${this.empAge}`)
        console.log(`Company Name : ${this.companyName}`)
        console.log(`Country : ${Employee.country}`)
        
    }
}

var emp1 = new Employee(1001,"Kartik Sharma", 23);
var emp2 = new Employee(1002,"Gautam Bhalla", 34);
this.companyName = "Simplilearn Pvt.Ltd";
emp1.displayDetails()
console.log("-------------------------------------")
emp2.displayDetails()