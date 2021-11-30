import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {ListItemCustomerModule} from '../list-item-customer/list-item-customer.module';
import {MenuListItemMobileComponent} from './menu-list-item-mobile.component';

@NgModule({
  declarations: [
    MenuListItemMobileComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    ListItemCustomerModule,
  ],
  exports: [MenuListItemMobileComponent],
  entryComponents: [],


})
export class MenuListItemMobileModule {
}

