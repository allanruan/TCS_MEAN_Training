export namespace ContractualNamespace{
    
    export class Employee{
        firstName:string;
        lastName:string;
        static empType:string;
        constructor(fName:string,lName:string){
            this.firstName=fName;
            this.lastName=lName;
            Employee.empType="Contractual"
        }

        showDetails(){
            console.log(`${this.firstName} ${this.lastName} works as ${Employee.empType} Employee.`)
        }   
    }
}
export namespace SalariedNameSpace{
    export class Employee{
        firstName:string;
        lastName:string;
        static empType:string;
        constructor(fName:string,lName:string){
            this.firstName=fName;
            this.lastName=lName;
            Employee.empType="Salaried"
        }
    
        showDetails(){
            console.log(`${this.firstName} ${this.lastName} works as ${Employee.empType} Employee.`)
        }
    }
}