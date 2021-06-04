import {NgModule} from '@angular/core';
import {NguCarouselModule} from '@ngu/carousel';
import {CarouselCustomerVerticalComponent} from "./carousel-customer-vertical.component";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

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

