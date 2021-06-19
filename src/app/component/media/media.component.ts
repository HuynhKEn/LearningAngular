import {Component, EventEmitter, OnInit} from '@angular/core';

import {FileUploader} from 'ng2-file-upload';

const URL = 'http://localhost:3000/upload';

function readBase64(file): Promise<any> {
  const reader  = new FileReader();
  return new Promise((resolve, reject) => {
    reader.addEventListener('load', () => {
      resolve(reader.result);
    }, false);
    reader.addEventListener('error', (event) => {
      reject(event);
    }, false);
    reader.readAsDataURL(file);
  });
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  response: string;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  maxFileSize = 5 * 1024 * 1024;
  /*
    PDF
  **/
  countWriteLog = { number: 0, lessonId: null, fileTypeCurrent: ''};

  constructor(){
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: false,
      maxFileSize: this.maxFileSize
    });
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe( res => this.response = res );
  }
  ngOnInit(): void{
    this.uploader.onWhenAddingFileFailed = (item, filter) => {
      let message: string;
      switch (filter.name) {
        case 'fileSize':
          message = 'Warning ! \nThe uploaded file \"' + item.name + '\" is ' + this.formatBytes(item.size) + ', this exceeds the maximum allowed size of ' + this.formatBytes(this.maxFileSize);
          break;
        default:
          message = 'Error trying to upload file ' + item.name;
          break;
      }

      alert(message);
    };
  }
  formatBytes(bytes, decimals?): any {
    if (bytes === 0) { return '0 Bytes'; }
    // tslint:disable-next-line:one-variable-per-declaration
    const k = 1024, dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event): any {
    const file: File = event[0];
    readBase64(file)
      .then( (data) => {
    });
  }


}
