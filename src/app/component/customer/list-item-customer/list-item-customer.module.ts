import {NgModule} from '@angular/core';
import {ListItemCustomerComponent} from "./list-item-customer.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";


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

