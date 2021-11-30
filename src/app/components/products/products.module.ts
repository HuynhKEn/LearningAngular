import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {GridModule} from '@angular/flex-layout/grid';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import {OwlModule} from 'ngx-owl-carousel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RippleModule} from 'primeng/ripple';
import {BodyRootComponent} from '../../components-core/body-root/body-root.component';
import {ContentMainLayoutComponent} from '../../components-core/content-main-layout/content-main-layout.component';
import {MenuLeftComponent} from '../../components-core/menu-left/menu-left.component';
import {SizeDetectorComponent} from '../../components-core/size-detector/size-detector.component';
import {ContentService} from './assests/services/content.service';
import {ButtonBuyComponent} from './purchase-action/purchase-actioncomponent';
import {SearchComponent} from './search/search.component';
import {FormAddressPersonComponent} from './form-address-person/form-address-person.component';
import {ProductCarouselComponent} from './product-carousel/product-carousel.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {CollapseModule} from './shop-cart/collapse-product/collapse.module';
import {ListItemProductsShopCartComponent} from './shop-cart/list-item-product-shop-cart/list-item-products-shop-cart.component';
import {Rotate3DProductComponent} from './shop-cart/rotate-3d-product/rotate-3D-product.component';
import {ShopCartComponent} from './shop-cart/shop-cart.component';


@NgModule({
    declarations: [
        ProductsComponent, SizeDetectorComponent,  BodyRootComponent,
        ProductCarouselComponent, ProductListComponent, ButtonBuyComponent,
        ContentMainLayoutComponent, MenuLeftComponent,  SearchComponent,
        ShopCartComponent, ListItemProductsShopCartComponent, FormAddressPersonComponent, Rotate3DProductComponent

    ],
    imports: [
        CommonModule,
        OwlModule,
        GridModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        MatIconModule,
        DropdownModule,
        CollapseModule,
        InputTextModule,
        FlexLayoutModule,
        OverlayPanelModule,
        DynamicDialogModule,
        ReactiveFormsModule,
        InputTextareaModule,
        ProductsRoutingModule,
    ],
    providers: [ContentService, DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class ProductsModule {
}
