import {NgModule} from '@angular/core';
import {ListItemCustomerModule} from "../list-item-customer/list-item-customer.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MenuListItemMobileComponent} from "./menu-list-item-mobile.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    MenuListItemMobileComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    ListItemCustomerModule,
    FlexLayoutModule,
  ],
  exports: [MenuListItemMobileComponent],
  entryComponents: [],


})
export class MenuListItemMobileModule {
}

