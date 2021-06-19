import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

import {FileUploadModule} from 'ng2-file-upload';
import {Ng2ImgMaxModule} from 'ng2-img-max';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CapitalizePipe} from '../../pipe/capitalize.pipe';
import {CommonDataService} from '../../service/common-data.service';
import {CardShowItemComponent} from '../card-show-item/card-show-item.component';
import {CodeManageComponent} from '../code-manage/code-manage.component';
import {CardCustomerModule} from '../customer/card-customer/card-customer.module';
import {CarouselCustomerVerticalModule} from '../customer/carousel-customer-vertical/carousel-customer-vertical.module';
import {CarouselCustomerModule} from '../customer/carousel-customer/carousel-customer.module';
import {MenuListItemMobileModule} from '../customer/menu-list-item-mobile/menu-list-item-mobile.module';
import {MenuListItemModule} from '../customer/menu-list-item/menu-list-item.module';
import {PaginationCustomerComponent} from '../customer/pagination-customer/pagination-customer.component';
import {PdfViewerCustomerModule} from '../customer/pdf-viewer-customer/pdf-viewer-customer.module';
import {TableCustomModule} from '../customer/table-custom/table-custom.module';
import {HeaderModule} from '../header/header.module';
import {ManagerAdminMediaComponent} from '../manager-admin-media/manager-admin-media.component';
import {MediaComponent} from '../media/media.component';
import {PdfAdminComponent} from '../pdf-admin/pdf-admin.component';
import {PostAdminComponent} from '../post-admin/post-admin.component';
import {PostAssignmentComponent} from '../post-assignment/post-assignment.component';
import {TopicComponent} from '../topic-admin/topic.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    TopicComponent,
    PostAdminComponent,
    MediaComponent,
    CardShowItemComponent,
    PostAssignmentComponent,
    PaginationCustomerComponent,
    CodeManageComponent,
    ManagerAdminMediaComponent,
    PdfAdminComponent,
    CapitalizePipe

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,

    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,


    ReactiveFormsModule,
    Ng2ImgMaxModule,
    FlexLayoutModule,
    FileUploadModule,
    MultiSelectModule,
    DropdownModule,

    CardCustomerModule,
    TableCustomModule,
    PdfViewerCustomerModule,
    CarouselCustomerModule,
    CarouselCustomerVerticalModule,

    HeaderModule,
    MenuListItemModule,
    MenuListItemMobileModule,

  ],
  exports: [
    PostAdminComponent,

  ],
  providers: [
    CommonDataService
  ]


})

export class AdminModule {
}

