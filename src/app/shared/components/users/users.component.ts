import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersInfo:Array<Iuser>=[];
  public isSelected!:string;

  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router
    ) { }

  ngOnInit(): void {
    this.usersInfo=this._userService.getAllUsers()
  }



}
