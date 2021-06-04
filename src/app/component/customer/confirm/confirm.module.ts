import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {ConfirmComponent} from "./confirm.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,

  ],
  exports: [ConfirmComponent],

})
export class ConfirmModule {}

