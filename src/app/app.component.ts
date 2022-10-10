import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'snipcart-angular';
  users:any;
  constructor(private userdata:UsersdataService,private router:Router,public share:SharedService){
    this.userdata.users().subscribe((data)=>{
      this.users=data;
    })
  }
  
  logout(){
    this.share.message ='';
    this.router.navigate(['login']);
    

    
    

} 
}
