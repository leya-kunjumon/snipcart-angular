import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'snipcart-angular';
  users:any;
  constructor(private userdata:UsersdataService){
    this.userdata.users().subscribe((data)=>{
      this.users=data;
    })
  }

}
