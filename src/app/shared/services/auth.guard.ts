import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild {

constructor(private _authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isAuthenticated().then((res:boolean)=>{
    //  if(res === true){
    //   return true
    //  }else{
    //   return false
    //  }
    return (res === true) ? true : false;
    })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.canActivate(childRoute,state)
    // return this._authService.isAuthenticated().then((res:boolean)=>{
    //   if(res === true){
    //     return true
    //   }else{
    //     return false
    //   }
    // })
  }
  
}


