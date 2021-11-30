import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeviceDetectorService} from 'ngx-device-detector';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminService} from './components/blogs/assets/services/admin.service';
import {HeaderModule} from './components/blogs/header/header.module';
import {HomeComponent} from './components/blogs/home/home.component';
import {LayoutComponent} from './components/blogs/layout/layout.component';
import {LoginModule} from './components/blogs/login/login.module';
import {PostComponent} from './components/blogs/post/post.component';
import {RegisterComponent} from './components/blogs/register/register.component';
import {SidenavListComponent} from './components/blogs/sidenav-list/sidenav-list.component';
import {GuardDeactivate} from './components/customer/assets/services/guard-deactivate.service';
import {NavService} from './components/customer/assets/services/nav.service';
import {ProductsModule} from './components/products/products.module';
import {ScrollEventDirective} from './directive/scroll-event.directive';
import {ShareModule} from './module/share.module';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        HomeComponent,
        LayoutComponent,
        RegisterComponent,
        SidenavListComponent,
        ScrollEventDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        NgbModule,
        FlexLayoutModule,
        AppRoutingModule,
        ProductsModule,
        LoginModule,
        HeaderModule,
        ShareModule,
    ],
    exports: [SidenavListComponent, HeaderModule, ShareModule],
    entryComponents: [],
    providers: [AdminService, NavService, GuardDeactivate, DeviceDetectorService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

