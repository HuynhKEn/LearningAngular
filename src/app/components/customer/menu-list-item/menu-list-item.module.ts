import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {ListItemCustomerModule} from '../list-item-customer/list-item-customer.module';
import {MenuListItemComponent} from './menu-list-item.component';
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

