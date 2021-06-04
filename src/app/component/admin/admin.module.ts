import {NgModule} from '@angular/core';
import {AdminComponent} from "./admin.component";
import {MediaComponent} from "../media/media.component";
import {PostAdminComponent} from "../post-admin/post-admin.component";
import {PostAssignmentComponent} from "../post-assignment/post-assignment.component";
import {TopicComponent} from "../topic-admin/topic.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2ImgMaxModule} from "ng2-img-max";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FileUploadModule} from "ng2-file-upload";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {PaginationCustomerComponent} from "../customer/pagination-customer/pagination-customer.component";
import {MenuListItemModule} from "../customer/menu-list-item/menu-list-item.module";
import {MenuListItemMobileModule} from "../customer/menu-list-item-mobile/menu-list-item-mobile.module";
import {CardCustomerModule} from "../customer/card-customer/card-customer.module";
import {CardShowItemComponent} from "../card-show-item/card-show-item.component";
import {CodeManageComponent} from "../code-manage/code-manage.component";
import {TableCustomModule} from "../customer/table-custom/table-custom.module";
import {ManagerAdminMediaComponent} from "../manager-admin-media/manager-admin-media.component";
import {PdfAdminComponent} from "../pdf-admin/pdf-admin.component";
import {PdfViewerCustomerModule} from "../customer/pdf-viewer-customer/pdf-viewer-customer.module";
import {HeaderModule} from "../header/header.module";
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonDataService} from "../../service/common-data.service";
import {CarouselCustomerModule} from "../customer/carousel-customer/carousel-customer.module";
import {CarouselCustomerVerticalModule} from "../customer/carousel-customer-vertical/carousel-customer-vertical.module";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {CapitalizePipe} from "../../pipe/capitalize.pipe";

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

