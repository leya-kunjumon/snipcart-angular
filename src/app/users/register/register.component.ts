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
  user_list: any = [] ;
  dtt:any ;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      fname:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      pswd:['',Validators.required]

      });
      if (localStorage.getItem('name') != null ){

        this.dtt = localStorage.getItem('name');
        this.user_list.push(JSON.parse(this.dtt));

       }
      // localStorage.setItem('name',JSON.stringify(this.user_list))
  };
  
  uname :any;
  umail :any;
  val1 :any;
  ln:any;
  ntng :any;

  signupsubmit(){
    // this.dtt = localStorage.getItem('name');
    // this.user_list.push(JSON.parse(this.dtt));
    this.user_list.push(this.register.value)
    localStorage.setItem("name",JSON.stringify(this.user_list));
    this.router.navigate(['login']);
    // if ( localStorage.getItem('name') == null ){
     
    // }

    if (localStorage.getItem('name') != null ){
      
      for (let i=0;i<this.user_list.length;i++){
          
          if (this.user_list[i].email != this.umail) {
             console.log('hlo');
             
         
         
          }
          else {
            console.log('kkk')
          }
   }
         }
        }

      }





















      // };
      // }
//     else {
//   this.ntng ='nothing';
//  }
 
//  }
 //       console.log('mm')
    //       this.user_list.push(this.register.value);
    //       console.log(this.user_list)
    //       localStorage.setItem("name",JSON.stringify(this.user_list));
    //       this.router.navigate(['login']);


 //     else {
    //       console.log('kk')
    //       // this.val1 = 'username and email already taken.try another!'
    //       this.router.navigate(['register']);
         
