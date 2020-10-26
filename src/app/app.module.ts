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
