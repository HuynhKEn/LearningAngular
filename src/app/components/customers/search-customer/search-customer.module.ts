import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {SearchCustomerComponent} from './search-customer';


@NgModule({
  declarations: [
    SearchCustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [SearchCustomerComponent]

})
export class FindModule {
}

