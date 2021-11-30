import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import {SafePipe} from '../../../pipe/safe.pipe';
import {CodeViewerModule} from '../code-viewer/code-viewer.module';
import {PdfViewerCustomerModule} from '../pdf-viewer-customer/pdf-viewer-customer.module';
import {MediaShowDialogCustomerComponent} from './media-show-dialog-customer.component';


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

