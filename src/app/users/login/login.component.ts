import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  loginData:any;
  
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
   
    email:['',Validators.compose([Validators.required,Validators.email])],
    pswd:['',Validators.required]
    });
  }
loginsubmit(){
  this.loginData = localStorage.getItem('name');
  console.log(this.loginData);
  console.log(this.loginData[0].email)
  this.router.navigate(['login']);
  
}
signupsubmit(){
  this.router.navigate(['register']);

}
}
