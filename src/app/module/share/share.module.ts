import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {NgbAlertModule,NgbCarouselModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatTooltipModule} from '@angular/material/tooltip'
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbAccordionModule,
    FlexLayoutModule,
    FileUploadModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
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
    NgxYoutubePlayerModule.forRoot()
  ]
  ,
  exports: [CommonModule,FormsModule,ReactiveFormsModule,NgbAlertModule,NgbCarouselModule,NgbAccordionModule,
    FlexLayoutModule,FileUploadModule,NgxYoutubePlayerModule,NgxExtendedPdfViewerModule,HttpClientModule,
    MatSidenavModule,MatToolbarModule,MatIconModule,MatCardModule,MatPaginatorModule,MatTooltipModule,
    MatButtonModule,MatListModule,MatMenuModule,MatFormFieldModule,MatInputModule,
    MatCheckboxModule,MatDividerModule,MatSelectModule,MatTableModule]
})
export class ShareModule { }
