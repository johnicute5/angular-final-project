import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';

const routes: Routes = [
  {
    path: "cart",
    component: CartComponent,
    children:[
      {
        path: "checkout",
        component: CheckoutComponent
      },
      {
        path: "pending-orders",
        component: PendingOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
