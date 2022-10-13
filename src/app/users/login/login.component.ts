import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
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
  
  umail :any;
  upswd:any;
  user_list :any;
  isLoggedin:Boolean = false;
  constructor(private fb:FormBuilder,private router:Router,public share : SharedService) {}
  
  ngOnInit(): void {
    this.login = this.fb.group({
   
    email:['',Validators.compose([Validators.required,Validators.email])],
    pswd:['',Validators.required]
  });
  if (localStorage.getItem('userlist')  ){
        
    let users :any = localStorage.getItem('userlist');
    this.user_list = JSON.parse(users);
    console.log(this.user_list);
    
  }
  }
loginsubmit(){
  for (let i=0;i<this.user_list.length;i++){
    console.log(this.user_list[i].email)
    if (this.user_list[i].email == this.umail){
      if (this.user_list[i].pswd == this.upswd){
        this.share.message = this.user_list[i].fname
        this.router.navigate(['products']);
        this.isLoggedin = true;
      }
      else {
        this.login.get('pswd')?.setErrors({ message : 'password is Incorrect' });
      }
    }
    else {
      this.login.get('email')?.setErrors({ message : 'Email is not found' });
    }
  }
}
signupsubmit(){
  this.router.navigate(['register']);

}
}
