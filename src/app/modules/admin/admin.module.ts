import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/product-item/products.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [ DashboardComponent,
    ProductsComponent,
    ProductListComponent ],
})
export class AdminModule { }
