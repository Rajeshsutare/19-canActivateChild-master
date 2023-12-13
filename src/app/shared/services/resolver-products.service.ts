import { Injectable } from '@angular/core';
import { Iproduct } from '../models/model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverProductsService implements Resolve<Iproduct>{

  constructor(private _productService:ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct | Observable<Iproduct> | Promise<Iproduct> {
    let getproductId = route.params['productId']
    return this._productService.getSingleProduct(getproductId)
  }
}
