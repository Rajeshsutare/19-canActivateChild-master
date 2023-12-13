import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public pid!:string;
  public pObj!:Iproduct;

  constructor(private _productsService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _snackBar:SnackBarService
    ) { 
      this._routes.data
        .subscribe((res)=>{
          console.log(res);
          this.pObj=res['productData']
        })
    }

  ngOnInit(): void {
    // this.pid = this._routes.snapshot.params['productId']
    // console.log(this.pid );
    // this.pObj = this._productsService.getSingleProduct(this.pid)
    // console.log(this.pObj);

    // this._routes.params
    //   .subscribe((params:Params)=>{
    //     console.log(params);
    //    this.pid= params['productId']
    //     this.pObj = this._productsService.getSingleProduct(this.pid)
    //   })
  }
  onRemoveProduct(id:string){
    this._productsService.removeProduct(this.pid)
    this._snackBar.openSnackBar(`Product ${this.pObj.prodName} Removed Successfully...`,'close')
  }

  // onEditProduct(){
  //   this._router.navigate(['editProduct'],{
  //     queryParamsHandling:'preserve',
  //     relativeTo:this._routes
  //   })
  // }

}
