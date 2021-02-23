import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { OwlModule } from 'ngx-owl-carousel';
import { NguCarouselModule } from '@ngu/carousel';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { NgBodyScrollLockModule } from 'ng-body-scroll-lock';
import { NgBodyScrollLockService } from 'ng-body-scroll-lock';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AceEditorModule } from 'ng2-ace-editor';

export const dateFormat = {
  parse: {
      dateInput: 'YYYY/MM/DD',
  },
  display: {
      dateInput: 'YYYY/MM/DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxExtendedPdfViewerModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbAccordionModule,
    Ng2ImgMaxModule,
    FlexLayoutModule,
    FileUploadModule,
    HttpClientModule,
    OwlModule,
    NguCarouselModule,
    NgBodyScrollLockModule,
    NgxYoutubePlayerModule.forRoot(),


    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MultiSelectModule,
    DropdownModule,

    HighlightModule,
    HighlightJsModule,
    AceEditorModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgxYoutubePlayerModule,
    NgxExtendedPdfViewerModule,
    Ng2ImgMaxModule,
    FlexLayoutModule,
    FileUploadModule,
    HttpClientModule,
    NgBodyScrollLockModule,
    OwlModule,
    NguCarouselModule,


    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MultiSelectModule,
    DropdownModule,

    HighlightModule,
    HighlightJsModule,
    AceEditorModule


  ],
  providers: [NgBodyScrollLockService,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: dateFormat
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class ShareModule {}
