import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, RouteReuseStrategy, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivate, Iuser } from 'src/app/shared/models/model';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IcanDeactivate {

  public uid!:string;
  public uobj!:Iuser;
  public canEditUser:boolean=true;
  @ViewChild ('userValue')  userValue !: ElementRef<HTMLInputElement>;
  @ViewChild ('role') role !: ElementRef<HTMLSelectElement>;
  
  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService,
              private _snackBar:SnackBarService
    ) { }

  ngOnInit(): void {
    this.uid = this._routes.snapshot.params['userId']
    console.log(this.uid );

    this.uobj = this._userService.getSingleUser(this.uid)
    console.log(this.uobj );

    if(this._routes.snapshot.queryParams['canEditUser'] === "admin"){
     this.canEditUser = false
    }
  }

  updateUser(uname:string,uRole:HTMLSelectElement){
    let uobj:Iuser={
      userName: uname,
      userId: this.uid,
      editStatus: uRole.value as 'admin' | 'candidate'
    }
    this._userService.updateUSerDetail(uobj)
    this._snackBar.openSnackBar(` 'User Updated as ${uobj.userName} Successfully...' `,'close' )
  }

  addNewUser(uNew:HTMLInputElement,uRole:HTMLSelectElement){
    let uobj:Iuser={
      userName: uNew.value as string,
      userId: this._utilityService.generateUuid(),
      editStatus: uRole.value as 'admin' | 'candidate'
    }
    this._userService.adduser(uobj);
    this._snackBar.openSnackBar('New User Added Successfully...','close')
  }

  canDeactivate(){
  if(this.uobj.userName !== this.userValue.nativeElement.value ||
    this.uobj.editStatus !== this.role.nativeElement.value
    ){
    let getConfirm = confirm('Are You sure You want to Discard changes ?')
    return getConfirm;
  
  }else{
    return true
  }
  }

}
