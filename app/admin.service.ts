import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  listVenueCities()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listvenuecity");
  }
  insertVenue(venue)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertvenuecity",venue);
  }
  listLocations()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listlocation")
  }
  insertLocation(venuCityId, location)
  {
    const formData = new FormData()
    formData.append("locationName",location.locationName)
    formData.append("locationCost",location.locationCost)
    formData.append("locationImage",location.locationImage)
    return this.http.post("http://localhost:8080/Day1.1/admin/insertlocation/"+venuCityId, location);
  }
  listFoodSubMenu()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodsubmenu")
  }
  //--------------------------------snehal-------------------------------------------//
  listUsers() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listusers"); 
  }

  insertMgr(mgr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addmanager",mgr);
  }
  addAddress(mgrid,addr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addaddressofmanager/" +mgrid, addr);
  }
  listEventDesc() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listeventdesc");
  }
  insertEventDesc(mgrId,eventDesc)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/inserteventdesc/" +mgrId , eventDesc);
  }
  listFoodTypes() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodtype");
  }
  insertFoodType(eventid,food) 
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertfood/" +eventid , food);
  }
  insertFoodSubMenu(foodId , foodSubMenu)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertfoodsubmenu/"+foodId,foodSubMenu);
  }
  //------------------------------me----------------------------------------//
  getFoodSubMenuById(foodSubMenuId)
  {
    return this.http.get("http://localhost:8080/Day1.1/event/getfoodsubmenubyid/"+foodSubMenuId)
  }
  editFoodSubMenu(foodSubMenu)
  {
    return this.http.put("http://localhost:8080/Day1.1/event/editfoodsubmenu",foodSubMenu)
  }
  deleteFoodSubMenu(foodSubMenuId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletefoodsubmenu/"+foodSubMenuId)
  }
  deleteVenueCity(venueCityId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletevenuecity/"+venueCityId)
  }
  editLocation(location)
  {
    return this.http.put("http://localhost:8080/Day1.1/admin/eidtlocation",location)
  }
  getLocationById(locationId)
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/getlocationbyid/"+locationId)
  }
  deleteLocation(locationId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletelocation/"+locationId)
  }
}
