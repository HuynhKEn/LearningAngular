import {NgModule} from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item.component";
import {ListItemCustomerModule} from "../list-item-customer/list-item-customer.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    MenuListItemComponent
  ]
  ,
  imports: [
    CommonModule,
    ListItemCustomerModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [MenuListItemComponent],
  entryComponents: [],


})
export class MenuListItemModule {}

