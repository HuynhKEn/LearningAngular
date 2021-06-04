import {NgModule} from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item.component";
import {ListItemCustomerModule} from "../list-item-customer/list-item-customer.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
@NgModule({
  declarations: [
    MenuListItemComponent
  ]
  ,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ListItemCustomerModule,
  ],
  exports: [MenuListItemComponent],
  entryComponents: [],


})
export class MenuListItemModule {}

