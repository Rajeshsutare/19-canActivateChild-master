import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isHavingAcc:boolean=false;
  public visisble:boolean=true;
  public passType:boolean=true;

  constructor(private _authService:AuthService,
              private _router:Router,

    ) { }

  ngOnInit(): void {
  }
  
  logIn(username:string,password:string){
    this._authService.loginToApp(username,password)
  }

  onPassword(){
    this.visisble = !this.visisble;
    this.passType = !this.passType;
  }
}
