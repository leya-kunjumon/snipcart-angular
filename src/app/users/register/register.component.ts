import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  user_list: any = [] ;
  dtt:any ;
  
  constructor(private fb:FormBuilder,private router:Router) { }
 
  
  ngOnInit(): void {
    this.register = this.fb.group({
      fname:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      pswd:['',Validators.required]

      });
      
      if (localStorage.getItem('userlist')  ){
        
        let users :any = localStorage.getItem('userlist');
        this.user_list = JSON.parse(users);
        console.log(this.user_list);
        
      }
     
  };
  
  uname :any;
  umail :any;
  
  
  signupsubmit(){
    
    if (this.user_list.length == 0){
      this.user_list.push(this.register.value)
      console.log(this.user_list)
      this.router.navigate(['login']);

    }
    else if(this.user_list.length >0){
      for (let i=0;i<this.user_list.length;i++){
        console.log(this.user_list[i].email)
        if (this.user_list[i].email != this.umail){
          console.log('klo')
          this.user_list.push(this.register.value)
      
          console.log(this.user_list)
          this.router.navigate(['login']);
        }
        else{
          console.log('mm')
          this.register.get('email')?.setErrors({ message : 'Email already exists' });
          
        }
      }

    }
    localStorage.setItem("userlist",JSON.stringify(this.user_list));
    }


      
  }
    
  
         
