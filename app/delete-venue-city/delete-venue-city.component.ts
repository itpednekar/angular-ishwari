import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-venue-city',
  templateUrl: './delete-venue-city.component.html',
  styleUrls: ['./delete-venue-city.component.css']
})
export class DeleteVenueCityComponent implements OnInit {

  constructor( private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let venueCityId = result.get("venueCityId")
      let observableResult = this.adminService.deleteVenueCity(venueCityId)
      observableResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-venue-city'])
      })
    })
  }

}
