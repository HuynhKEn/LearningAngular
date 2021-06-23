import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {OwlModule} from 'ngx-owl-carousel';
import {ContentService} from '../../service/products/content/content.service';
import {BodyRootComponent} from './body-root/body-root.component';
import {MenuLeftComponent} from './menu-left/menu-left.component';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ProductListPcComponent} from './product-list-pc/product-list-pc.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';

@NgModule({
  declarations: [ProductsComponent, BodyRootComponent, MenuLeftComponent,
    ProductCarouselComponent, ProductListPcComponent],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    OwlModule,
    FlexLayoutModule
  ],
  providers: [ContentService]
})
export class ProductsModule {
}
