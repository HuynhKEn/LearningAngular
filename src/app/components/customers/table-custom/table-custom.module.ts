import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {ChangeColumnTable} from '../../../pipes/change-column-table.pipe';
import {IfPipe} from '../../../pipes/if.pipe';
import {ControlModifyDialogModule} from '../control-modify-dialog/control-modify-dialog.module';
import {MediaShowDialogCustomerModule} from '../media-show-dialog-customer/media-show-dialog-customer.module';
import {TableCustomComponent} from './table-custom.component';


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

