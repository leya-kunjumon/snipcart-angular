import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.less']
})
export class DataserviceComponent implements OnInit {
 
  users:any;
  constructor(private userdata: UsersdataService){
    this.userdata.users().subscribe((data:any)=>{
      this.users= data.users;//data in users array
      console.log(this.users)
    })
  }
  ngOnInit(): void {
  }

}
