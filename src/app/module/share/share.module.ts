import {NgModule} from '@angular/core';
/**/
import {AceEditorModule} from 'ng2-ace-editor';
/**/
/**/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/**/
import {OwlModule} from 'ngx-owl-carousel';
/**/
import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';

import {NguCarouselModule} from '@ngu/carousel';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {Ng2ImgMaxModule} from 'ng2-img-max';
import {NgBodyScrollLockModule} from 'ng-body-scroll-lock';
import {NgBodyScrollLockService} from 'ng-body-scroll-lock';
/**/
import {FileUploadModule} from 'ng2-file-upload';
import {FlexLayoutModule} from '@angular/flex-layout';
/**/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MultiSelectModule} from 'primeng/multiselect';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
/**/

/**/
import {HttpClientModule} from '@angular/common/http';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {HighlightJsModule} from 'ngx-highlight-js';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
/**/
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
    FormsModule,
    ReactiveFormsModule,
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
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MultiSelectModule,
    HighlightModule,
    HighlightJsModule,
    AceEditorModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
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
    NgxYoutubePlayerModule,


    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatRadioModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MultiSelectModule,
    HighlightModule,
    HighlightJsModule,
    AceEditorModule,
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
export class ShareModule {
}
