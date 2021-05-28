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
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
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
    PdfAdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    Ng2ImgMaxModule,
    FlexLayoutModule,
    FileUploadModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MultiSelectModule,
    DropdownModule,

    CardCustomerModule,
    TableCustomModule,
    PdfViewerCustomerModule,

    HeaderModule,
    MenuListItemModule,
    MenuListItemMobileModule,
  ],
  exports: [
    AdminComponent, MatFormFieldModule
  ],
  providers: [
  ]


})

export class AdminModule {
}

