import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './component/header/header.component';
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component'
import {ShareModule} from './module/share/share.module';
import {LayoutComponent} from './component/layout/layout.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './component/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { TopicComponent } from './component/topic/topic.component';
import {PostAdminComponent} from './component/post-admin/post-admin.component';
import { MediaComponent } from './component/media/media.component'
import { IfPipe } from './pipe/if.pipe';
import {ChangeColumnTable} from './pipe/change-column-table.pipe';
import { TableCustomComponent } from './component/customer/table-custom/table-custom.component';
import { PdfViewerCustomerComponent } from './component/customer/pdf-viewer-customer/pdf-viewer-customer.component';

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
    ChangeColumnTable,
    TableCustomComponent,
    IfPipe,
    PdfViewerCustomerComponent,


  ],
  imports: [
    AppRoutingModule,
    FlexLayoutModule,
    ShareModule,
    NgbModule
  ],
  exports:[ShareModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
