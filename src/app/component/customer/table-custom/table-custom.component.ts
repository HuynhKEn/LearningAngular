import { AfterViewInit, ChangeDetectorRef, Component,
   EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { SortDirection } from '@angular/material/sort';
import { ConfirmComponent } from '../confirm/confirm.component';
import { cloneDeep } from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { MediaShowDialogCustomerComponent } from '../media-show-dialog-customer/media-show-dialog-customer.component';
import { ControlModifyDialogComponent } from '../control-modify-dialog/control-modify-dialog.component';
import { GLOBAL_CONSTANT } from '../../../constant/global-constant';
@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss'],
})
export class TableCustomComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // tslint:disable-next-line:no-input-rename
  @Input('configure') configure: any;
  @Output() deleteItem ? = new EventEmitter();
  actionEvent = [];
  filterEvent = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  objectFilter: any = {};
  filterValue: string;
  columnName: string;
  filterTimeout: any = null;
  pageSizeIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 15, 20];
  inputColumn: string[];
  disableSearch = {};
  numberRow: number;
  selection = new SelectionModel<{}>();
  allowMultiSelect = true;
  addAction = false;
  GLOBAL: any;
  constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
    this.displayedColumns = this.configure.columns;
    this.numberRow = this.displayedColumns.length - 1;
    this.inputColumn = cloneDeep(this.displayedColumns.map(res => res.toString() + 'INPUT'));
    this.disableSearch = this.configure.disableSearch;
    this.dataSource = new MatTableDataSource<any>(this.configure.data);
    this.selection = new SelectionModel<{}>(this.allowMultiSelect, []);
    if (this.configure.action === true) {
      this.displayedColumns.push('ACTION');
      this.actionEvent = ['SELECT', 'EDIT', 'REMOVE'];
      this.addAction = true;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'NO': return item.id;
        case 'DURATION': return item.videoTime;
        default: return item[property.toLowerCase()];
      }
    };
    this.dataSource.sort = this.sort;
    this.setPagiantor();
  }


  filterAction(item: string): boolean {
    return item !== 'ACTION';
  }


  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle(): void{
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  /** Gets the selected rows array on row select. */
  rowSelect(): void {

  }

  applyFilter(filterValue: string, columnNames: string): void {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
        window.scrollTo(0, 0);
        this.pageSizeIndex = 0;
        this.objectFilter[columnNames] = filterValue;
        Object.entries(this.objectFilter).forEach(object =>
            (object[1] === '' ? delete this.objectFilter[object[0]] : 0));
        const arrKeys = Object.keys(this.objectFilter);
        const dataFilter: any[] = [];
        this.configure.data.forEach((row) => {
            let countCheck = 0;
            arrKeys.forEach((key) => {
                let data = row[key];
                if (data !== null) {
                    data = data.toString();
                    const checkData = (data.toLowerCase()).includes(this.objectFilter[key].toLowerCase());
                    if (!checkData) {
                        countCheck++;
                    }
                } else {
                    countCheck++;
                }
            });
            if (countCheck === 0) {
                dataFilter.push(row);
            }
        });
        if (arrKeys.length === 0) {
            this.dataSource = new MatTableDataSource(this.configure.data);
        } else {
            this.dataSource = new MatTableDataSource(dataFilter);
        }
        this.filterValue = filterValue;
        this.columnName = columnNames;
        this.setPagiantor();
    }, 500);
  }


  setPagiantor(): void {
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
  }

  public handlePage(e: any): void {
    this.pageSizeIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }
  playOn(src: string, fileType: string, title = ''): void {
    const dialogMedia = this.dialog.open(MediaShowDialogCustomerComponent, {
      width: fileType !== 'code' ? '50vw' : '70vw',
      height: fileType === 'pdf' ? '85vh' : '',
      data: {
        title,
        src,
        fileType,
        height: '60vh',
      }
    });
  }


  deleteConfirm(backup: boolean = false): boolean{
    const  dialogConfirm = this.dialog.open( ConfirmComponent, {
        width: '500px',
        data: {
          title: 'Confirm',
          message: 'Are you sure you want to delete the data?',
          backup
        }
    });
    if (!backup){
      dialogConfirm.afterClosed().subscribe( res => {
          if (res){
            return res;
          }
      });
    }
    return false;
  }



  deleteItemFn(event, i): void {
    const isDelete = this.deleteConfirm();
    if (isDelete){
      event.index = this.pageSizeIndex * this.pageSize + i + 1;
      this.deleteItem.emit(event);
    }
  }

  editConfirm(dataEdit): void {
    const typeElement = this.configure.typeElement;
    const dialogConfirm = this.dialog.open(ControlModifyDialogComponent, {
      width: (this.configure.widthDialog).toString() + 'px',
      height: (this.configure.heightDialog).toString() + 'px',
      data: [dataEdit, 'media form', 'edit', typeElement]
    });
  }
  addConfirm(): void {
    const typeElement = this.configure.typeElement;
    const dialogConfirm = this.dialog.open(ControlModifyDialogComponent, {
      width: (this.configure.widthDialog).toString() + 'px',
      height: (this.configure.heightDialog + 20).toString() + 'px',
      data: ['', 'media form', 'add', typeElement]
    });
  }
}
