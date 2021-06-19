import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {ListItemCustomerComponent} from './list-item-customer.component';


@NgModule({
  declarations: [
    ListItemCustomerComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  exports: [ListItemCustomerComponent]

})
export class ListItemCustomerModule {
}

