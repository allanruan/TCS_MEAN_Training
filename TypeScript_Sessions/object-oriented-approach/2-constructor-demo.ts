class Employee {
    // Data members (Attribute)
    empCode: number;
    empName: string;
    empAge: number;

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