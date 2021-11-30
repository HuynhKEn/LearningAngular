import {NgModule} from '@angular/core';

import {OwlModule} from 'ngx-owl-carousel';
import {ConfirmModule} from '../confirm/confirm.module';
import {CarouselCustomerComponent} from './carousel-customer.component';


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

