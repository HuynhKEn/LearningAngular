import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './component/header/header.component';
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component'
import {ShareModule} from './module/share/share.module';
import {LayoutComponent} from './component/layout/layout.component'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    AppRoutingModule,
    FlexLayoutModule,
    ShareModule
  ],
  exports:[ShareModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
