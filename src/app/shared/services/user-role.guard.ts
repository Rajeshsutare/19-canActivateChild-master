import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let staticUserRole:Array<string>=route.data['userRole'] //from routing module
      console.log(staticUserRole);
      let actualUserRole:string=localStorage.getItem('userrole')! // from authservice local storage

      // if(staticUserRole.includes(actualUserRole)){
      //   return true
      // }else{
      //   return false
      // }
      return staticUserRole.includes(actualUserRole) 
  }
}
