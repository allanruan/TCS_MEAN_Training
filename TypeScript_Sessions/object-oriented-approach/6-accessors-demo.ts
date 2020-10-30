
/**
 * TypeScript also supports get/set accessors to access and to set the value to a 
 * member of an object. This way, we can also control over how a ember of an object
 * is accessed or set
 * have to use tsc .\6-accessors-demo.ts --target es6
 */

 class Employee {
    private _empCode: number;
    private _empSalary: number

    get empCode(): number{
        return this._empCode;
    }

    set empCode (newEmpCode: number){
        this._empCode = newEmpCode;
    }
    get empSalary(): number{
        return this._empSalary;
    }

    set empSalary (newSalary: number){
        this._empSalary = newSalary;
        if(newSalary<5000){
            // console.log('Minimum Salary should be 5000..!!')
            throw new Error("Error : Minimum Salary Should be 5000..!!")
        }else{
            this._empSalary = newSalary;
        }
    }
    
 }

 var emp = new Employee();
 emp.empCode = 1002;
 console.log(emp.empCode);
 emp.empSalary = 2000;
 console.log(emp.empSalary)