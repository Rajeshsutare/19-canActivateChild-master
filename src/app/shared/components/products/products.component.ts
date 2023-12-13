import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  public productInfo:Array<Iproduct>=[]
  public isSelected!:string;

  constructor(private _productService:ProductsService) { }

  ngOnInit(): void {
    this.productInfo = this._productService.getAllProducts();
    
  }

  

}
