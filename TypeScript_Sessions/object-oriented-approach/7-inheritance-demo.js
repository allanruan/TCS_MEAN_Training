/**
 * Inheritance helps in reusability of code and to reduce the time and effort of developer
 * We can acquire the features and behaviors of a class into another class.
 * parent Class/Super Class/Base Class
 * Child Class/Sub Class/Derived Class
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.displayDetails = function () {
        console.log("Name : " + this.name + " : Age : " + this.age + " : City : {this.city}");
    };
    return Person;
}());
//Employee class inheritys Person class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, city, salary, jobtype) {
        var _this = _super.call(this, name, age, city) || this;
        _this.salary = salary;
        _this.jobType = jobtype;
        return _this;
    }
    Employee.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Salary : " + this.salary + " : JobType : " + this.jobType);
    };
    return Employee;
}(Person));
var emp = new Employee("King", 23, "New York", 12000, "Permanent");
emp.displayDetails();
