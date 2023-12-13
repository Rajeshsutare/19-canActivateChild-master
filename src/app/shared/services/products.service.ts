import { Injectable } from '@angular/core';
import { IprodStatus, Iproduct } from '../models/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public ProductsArray:Array<Iproduct>=[
    {
      prodName:'iphone',
      prodId :'1',
      ProdStatus:IprodStatus.InProcess,
      canReturn:0
    },
    {
      prodName:'iphone 14',
      prodId :'2',
      ProdStatus:IprodStatus.Dispatched,
      canReturn:1
    },
    {
      prodName:'iphone 15',
      prodId :'3',
      ProdStatus:IprodStatus.Delivered,
      canReturn:0
    }
   ];

  constructor(private _router:Router) { }

  getAllProducts(){
    return this.ProductsArray;
  }

  getSingleProduct(id:string){
  return this.ProductsArray.find(p=>{
      return p.prodId === id
    })!
  }

  removeProduct(id:string){
    let indx = this.ProductsArray.findIndex(p=>p.prodId === id)
    let removeProd = this.ProductsArray.splice(indx,1)
    this._router.navigate(['/products'])
  }

  updateProduct(obj:Iproduct){
    this.ProductsArray.forEach(p=>{
      if(p.prodId === obj.prodId){
        p.prodName = obj.prodName,
        p.ProdStatus = obj.ProdStatus,
        this._router.navigate(['/products'])
      }
    })
  }

  addNewProduct(obj:Iproduct){
    this.ProductsArray.push(obj)
    this._router.navigate(['/products'])
  }

}
