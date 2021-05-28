import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShareModule} from './module/share/share.module';
import {LayoutComponent} from './component/layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RegisterComponent} from './component/register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './component/home/home.component';
import {NavService} from './component/customer/B-set-up-service/nav.service';
import {CarouselCustomerComponent} from './component/customer/carousel-customer/carousel-customer.component';
import {ConfirmComponent} from './component/customer/confirm/confirm.component';
import {CarouselCustomerVerticalComponent} from './component/customer/carousel-customer-vertical/carousel-customer-vertical.component';
import {GuardDeactivate} from './component/customer/B-set-up-service/guard-deactivate.service';
import {MediaShowDialogCustomerComponent} from './component/customer/media-show-dialog-customer/media-show-dialog-customer.component';
import {SafePipe} from './pipe/safe.pipe';
import {CapitalizePipe} from './pipe/capitalize.pipe';
import {ControlModifyDialogComponent} from './component/customer/control-modify-dialog/control-modify-dialog.component';
import {PostComponent} from "./component/post/post.component";
import {LoginModule} from "./component/login/login.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {SidenavListComponent} from "./component/sidenav-list/sidenav-list.component";
import {HeaderModule} from "./component/header/header.module";
import * as ace from 'ace-builds/src-noconflict/ace';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminService} from "./service/admin/admin.service";
ace.config.set('basePath', '/assets/ui/');
ace.config.set('modePath', '');
ace.config.set('themePath', '');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    RegisterComponent,
    PostComponent,
    SidenavListComponent,
    CarouselCustomerComponent,
    CarouselCustomerVerticalComponent,
    ConfirmComponent,
    MediaShowDialogCustomerComponent,
    ControlModifyDialogComponent,

    SafePipe,
    CapitalizePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    NgbModule,
    HeaderModule,
    ShareModule,
    LoginModule,
  ],
  exports: [SidenavListComponent, HeaderModule, ShareModule],
  entryComponents: [],
  providers: [AdminService, NavService, GuardDeactivate],
  bootstrap: [AppComponent],
})
export class AppModule {
}

