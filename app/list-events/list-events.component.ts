import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  eventDesc : any;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    let observableResult = this.adminService.listEventDesc();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.eventDesc = data;
    })
  }

}
