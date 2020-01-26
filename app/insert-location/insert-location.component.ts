import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-location',
  templateUrl: './insert-location.component.html',
  styleUrls: ['./insert-location.component.css']
})
export class InsertLocationComponent implements OnInit {

  value = {"locationName":"", "locationCost":"", "locationImage":""}

  constructor(private router : Router,
              private adminService : AdminService,
              private http : HttpClient) { }

  ngOnInit() {
  }

  selectFile = null;

  onSelectFile(event)
  {
      console.log(event)
      this.selectFile = event.target.file[0];
  }

  onInsert(entideData)
  {
    let location = entideData.form.value;
    console.log(location)
    this.value.locationName =  location.locationName
    this.value.locationCost = location.locationCost
    this.value.locationImage = location.locationImage

    let observablResult = this.adminService.insertLocation(location.venueCity, this.value);

    observablResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-location']);
    })
  }

}