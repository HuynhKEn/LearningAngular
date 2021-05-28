import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {FindModule} from "../customer/find-component/find.module";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    FindModule
  ],
  exports: [
    HeaderComponent,
  ]


})

export class HeaderModule {
}
