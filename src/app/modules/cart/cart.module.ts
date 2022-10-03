import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    PendingOrdersComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    AppRoutingModule
  ]
})
export class CartModule { }
