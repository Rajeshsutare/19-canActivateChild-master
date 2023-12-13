import { Injectable } from '@angular/core';
import { Iuser } from '../models/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userArray:Array<Iuser>=[
    {
      userName:'Jhon',
      userId:'1',
      editStatus:'admin'
    },
    {
      userName:'May',
      userId:'2',
      editStatus:'candidate'
    },
    {
      userName:'Jun',
      userId:'3',
      editStatus:'candidate'
    },
    {
      userName:'Tony',
      userId:'4',
      editStatus:'admin'
    }
  ];

  constructor(private _router:Router) { }

  getAllUsers(){
    return this.userArray;
  }

  getSingleUser(id:string){
    return this.userArray.find(u=>{
      return u.userId === id
    })!
  }

  deleteUSer(id:string){
    let indx = this.userArray.findIndex(u=>u.userId === id)
    let deleteId = this.userArray.splice(indx,1)
    this._router.navigate(['/users'])
  }

  updateUSerDetail(obj:Iuser){
    this.userArray.forEach(u=>{
     if(u.userId === obj.userId){
      u.userName = obj.userName,
      u.editStatus = obj.editStatus
      this._router.navigate(['/users'])
     }
    })
  }

  adduser(obj:Iuser){
    this.userArray.push(obj)
    this._router.navigate(['/users'])
  }
}
