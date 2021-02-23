import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component';
import { ShareModule } from './module/share/share.module';
import { LayoutComponent } from './component/layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './component/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { TopicComponent } from './component/topic-admin/topic.component';
import { PostAdminComponent } from './component/post-admin/post-admin.component';
import { MediaComponent } from './component/media/media.component';
import { IfPipe } from './pipe/if.pipe';
import { ChangeColumnTable } from './pipe/change-column-table.pipe';
import { TableCustomComponent } from './component/customer/table-custom/table-custom.component';
import { PdfViewerCustomerComponent } from './component/customer/pdf-viewer-customer/pdf-viewer-customer.component';
import { MenuListItemComponent } from './component/customer/menu-list-item/menu-list-item.component';
import { MenuListItemMobileComponent } from './component/customer/menu-list-item-mobile/menu-list-item-mobile.component';
import { ListItemCustomerComponent } from './component/customer/list-item-customer/list-item-customer.component';
import { NavService } from './component/customer/B-set-up-service/nav.service';
import { PdfAdminComponent } from './component/pdf-admin/pdf-admin.component';
import { ManagerAdminMediaComponent } from './component/manager-admin-media/manager-admin-media.component';
import { CardCustomerComponent } from './component/customer/card-customer/card-customer.component';
import { DialogPdfShowComponent } from './component/customer/card-customer/dialog-pdf-show/dialog-pdf-show.component';
import { CardShowItemComponent } from './component/card-show-item/card-show-item.component';
import { CarouselCustomerComponent } from './component/customer/carousel-customer/carousel-customer.component';
import { ConfirmComponent } from './component/customer/confirm/confirm.component';
import { CarouselCustomerVerticalComponent } from './component/customer/carousel-customer-vertical/carousel-customer-vertical.component';
import { FindComponentComponent } from './component/customer/find-component/find-component.component';
import { GuardDeactivate } from './component/customer/B-set-up-service/guard-deactivate.service';
import { CodeManageComponent } from './component/code-manage/code-manage.component';
import { MediaShowDialogCustomerComponent } from './component/customer/media-show-dialog-customer/media-show-dialog-customer.component';
import { SafePipe } from './pipe/safe.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ControlModifyDialogComponent } from './component/customer/control-modify-dialog/control-modify-dialog.component';
import { CodeViewerComponent } from './component/customer/code-viewer/code-viewer.component';
import { PostAssignmentComponent } from './component/post-assignment/post-assignment.component';
import { PaginationCustomerComponent } from './component/customer/pagination-customer/pagination-customer.component';
import * as ace from 'ace-builds/src-noconflict/ace';
ace.config.set('basePath', '/assets/ui/');
ace.config.set('modePath', '');
ace.config.set('themePath', '');
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    AdminComponent,
    TopicComponent,
    PostAdminComponent,
    MediaComponent,
    TableCustomComponent,
    PdfViewerCustomerComponent,
    MenuListItemComponent,
    MenuListItemMobileComponent,
    ListItemCustomerComponent,
    PdfAdminComponent,
    ManagerAdminMediaComponent,
    CardCustomerComponent,
    CardShowItemComponent,
    DialogPdfShowComponent,
    CarouselCustomerComponent,
    CarouselCustomerVerticalComponent,
    ConfirmComponent,
    FindComponentComponent,
    CodeManageComponent,
    MediaShowDialogCustomerComponent,
    ControlModifyDialogComponent,
    CodeViewerComponent,
    PostAssignmentComponent,
    PaginationCustomerComponent,

    ChangeColumnTable,
    IfPipe,
    SafePipe,
    CapitalizePipe,

  ],
  imports: [AppRoutingModule, FlexLayoutModule, ShareModule, NgbModule],
  exports: [ShareModule],
  providers: [NavService, GuardDeactivate],
  bootstrap: [AppComponent],
})
export class AppModule {}

