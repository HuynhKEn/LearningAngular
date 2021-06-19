import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';

import {NguCarouselModule} from '@ngu/carousel';
import {CarouselCustomerVerticalComponent} from './carousel-customer-vertical.component';

@NgModule({
  declarations: [
    CarouselCustomerVerticalComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    MatIconModule
  ],
  exports: [CarouselCustomerVerticalComponent]

})
export class CarouselCustomerVerticalModule {}

