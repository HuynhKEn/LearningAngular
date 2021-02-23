import { NgZone, Directive, AfterViewInit, Renderer2, ChangeDetectorRef,
   Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
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
import { NgBodyScrollLockService } from 'ng-body-scroll-lock';
import $ from 'jquery';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
export interface MediaItem {
  id: number;
  link: string;
  topic?: string;
  videoTime?: number;
  fileType?: string;
  thumb?: string;
  startDate?: string;
  endDate?: string;
  title?: string;
}
export interface CardItem{
  id: number;
  imgPath: string;
  content: string;
  subImgPath: string;
  subTitle: string;
  title?: string;
}
function isMediaItem(object: any): boolean{
  if (object[0].hasOwnProperty('fileType')){
    return true;
  } else{
    return false;
  }
}
// tslint:disable-next-line:typedef
function makeThumb(page) {
  // draw page to fit into 96x96 canvas
  const canvas = document.createElement('canvas');
  canvas.width = document.body.clientWidth;
  const scale = (canvas.width / page.view[2]);
  const viewport = page.getViewport({scale});
  canvas.height = page.view[3] * scale;

  return page
    .render({
      canvasContext: canvas.getContext('2d'),
      viewport,
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
export class CardCustomerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('inputSearch', {static: false}) inputEl: ElementRef;
  @ViewChild('bodyEl', {static: false}) bodyEl: ElementRef;
  @Input() header: boolean;
  @Input() imageContent: boolean;
  @Input() data: any;
  dataTranforms = [];
  length = 20;
  pageSize = 6;
  pageEvent: PageEvent;
  isMedia = false;
  public isInPutSearchOpen = false;
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private bodyScrollLock: NgBodyScrollLockService,
    private zone: NgZone,
    private renderer: Renderer2) {}
  ngOnInit(): void {
    if (isMediaItem(this.data)) {
      this.isMedia = true;
      this.data.forEach((x) => {
        if (x.fileType !== 'video'){
          if (x.thumb === '') {
            pdfjsLib
            .getDocument(
                {
                  url: 'https://demo-bucket-learn.s3-ap-northeast-1.amazonaws.com/1605064635000.pdf',
                  cMapUrl: 'pdfjs/cmaps/',
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
                      this.dataTranforms.push({
                        id: x.id,
                        link: this.sanitizer.bypassSecurityTrustResourceUrl(
                          x.link
                        ),
                        topic: x.topic,
                        fileType: x.fileType,
                        title: x.title,
                        startDate: x.startDate,
                        endDate: x.endDate,
                        thumb: this.sanitizer.bypassSecurityTrustResourceUrl(canvas
                          .toDataURL('image/png')),
                      });
                    });

                })
              ).then( () => {

              });
            })
            .catch(console.error);
          } else {
            this.dataTranforms.push(x);
          }

        } else{
          this.dataTranforms.push({
            id: x.id,
            link: this.sanitizer.bypassSecurityTrustResourceUrl(
              x.link
            ),
            topic: x.topic,
            fileType: x.fileType,
            title: x.title,
            startDate: x.startDate,
            endDate: x.endDate,
            thumb: x.thumb,
          });

        }
      });

    } else{
      this.data.forEach(element => {
        this .dataTranforms.push({
          id: element.id,
          imgPath : element.imgPath,
          content: element.content,
          title: element.title,
          subImgPath: element.subImgPath,
          subTitle: element.subTitle,
        });
      });
    }
  }

  openDialog(src): void{
    const dialogRefConfirm = this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: {title: '確認', message: ''},
    });
    dialogRefConfirm.afterClosed().subscribe( (result) => {
      if (result) {
          const dialogRef = this.dialog.open(DialogPdfShowComponent, {
            width: '50vw',
            data: src,
          });

          dialogRef.afterClosed().subscribe( (value) => {
              // Doing something
          });
      }
    });
  }
}
