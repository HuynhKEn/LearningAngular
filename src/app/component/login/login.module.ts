import {NgModule} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AdminModule} from "../admin/admin.module";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    LoginComponent
  ]
  ,
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    AdminModule,
  ],
  providers: [],
  exports: [CommonModule],
  entryComponents: []
})
export class LoginModule {
}

