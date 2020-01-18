import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  constructor(private router : Router) { }

  // canActivate(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) 
  //   {
  //     if(this.isLoggedIn())
  //   {
  //     return true;
  //   }
  //   else
  //   {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   }

  //   isLoggedIn()
  //   {
  //     if(window.sessionStorage.getItem("active") != null &&
  //        window.sessionStorage.getItem("active") == "1")
  //     {
  //          return true;
  //     }
  //     return false;
  //   }
  //   CheckUser(userdetails) 
  //   {
  //     if(userdetails.uname == "client" &&
  //        userdetails.password == "abc@123" &&
  //        userdetails.role == "client") 
  //     {
  //       window.sessionStorage.setItem("active","1");
  //       return true;
  //     }
  //     else if(userdetails.uname == "admin" &&
  //             userdetails.password == "abc@123" &&
  //             userdetails.role == "admin")
  //     {
  //       window.sessionStorage.setItem("active","1");
  //       return true;
  //     }
  //     else if(userdetails.uname == "manager" &&
  //             userdetails.password == "abc@123" &&
  //             userdetails.role == "manager")
  //     {
  //       window.sessionStorage.setItem("active","1");
  //       return true;
  //     }
  //     else
  //     return false;
  //   }
  
  //   SignOut()
  //   {
  //     window.sessionStorage.setItem("active","0");
  //   }
  // }
  
  

  
}
