import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/services/usersdata.service';
// import { UsersdataService } from './services/Usersdata.Service';
@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.less']
})
export class DataserviceComponent implements OnInit {
 
  users:any;
  constructor(private userdata: UsersdataService){
    this.userdata.users().subscribe((data)=>{
      this.users=data;
    })
  }
  ngOnInit(): void {
  }

}
