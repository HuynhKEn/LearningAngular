import {NgModule} from '@angular/core';
import {PdfViewerCustomerComponent} from "./pdf-viewer-customer.component";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    PdfViewerCustomerComponent
  ],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [PdfViewerCustomerComponent]

})
export class PdfViewerCustomerModule {
}

