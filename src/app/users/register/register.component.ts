import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  user_list: any =[];
  
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],

      email:['',Validators.compose([Validators.required,Validators.email])]
      });
  }
  signupsubmit(){
    console.log('hlo')
    console.log(this.register.value)
    this.user_list.push(this.register.value)
    console.log(this.user_list)
    this.router.navigate(['login']);
  }
}
