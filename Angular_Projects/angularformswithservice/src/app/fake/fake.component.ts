import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import { Fake, FakeService2 } from './fake.service2';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg1:string;
  msg2:string;

  fakeObject:Fake[]; //created array object to load the data
  employeeDetails:Employee[]=[];
  constructor(private fakeSer2:FakeService2) { } // Pull object or DI. Only put logic in constructor in constructor

  ngOnInit(): void {
    // this.fakeSer2.loadData()
    // .subscribe(data=>console.log(data),error=>console.log("Error Method: " + error),
    // ()=>console.log("completed"));  //data store in fakeObject
    this.employeeDetails.push(new Employee(100,'Ravi', 50000));
    this.employeeDetails.push(new Employee(101,'Pratik', 70000));
    this.employeeDetails.push(new Employee(102,'Brahmin', 90000));
    this.fakeSer2.loadData().subscribe(result=>this.fakeObject=result,error=>console.log(error))

  }
  i=0;
  id=0;
  name=null;
  salary=0.0;
  loadDataInfo(){
    this.id=this.employeeDetails[this.i].id;
    this.name=this.employeeDetails[this.i].name;
    this.salary=this.employeeDetails[this.i].salary;
    this.i++
  }
  // this.http.get(url).subscribe(next(),error(),completed)
  
  fun1(): void{
    let ff1= new FakeService1();
    this.msg1=ff1.sayHello();
  }
  fun2(){
    this.msg2=this.fakeSer2.sayHello();
  }

}

class Employee{
  constructor(public id:number, public name:string, public salary:number){}

}