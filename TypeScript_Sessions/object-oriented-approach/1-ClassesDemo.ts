/**
 * A class is a blue print or a User Defined Data Type.
 * A class is a collection of data members and member functions
 * Data Members are the variables at class level. (Attribute)
 * Member Function (Methods) are the function at class level. (Behavior)
 * var emp = new Employee();
 * a variable of employee type
 * It is known as an object i.e. the represenotator of a class.
 * Whenever we declare the object, memory allocated to data members.
 * Member Function gets memory when they are invoked
 */


class Employee {
    // Data members (Attribute)
    empCode: number = 1001;
    empName: string = "Kartik Sharma";
    empAge: number = 23;

    Employee() {
        this.empCode = 1001;
        this.empName = "Shreya"
        this.empAge = 34;
    }
    //Member Function (Methods or Behavior)
    displayDetails(){
        console.log(`Employee Code: ${this.empCode}`)
        console.log(`Employee Name: ${this.empName}`)
        console.log(`Employee Age : ${this.empAge}`)
    }
}

var emp = new Employee();
console.log(`${emp.empCode}:${emp.empName}:${emp.empAge}`)
emp.displayDetails()