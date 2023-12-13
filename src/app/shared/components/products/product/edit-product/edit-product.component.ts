import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IprodStatus, Iproduct } from 'src/app/shared/models/model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public pid!:string;
  public pobj!:Iproduct;
  public canEditProduct:boolean=true;

  @ViewChild('prodValue') prodValue !: ElementRef<HTMLInputElement>;
  @ViewChild('prodStatus') prodStatus !: ElementRef<HTMLSelectElement>;

  constructor(private _productsService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService,
              private _snackBar:SnackBarService
    ) { }

  ngOnInit(): void {

    this.pid = this._routes.snapshot.params['productId']
    console.log(this.pid);
    this.pobj = this._productsService.getSingleProduct(this.pid)
    console.log(this.pobj);
    
    // this._routes.queryParams
    // .subscribe((queryParams:Params)=>{
    //   console.log(queryParams);
    //   if(queryParams.hasOwnProperty('canEditProduct')){
    //     this.canEditProduct = +queryParams['canEditProduct']
    //   }
      
    // })

    if(this._routes.snapshot.queryParams['canEditProduct'] === 'Delivered'){
      this.canEditProduct=false
    }
    
  }

  onUpdateProduct(pname:string,pstatus:HTMLSelectElement){
    let pobj:Iproduct={
      prodName: pname,
      prodId:this.pid,
      ProdStatus: pstatus.value as IprodStatus,
      canReturn: this.pobj.canReturn
    }
    this._productsService.updateProduct(pobj)
    this._snackBar.openSnackBar(`Product ${pname} updated Successfully...`,'close')
  }

  onAddProduct(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let pobj:Iproduct={
      prodName: pname.value as string,
      prodId: this._utilityService.generateUuid(),
      ProdStatus: pstatus.value as IprodStatus,
      canReturn: Math.random() >= 5 ? 1 : 0
    }
    this._productsService.addNewProduct(pobj)
    this._snackBar.openSnackBar(`Product ${pname.value} Added Successfully...`,'close')
  }

  canDeactivate(){
    if(this.pobj.prodName !== this.prodValue.nativeElement.value ||
      this.pobj.ProdStatus !== this.prodStatus.nativeElement.value
      ){
      let getConfirm = confirm('Are You sure You want to Discard changes ?')
     return getConfirm;
    }else{
      return true
    }
    }

}
