import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  loginData:any;
  data :any;
  data1 :any;
  data2:any;
  umail :any;
  upswd:any;
  dataa :any;
  constructor(private fb:FormBuilder,private router:Router,public share : SharedService) { }
  
  
  ngOnInit(): void {
    this.login = this.fb.group({
   
    email:['',Validators.compose([Validators.required,Validators.email])],
    pswd:['',Validators.required]
  });
  
  }
loginsubmit(){
  this.share.message = this.umail;
  this.loginData = localStorage.getItem('name');
  console.log(this.loginData);
  this.data = JSON.parse(this.loginData)
  console.log(this.data[0].email);
  console.log(this.data[0].pswd);
  console.log(this.umail);
  
  this.data1 = this.data[0].email;
  this.data2 = this.data[0].pswd;
  if (this.data1 === this.umail && this.data2 === this.upswd){
    this.router.navigate(['products']);

  }else{
    this.router.navigate(['login']);
  }
  }
signupsubmit(){
  this.router.navigate(['register']);

}
}
