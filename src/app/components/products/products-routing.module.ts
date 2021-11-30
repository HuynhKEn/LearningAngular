import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ROUTE_PATH} from '../../configs/route-path.config';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsComponent} from './products.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ROUTE_PATH.SHOP_CART,
        component: ShopCartComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
