import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import {FindModule} from '../find-component/find.module';
import {PdfViewerCustomerModule} from '../pdf-viewer-customer/pdf-viewer-customer.module';
import {CardCustomerComponent} from './card-customer.component';
import {DialogPdfShowComponent} from './dialog-pdf-show/dialog-pdf-show.component';



@NgModule({
  declarations: [
    CardCustomerComponent,
    DialogPdfShowComponent
  ],
  imports: [
    CommonModule,
    /**/
    MatCardModule,
    MatPaginatorModule,
    FlexLayoutModule,
    /**/
    FindModule,
    /**/
    PdfViewerCustomerModule
  ],
  exports: [CardCustomerComponent]

})
export class CardCustomerModule {}

