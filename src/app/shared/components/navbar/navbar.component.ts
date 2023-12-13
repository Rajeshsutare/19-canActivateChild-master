import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snack-bar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService:AuthService,
              private _snackBar:SnackBarService,
    ) { }

  ngOnInit(): void {
  }

  logOut(){
    this._authService.logOutFromApp();
    this._snackBar.openSnackBar('Logged Out Successfully...','close')
  }

}
