import {NgModule} from '@angular/core';
import {CardCustomerComponent} from "./card-customer.component";
import {PdfViewerCustomerModule} from "../pdf-viewer-customer/pdf-viewer-customer.module";
import {DialogPdfShowComponent} from "./dialog-pdf-show/dialog-pdf-show.component";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FindModule} from "../find-component/find.module";



@NgModule({
  declarations: [
    CardCustomerComponent,
    DialogPdfShowComponent
  ],
  imports: [
    CommonModule,
    PdfViewerCustomerModule,
    MatCardModule,
    FlexLayoutModule,
    FindModule,
    MatPaginatorModule
  ],
  exports: [CardCustomerComponent]

})
export class CardCustomerModule {}

