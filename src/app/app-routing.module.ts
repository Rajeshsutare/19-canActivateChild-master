import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuard } from './shared/services/auth.guard';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
import { SuperAdminsComponent } from './shared/components/super-admins/super-admins.component';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { CanDeactivateGuard } from './shared/services/can-deactivate.guard';
import { UserResolverService } from './shared/services/user-resolver.service';
import { ResolverProductsService } from './shared/services/resolver-products.service';

const routes: Routes = [
  {
    path :"" , component:LoginPageComponent,
  },
  {
    path :'dashboard' , component:DashboardComponent,
    title:'dashboard',
  },
  {
    path:'users' , component:UsersComponent,
    title:'users',
    canActivate :[AuthGuard],
    canActivateChild :[AuthGuard],
    children:[
      {
        path:'addNewUser' , component:EditUserComponent,
      },
      {
        path:':userId' , component:UserComponent,
        resolve :{userData : UserResolverService}
      },
      {
        path:':userId/editUser' , component:EditUserComponent,
        canDeactivate:[CanDeactivateGuard],
      },
    ]
  },

  {
    path:'products' , component:ProductsComponent,
    title:'products',
    canActivate :[AuthGuard],
    canActivateChild :[AuthGuard],
    children:[
      {
        path:'addProduct' , component:EditProductComponent,
      },
      {
        path:':productId' , component:ProductComponent,
        resolve : {productData: ResolverProductsService}
      },
      {
        path:':productId/editProduct' , component:EditProductComponent,
        canDeactivate:[CanDeactivateGuard],
      },
    ]
  },
  {
    path:'admins',component:AdminsComponent,
    title:'Admins',
    canActivate :[AuthGuard, UserRoleGuard],
    data:{
      userRole:['admin','superAdmin']
    }
    
  },
  {
    path:'superAdmins' , component:SuperAdminsComponent,
    title:'superAdmins',
    canActivate :[AuthGuard,UserRoleGuard],
    data:{
      userRole:['superAdmin']
    }
  },
  {
    path:'not-found', component:PageNotFoundComponent,
    title:'Page Not Found ',
    data:{
      msg:'Page Not Found !!!'
    }
  },
  {
    path:'**' ,
   redirectTo : 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
