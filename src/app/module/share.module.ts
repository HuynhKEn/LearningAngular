import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';
/**/
/**/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
/**/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';

import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import {NgBodyScrollLockModule} from 'ng-body-scroll-lock';
import {NgBodyScrollLockService} from 'ng-body-scroll-lock';
/**/
import {AceEditorModule} from 'ng2-ace-editor';
/**/
import {MultiSelectModule} from 'primeng/multiselect';

/**/

/**/
/**/

/**/
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
    NgbAlertModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    NgBodyScrollLockModule,


    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    AceEditorModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatSidenavModule,
    MultiSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    FormsModule,
    NgbAlertModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    NgBodyScrollLockModule,


    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    AceEditorModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatSidenavModule,
    MultiSelectModule,
    MatFormFieldModule,
  ],
  providers: [NgBodyScrollLockService]
})
export class ShareModule {
}
