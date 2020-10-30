"use strict";
//Import the classes from myModules.ts
exports.__esModule = true;
var myModule_1 = require("./myModule");
var emp = new myModule_1.Employee("King", "Kochhar");
emp.showDetails();
var student = new myModule_1.Student("Shreya", 23);
student.showDetails();
