import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

import {CommonModule} from "@angular/common";
import {FindComponent} from "./find.component";


@NgModule({
  declarations: [
    FindComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FindComponent]

})
export class FindModule {
}

