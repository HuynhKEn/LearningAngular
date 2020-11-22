import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit,  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Platform } from '@angular/cdk/platform';
const URL = 'http://localhost:3000/upload';

function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})



export class MediaComponent implements OnInit {
  response:string;
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  maxFileSize = 5 * 1024 * 1024;
  videos = [
    {id:1,link:"https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf",topic:"100",videoTime:100,fileType:"pdf"},
    {id:2,link:"https://cors-anywhere.herokuapp.com/http://anh.cs.luc.edu/python/hands-on/3.1/Hands-onPythonTutorial.pdf",topic:"100",videoTime:100,fileType:"pdf"},
    {id:3,link:"https://cors-anywhere.herokuapp.com/https://alex.smola.org/drafts/thebook.pdf",topic:"100",videoTime:100,fileType:"pdf"},
    {id:4,link:"../../../assets/videos/demo.mp4",topic:"100",videoTime:100,fileType:"video"},
    {id:5,link:"../../../assets/videos/demo.mp4",topic:"100",videoTime:100,fileType:"video"},
    {id:6,link:"../../../assets/videos/demo.mp4",topic:"100",videoTime:100,fileType:"video"},
  ]
  videos_tranforms = [];

  //Platform
  isMobile: boolean = false;
  isSafari: boolean = false;
  isAndroid: boolean = false;
  /*
    PDF
  **/
  countWriteLog = { number: 0, lessonId: null, fileTypeCurrent: ''};
  flagHiddenQuestion: boolean = true;
  isHiddenSpinner:boolean = false;
  sourceOfPDF = 'https://cors-anywhere.herokuapp.com/https://docs.oracle.com/javase/specs/jls/se8/jls8.pdf'



  constructor (private platform: Platform, private sanitizer: DomSanitizer,private deviceService: DeviceDetectorService){
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: false,
      maxFileSize:this.maxFileSize
    });
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe( res => this.response = res );
  }

  settingTable(){
    const columnsDisplay = ["NO","TOPIC","DURATION","FILE_TYPE"];
    const tunrOnactionEvent = true;
    const dataSrc = this.videos
    return {columns:columnsDisplay,action : tunrOnactionEvent,data:dataSrc}
  }

  ngOnInit() :void{
    this.isSafari = this.platform.SAFARI;
    this.isAndroid = this.platform.ANDROID;
    this.isMobile = this.deviceService.isMobile() ||  this.platform.IOS || this.isAndroid;
    this.videos.forEach(x => this.videos_tranforms.push({id:x.id,link:this.sanitizer.bypassSecurityTrustResourceUrl(x.link)}))
    this.uploader.onWhenAddingFileFailed = (item, filter) => {
      let message = '';
      switch (filter.name) {
        case 'fileSize':
          message = 'Warning ! \nThe uploaded file \"' + item.name + '\" is ' + this.formatBytes(item.size) + ', this exceeds the maximum allowed size of ' + this.formatBytes(this.maxFileSize);
          break;
        default:
          message = 'Error trying to upload file '+item.name;
          break;
      }

      alert(message);
    };
  }


  formatBytes(bytes, decimals?) {
    if (bytes == 0) return '0 Bytes';
    const k = 1024,
      dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    readBase64(file)
      .then(function(data) {
    })
  }


  /*
    PDF
  **/

  whenReadComple(event){
    if (event) {
        this.flagHiddenQuestion = false;
        alert(event);
    } else {
        this.flagHiddenQuestion = true;
    }
  }

  whenLoadError(event){
    if (event){
      this.isHiddenSpinner = true;
    }
  }
}
