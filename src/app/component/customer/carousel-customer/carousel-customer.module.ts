import {NgModule} from '@angular/core';
import {CarouselCustomerComponent} from "./carousel-customer.component";
import {OwlModule} from "ngx-owl-carousel";
import {ConfirmModule} from "../confirm/confirm.module";


@NgModule({
  declarations: [
    CarouselCustomerComponent
  ],
  imports: [
    OwlModule,
    ConfirmModule
  ],
  exports: [CarouselCustomerComponent]

})
export class CarouselCustomerModule {}

