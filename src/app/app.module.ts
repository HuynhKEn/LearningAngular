import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GuardDeactivate} from './component/customer/B-set-up-service/guard-deactivate.service';
import {NavService} from './component/customer/B-set-up-service/nav.service';
import {HeaderModule} from './component/header/header.module';
import {HomeComponent} from './component/home/home.component';
import {LayoutComponent} from './component/layout/layout.component';
import {LoginModule} from './component/login/login.module';
import {PostComponent} from './component/post/post.component';
import {ProductsModule} from './component/products/products.module';
import {RegisterComponent} from './component/register/register.component';
import {SidenavListComponent} from './component/sidenav-list/sidenav-list.component';
import {ShareModule} from './module/share/share.module';
import {AdminService} from './service/admin/admin.service';

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

