import { NgZone, Directive, AfterViewInit, Renderer2, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
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
import $ from "jquery";

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
export interface MediaItem {
  id: number;
  link: string;
  topic?: string;
  video?: number;
  fileType?: string;
  thumb?: string;
  title?: string;
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
export class CardCustomerComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('inputSearch', {static: false}) inputEl:ElementRef;
  @ViewChild('bodyEl', {static: false}) bodyEl:ElementRef;
  @Input() header: boolean;
  @Input() imageContent: boolean;
  @Input() data: any;
  videos_tranforms = [];
  length = 20;
  pageSize = 6;
  pageEvent: PageEvent;
  public isInPutSearchOpen: boolean = false;
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private bodyScrollLock: NgBodyScrollLockService,
    private zone: NgZone,
    private renderer: Renderer2) {}
  ngOnInit(): void {
    if (isMediaItem(this.data)) {
      this.data.forEach((x) => {
        if (x.fileType !== "video"){
          pdfjsLib
          .getDocument(
              {
                url: 'https://demo-bucket-learn.s3-ap-northeast-1.amazonaws.com/1605064635000.pdf',
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
                      title: x.title,
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
            title: x.title,
            thumb: x.thumb,
          });

        }
      });

    }
  }

  @HostListener('document:click', ['$event.target'])
  onClickCalled(target) {
    if (target.id == "inputSearch") {
       setTimeout( ()=>{
        this.inputEl.nativeElement.focus({preventScroll:true});
       },0)
      const $body = document.querySelector('body');
      $(document).on('focus','input',()=>{
        $body.classList.add('fix')
      }).on('blur', 'input', function() {
          $body.classList.remove('fix');
      });
    }
  }
  ngAfterViewInit() {
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
