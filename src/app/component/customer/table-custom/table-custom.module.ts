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


@NgModule({
  declarations: [
    TableCustomComponent,
    ChangeColumnTable,
    IfPipe,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [TableCustomComponent]

})
export class TableCustomModule {}

