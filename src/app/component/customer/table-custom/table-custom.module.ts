import {NgModule} from '@angular/core';
import {TableCustomComponent} from "./table-custom.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {ChangeColumnTable} from "../../../pipe/change-column-table.pipe";
import {IfPipe} from "../../../pipe/if.pipe";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ControlModifyDialogModule} from "../control-modify-dialog/control-modify-dialog.module";
import {MediaShowDialogCustomerModule} from "../media-show-dialog-customer/media-show-dialog-customer.module";


@NgModule({
  declarations: [
    TableCustomComponent,
    ChangeColumnTable,
    IfPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ControlModifyDialogModule,
    MediaShowDialogCustomerModule
  ],
  exports: [TableCustomComponent, MatFormFieldModule, MatInputModule]

})
export class TableCustomModule {}

