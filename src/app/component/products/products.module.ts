import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {BodyRootComponent} from './body-root/body-root.component';
import {MenuLeftComponent} from './menu-left/menu-left.component';
import {ContentService} from "../../service/products/content/content.service";
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {OwlModule} from "ngx-owl-carousel";


@NgModule({
  declarations: [ProductsComponent, BodyRootComponent, MenuLeftComponent, ProductCarouselComponent],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    OwlModule
  ],
  providers: [ContentService]
})
export class ProductsModule {
}
