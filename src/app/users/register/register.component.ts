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
  user_list:any[] = [] ;
  dtt:any ;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      fname:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      pswd:['',Validators.required]

      });
       this.dtt = localStorage.getItem('name');
       this.user_list = JSON.parse(this.dtt);
  }
  loginData :any;
  data :any;
  data1 :any;
  data2:any;
  data3: any;
  uname :any;
  umail :any;
  val1 :any;
  i:any;
  signupsubmit(){
    console.log('hlo');
    this.loginData = localStorage.getItem('name');
    this.data = JSON.parse(this.loginData)
    if ( localStorage.getItem('name') == null ){
      console.log('hlo')
      this.user_list.push(this.register.value);
      console.log(this.user_list);
      localStorage.setItem("name",JSON.stringify(this.user_list));
      this.router.navigate(['login']);
    }
    else if (localStorage.getItem('name') != null ){
      for (let i=0;i<this.data.length;i++){
       if (this.data[i].email != this.umail) {
        this.user_list.push(this.register.value);
        console.log(this.user_list);
        localStorage.setItem("name",JSON.stringify(this.user_list));
        this.router.navigate(['login']);
    } 
    else{
    this.val1 = 'username and email already taken.try another!'
    this.router.navigate(['register']);
  }
}
}
}
  
}

