import {NgModule} from '@angular/core';
/**/
import {AceEditorModule} from 'ng2-ace-editor';
/**/
/**/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**/
import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';

import {NgBodyScrollLockModule} from 'ng-body-scroll-lock';
import {NgBodyScrollLockService} from 'ng-body-scroll-lock';
/**/
import {FlexLayoutModule} from '@angular/flex-layout';
/**/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
/**/
import {MultiSelectModule} from 'primeng/multiselect';
/**/

/**/
import {HttpClientModule} from '@angular/common/http';
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
