import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeviceDetectorService} from 'ngx-device-detector';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GuardDeactivate} from './components/customers/assets/services/guard-deactivate.service';
import {NavService} from './components/customers/assets/services/nav.service';
import {ProductsModule} from './components/products/products.module';
import {ScrollEventDirective} from './directives/scroll-event.directive';
import {ShareModule} from './modules/share.module';

@NgModule({
    declarations: [
        AppComponent,
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
        ShareModule,
    ],
    exports: [ShareModule],
    entryComponents: [],
    providers: [NavService, GuardDeactivate, DeviceDetectorService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

