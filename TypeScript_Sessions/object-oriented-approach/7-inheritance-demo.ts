/**
 * Inheritance helps in reusability of code and to reduce the time and effort of developer
 * We can acquire the features and behaviors of a class into another class.
 * parent Class/Super Class/Base Class
 * Child Class/Sub Class/Derived Class
 */

 class Person {
     private name: string;
     private age: number;
     private city: string;

     constructor(name: string, age: number, city: string){
         this.name = name;
         this.age = age;
         this.city = city;
     }
     displayDetails(): void {
        console.log(`Name : ${this.name} : Age : ${this.age} : City : {this.city}`)
     }
 }
 //Employee class inheritys Person class
 class Employee extends Person{
     private salary: number;
     private jobType: string;
 
    constructor(name: string, age:number, city:string, salary:number, jobtype:string){
        super(name,age,city);
        this.salary = salary;
        this.jobType=jobtype;
    }
    displayDetails(): void{
        super.displayDetails();
        console.log(`Salary : ${this.salary} : JobType : ${this.jobType}`)
    }
 }
    var emp = new Employee("King",23,"New York",12000,"Permanent");
    emp.displayDetails();