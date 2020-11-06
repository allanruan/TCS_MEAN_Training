import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MdformComponent implements OnInit {
  msg:string;
  userRef = new FormGroup({
    uname:new FormControl(),
    password:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(): void{
    // console.log(this.userRef.value)
    if(this.userRef.value.uname=="Ravi" && this.userRef.value.password=="Password"){
      this.msg = "Login Successful";
    }else{
      this.msg = "Login Fail";
    }
  }
}
