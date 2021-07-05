import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {GridModule} from '@angular/flex-layout/grid';

import {OwlModule} from 'ngx-owl-carousel';
import {ContentService} from '../../service/products/content/content.service';
import {BodyRootComponent} from './body-root/body-root.component';
import {ButtonBuyComponent} from './button-buy/button-buy.component';
import {ContentMainProductLayoutComponent} from './content-main-product-layout/content-main-product-layout.component';
import {FindComponent} from './find/find.component';
import {MenuLeftComponent} from './menu-left/menu-left.component';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';

@NgModule({
    declarations: [ProductsComponent, BodyRootComponent, ContentMainProductLayoutComponent, MenuLeftComponent,
        ProductCarouselComponent, ProductListComponent, FindComponent, ShopCartComponent, ButtonBuyComponent],
    imports: [
        CommonModule,
        OwlModule,
        GridModule,
        FlexLayoutModule,
        ProductsRoutingModule
    ],
    providers: [ContentService]
})
export class ProductsModule {
}
