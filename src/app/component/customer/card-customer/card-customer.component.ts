import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogPdfShowComponent } from './dialog-pdf-show/dialog-pdf-show.component';
import { ConfirmComponent} from '../confirm/confirm.component';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
export interface MediaItem {
  id: number;
  link: string;
  topic?: string;
  video?: number;
  fileType?: string;
  thumb?: string;
}
function isMediaItem(object: any): object is MediaItem[] {
  return true;
}
function makeThumb(page) {
  // draw page to fit into 96x96 canvas
  let canvas = document.createElement('canvas');
  canvas.width = document.body.clientWidth;
  let scale = (canvas.width / page.view[2]);
  let viewport = page.getViewport({scale: scale});
  canvas.height = page.view[3] * scale;

  return page
    .render({
      canvasContext: canvas.getContext('2d'),
      viewport: viewport,
    })
    .promise.then(() => {
      return canvas;
    });
}
@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.scss'],
})
export class CardCustomerComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() header: boolean;
  @Input() imageContent: boolean;
  @Input() data: any;
  videos_tranforms = [];
  length = 20;
  pageSize = 6;
  pageEvent: PageEvent;
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {}
  ngOnInit(): void {
    if (isMediaItem(this.data)) {
      this.data.forEach((x) => {
        if (x.fileType !== "video"){
          pdfjsLib
          .getDocument(
              {
                url: 'https://cors-anywhere.herokuapp.com/http://www.dblab.ntua.gr/~gtsat/collection/Java%20books/Java%20Programming%20Language%20Handbook.pdf',
                cMapUrl: "pdfjs/cmaps/",
                cMapPacked: true
              }
          )
          .promise.then((doc) => {
            const pages = [1];
            return Promise.all(
              pages.map((num) => {
                return doc
                  .getPage(num)
                  .then(makeThumb)
                  .then((canvas) => {
                    this.videos_tranforms.push({
                      id: x.id,
                      link: this.sanitizer.bypassSecurityTrustResourceUrl(
                        x.link
                      ),
                      topic: x.topic,
                      fileType: x.fileType,
                      thumb: this.sanitizer.bypassSecurityTrustResourceUrl(canvas
                        .toDataURL('image/png')),
                    });
                  });

              })
            ).then( () =>{

            });
          })
          .catch(console.error);
        } else{
          this.videos_tranforms.push({
            id: x.id,
            link: this.sanitizer.bypassSecurityTrustResourceUrl(
              x.link
            ),
            topic: x.topic,
            fileType: x.fileType,
            thumb: x.thumb,
          });

        }
      });

    }
  }

  ngAfterViewInit() {
    //
  }

  openDialog(src) {
    const dialogRefConfirm = this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: {title:"確認", message:''},
    });
    dialogRefConfirm.afterClosed().subscribe( (result) => {
      if (result) {
          const dialogRef = this.dialog.open(DialogPdfShowComponent, {
            width: '50vw',
            data: src,
          });

          dialogRef.afterClosed().subscribe((result) => {
            //doing somthing;
          });
      }
    })


  }
}
