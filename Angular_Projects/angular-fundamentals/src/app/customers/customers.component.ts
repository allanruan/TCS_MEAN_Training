import { Component} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{
  message: string = "customer component rendering here"
  
  projects: string[] = ["DashBoard", "E-Commerce","Admin Portal","ERP Tally"]
  
  customerList: any = [
    {custCode: 101, custName: "King", custAge: 23, custAmount:34000},
    {custCode: 101, custName: "Kochhar", custAge: 34, custAmount:33000},
    {custCode: 101, custName: "Shreya", custAge: 45, custAmount:24000},
    {custCode: 101, custName: "Kims", custAge: 22, custAmount:30000},
    {custCode: 101, custName: "James", custAge: 45, custAmount:34000}
  ]

  loggedIn: boolean = false;

  custObj: any = {
    CustomerCode: 1001,
    CustomerName: "King Kochhar",
    CustomerAmount: 12000
  }

  userObj: any = {
    username: "bhawanagunwani",
    password: "123456"
  }

  doLogin(): void{
    if(this.userObj.username=="bhawna" && this.userObj.password == "gunwani"){
      alert('You are successfully logged in')
    }else{
      alert('Login Failed..!!')
    }
  }
}
