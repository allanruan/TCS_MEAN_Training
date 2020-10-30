"use strict";
exports.__esModule = true;
exports.SalariedNameSpace = exports.ContractualNamespace = void 0;
var ContractualNamespace;
(function (ContractualNamespace) {
    var Employee = /** @class */ (function () {
        function Employee(fName, lName) {
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "Contractual";
        }
        Employee.prototype.showDetails = function () {
            console.log(this.firstName + " " + this.lastName + " works as " + Employee.empType + " Employee.");
        };
        return Employee;
    }());
    ContractualNamespace.Employee = Employee;
})(ContractualNamespace = exports.ContractualNamespace || (exports.ContractualNamespace = {}));
var SalariedNameSpace;
(function (SalariedNameSpace) {
    var Employee = /** @class */ (function () {
        function Employee(fName, lName) {
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "Salaried";
        }
        Employee.prototype.showDetails = function () {
            console.log(this.firstName + " " + this.lastName + " works as " + Employee.empType + " Employee.");
        };
        return Employee;
    }());
    SalariedNameSpace.Employee = Employee;
})(SalariedNameSpace = exports.SalariedNameSpace || (exports.SalariedNameSpace = {}));
