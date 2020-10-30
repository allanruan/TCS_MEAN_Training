import { SalariedNameSpace, ContractualNamespace} from "./myNamespace";

var salEmp = new SalariedNameSpace.Employee("Shreya","Bhalla");
salEmp.showDetails();

var contEmp = new ContractualNamespace.Employee("Shreya","Bhalla");
contEmp.showDetails();