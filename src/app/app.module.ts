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
import {GuardDeactivate} from './component/customer/B-set-up-service/guard-deactivate.service';
import {PostComponent} from "./component/post/post.component";
import {LoginModule} from "./component/login/login.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {SidenavListComponent} from "./component/sidenav-list/sidenav-list.component";
import {HeaderModule} from "./component/header/header.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminService} from "./service/admin/admin.service";
import {ProductsModule} from "./component/products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    LayoutComponent,
    RegisterComponent,
    SidenavListComponent,
  ],
  imports: [
    AppRoutingModule,
    LoginModule,
    ProductsModule,
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    NgbModule,
    HeaderModule,
    ShareModule,
    BrowserAnimationsModule,
  ],
  exports: [SidenavListComponent, HeaderModule, ShareModule],
  entryComponents: [],
  providers: [AdminService, NavService, GuardDeactivate],
  bootstrap: [AppComponent],
})
export class AppModule {
}

