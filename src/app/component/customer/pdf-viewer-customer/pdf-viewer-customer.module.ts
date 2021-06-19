import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DownloadPDFService } from '../../../service/common-service/download.service';
import { PdfViewerCustomerComponent } from './pdf-viewer-customer.component';

@NgModule({
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    MatIconModule,
    FormsModule,
    MatTooltipModule,
  ],
  declarations: [PdfViewerCustomerComponent],
  exports: [
    PdfViewerCustomerComponent
  ],
  providers: [DownloadPDFService]
})

export class PdfViewerCustomerModule { }
