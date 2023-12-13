import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { SnackBarService } from './snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginStatus:boolean=false;

  constructor(private _router:Router,
              private _snackBar:SnackBarService
          
    ) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(localStorage.getItem('Token')){
          this.loginStatus = true
        }else{
          this.loginStatus = false
        }
        resolve(this.loginStatus)
      },300)
    })
  }

  loginToApp(username:string,password:string){
    if(username === 'jhon@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','admin')
      this._router.navigate(['dashboard'])
      this._snackBar.openSnackBar('Logged in Successfully...','close')
    }else if(username === 'jun@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','candidate')
      this._router.navigate(['dashboard'])
      this._snackBar.openSnackBar('Logged in Successfully...','close')
    }else if(username === 'Tony@gmail.com' && password === 'zaq1ZAQ!'){
      this.loginStatus=true;
      localStorage.setItem('Token','JWT Token'),
      localStorage.setItem('userrole','superAdmin')
      this._router.navigate(['dashboard'])
      this._snackBar.openSnackBar('Logged in Successfully...','close')
    }
    else{
      this._snackBar.openSnackBar('Invalid Username or Password !!!','close')
      this._router.navigate(['/'])
    }
  }

  logOutFromApp(){
    this.loginStatus=false;
    this._router.navigate(['/']);
    localStorage.removeItem('Token');
    localStorage.removeItem('userrole');
  }
}
