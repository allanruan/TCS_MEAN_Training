import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {
  fname:string;
  constructor() { }

  ngOnInit(): void {
  }

  fun(name):void{
    alert("username: " + name);
    this.fname=name;
  }
}
