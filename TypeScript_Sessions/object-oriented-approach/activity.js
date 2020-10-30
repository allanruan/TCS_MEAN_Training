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
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        this.ID = id;
        this.Name = name;
        this.Age = age;
    }
    Student.prototype.displayDetails = function () {
        console.log("ID : " + this.ID + " : Name : " + this.Name + " : Age : " + this.Age);
    };
    return Student;
}());
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks(id, name, age, ObjMarks, SubjMarks) {
        var _this = _super.call(this, id, name, age) || this;
        _this.ObjMarks = ObjMarks;
        _this.SubjMarks = SubjMarks;
        return _this;
    }
    Marks.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("ObjMarks : " + this.ObjMarks + " : SubjMarks : " + this.SubjMarks);
    };
    return Marks;
}(Student));
var Sports = /** @class */ (function (_super) {
    __extends(Sports, _super);
    function Sports(id, name, age, ObjMarks, SubjMarks, score) {
        var _this = _super.call(this, id, name, age, ObjMarks, SubjMarks) || this;
        _this.Score = score;
        return _this;
    }
    Sports.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("score : " + this.Score);
    };
    return Sports;
}(Marks));
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Result.prototype.calculateResult = function () {
        this.totalMarks = this.ObjMarks + this.SubjMarks + this.Score;
        this.averageMarks = this.totalMarks / 3;
        console.log("Total Marks : " + this.totalMarks + " : Avg marks : " + this.averageMarks);
    };
    return Result;
}(Sports));
var student = new Student(123, "Allan", 27);
var marks = new Marks(123, "Allan", 27, 100, 99);
var sports = new Sports(123, "Allan", 27, 100, 99, 97);
var result = new Result(123, "Allan", 27, 100, 99, 97);
student.displayDetails();
console.log("--------------------------------");
marks.displayDetails();
console.log("--------------------------------");
sports.displayDetails();
console.log("--------------------------------");
result.calculateResult();
