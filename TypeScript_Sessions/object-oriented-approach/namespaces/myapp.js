"use strict";
exports.__esModule = true;
var myNamespace_1 = require("./myNamespace");
var salEmp = new myNamespace_1.SalariedNameSpace.Employee("Shreya", "Bhalla");
salEmp.showDetails();
var contEmp = new myNamespace_1.ContractualNamespace.Employee("Shreya", "Bhalla");
contEmp.showDetails();
