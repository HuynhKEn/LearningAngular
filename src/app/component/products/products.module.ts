import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {GridModule} from '@angular/flex-layout/grid';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import {OwlModule} from 'ngx-owl-carousel';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RippleModule} from 'primeng/ripple';
import {ContentService} from '../../service/products/content/content.service';
import {BodyRootComponent} from './body-root/body-root.component';
import {ButtonBuyComponent} from './button-buy/button-buy.component';
import {ContentMainProductLayoutComponent} from './content-main-product-layout/content-main-product-layout.component';
import {FindComponent} from './find/find.component';
import {FormAddressPersonComponent} from './form-address-person/form-address-person.component';
import {MenuLeftComponent} from './menu-left/menu-left.component';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {CollapseModule} from './shop-cart/collapse-product/collapse.module';
import {ListItemProductsShopCartComponent} from './shop-cart/list-item-product-shop-cart/list-item-products-shop-cart.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';

@NgModule({
    declarations: [ProductsComponent, BodyRootComponent, ContentMainProductLayoutComponent, MenuLeftComponent,
        ProductCarouselComponent, ProductListComponent, FindComponent, ShopCartComponent, ButtonBuyComponent,
        ListItemProductsShopCartComponent, FormAddressPersonComponent],
    imports: [
        CommonModule,
        OwlModule,
        GridModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        MatIconModule,
        DropdownModule,
        InputTextModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        InputTextareaModule,
        ProductsRoutingModule,
        CollapseModule

    ],
    providers: [ContentService]
})
export class ProductsModule {
}
