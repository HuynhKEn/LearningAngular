import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss'],
})
export class TableCustomComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('configure') configure: any;
  actionEvent = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.configure.columns;
    this.dataSource = new MatTableDataSource<any>(this.configure.data);
    if (this.configure.action) {
      this.displayedColumns.push('ACTION');
      this.actionEvent = ['EDIT', 'REMOVE', 'ADD'];
    }

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  filterAction(item: string) {
    return item !== 'ACTION';
  }
  filterFileType(item: string) {
    return item !== 'FILE_TYPE';
  }
  playOn(src) {
    fetch(src, {
      headers: {
        'Content-Type': 'application/pdf',
        Accept: 'application/pdf',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      mode: 'no-cors',
    })
      .then((response) => {
        return response.blob();
      })
      .then((myBlod) => {
        let iframe = document.createElement('iframe');
        iframe.src = window.URL.createObjectURL(new Blob([myBlod]));
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        setTimeout(() => {
          iframe.contentWindow.focus();
          // iframe.contentWindow.open();
          iframe.contentWindow.print();
        }, 1000);
      })
      .then(() => {});
  }
}
