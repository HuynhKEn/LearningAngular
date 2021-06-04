import {NgModule} from '@angular/core';
import {MediaShowDialogCustomerComponent} from "./media-show-dialog-customer.component";
import {MatDialogModule} from "@angular/material/dialog";
import {PdfViewerCustomerModule} from "../pdf-viewer-customer/pdf-viewer-customer.module";
import {CodeViewerModule} from "../code-viewer/code-viewer.module";
import {CommonModule} from "@angular/common";
import {SafePipe} from "../../../pipe/safe.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SafePipe,
    MediaShowDialogCustomerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    CodeViewerModule,
    PdfViewerCustomerModule,

  ],
  exports: [MediaShowDialogCustomerComponent, CodeViewerModule]

})
export class MediaShowDialogCustomerModule {}

