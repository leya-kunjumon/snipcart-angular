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
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.required,Validators.email])]
    });
  }
loginsubmit(data:any){
  console.log(data);
  this.router.navigate(['home']);
}
signupsubmit(){
  this.router.navigate(['register']);

}
}
