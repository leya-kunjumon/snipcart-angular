import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent implements OnInit {
  changepswd:any = FormGroup;
  oldpswd :any;
  newupswd :any;
  opswdd :any;
  user_list:any;
  constructor(public share : SharedService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.changepswd = this.fb.group({
      Opswd:['',Validators.required],
      newpswd:['',Validators.required]
  });
 this.opswdd = this.share.message2;
 console.log(this.opswdd)
 if (localStorage.getItem('userlist')  ){
    let users :any = localStorage.getItem('userlist');
    this.user_list = JSON.parse(users);
    console.log(this.user_list)
}
  }

Changesubmit(){
  console.log('loo')
  for(let i=0;i<this.user_list.length;i++) {
    console.log(this.user_list[i].pswd)
    if (this.user_list[i].pswd == this.oldpswd){
     this.user_list[i].pswd = this.newupswd;
     this.share.message2 = this.newupswd;
     

  }
}
  this.router.navigate(['profile']);
  localStorage.setItem("userlist",JSON.stringify(this.user_list));
}



}

