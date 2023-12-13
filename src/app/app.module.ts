import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
import { BlockCopyPasteDirective } from './shared/directives/preventCopyPaste';
import { passHideShowDirective } from './shared/directives/passwordHideShow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { SuperAdminsComponent } from './shared/components/super-admins/super-admins.component';
import { ContactComponent } from './shared/components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    LoginPageComponent,
    UserComponent,
    EditUserComponent,
    ProductComponent,
    EditProductComponent,
    PageNotFoundComponent,
    AdminsComponent,
    BlockCopyPasteDirective,
    passHideShowDirective,
    SuperAdminsComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
