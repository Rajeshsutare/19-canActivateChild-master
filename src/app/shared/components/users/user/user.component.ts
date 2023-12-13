import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/model';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public uId!:string;
  public uObj!:Iuser;

  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _snackBar:SnackBarService
    ) { 
      this._routes.data
        .subscribe((res)=>{
          console.log(res);
          this.uObj = res['userData']
          
        })
    }

  ngOnInit(): void {
  //  this.uId = this._routes.snapshot.params['userId']
  //  console.log(this.uId);
   
  //  this.uObj = this._userService.getSingleUser(this.uId )
  //  console.log(this.uObj);

  //  this._routes.params
  //   .subscribe((params:Params)=>{
  //     console.log(params);
  //     this.uId= params['userId'];
  //     this.uObj = this._userService.getSingleUser(this.uId )
  //   })
  }

  onEditUSer(){
    this._router.navigate(['editUser'],{
      queryParamsHandling:'preserve',
      relativeTo:this._routes
    })
  }

  onRemoveUser(id:string){
    this._userService.deleteUSer(this.uId);
    this._snackBar.openSnackBar(`Product ${this.uObj.userName} Removed Successfully...`,'close')
  }
}
