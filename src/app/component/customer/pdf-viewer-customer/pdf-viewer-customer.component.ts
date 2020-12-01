import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { defaultBase64} from '../default';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Platform } from '@angular/cdk/platform';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-pdf-viewer-customer',
  templateUrl: './pdf-viewer-customer.component.html',
  styleUrls: ['./pdf-viewer-customer.component.scss']
})
export class PdfViewerCustomerComponent implements OnInit, OnChanges {
  @Output('onLoadComplete') loadComplete = new EventEmitter();
  @Output('onReadComplete') readComplete = new EventEmitter();
  @Output('onLoadPdfError') loadPdfError = new EventEmitter();
  @Input() sourcePdf: string;
  pdfPage: number = 1;
  pdf: any;
  src = defaultBase64[0];
  howMuchPage: number = 0;
  toolTip = false;
  backGroundColorPdf: string = "white";
  isHiddenSpinner: boolean;
  zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width',
    0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
  _oldZoomSetting: number | string | undefined = 'page-width';
  eventFullScreen: boolean = true;
  flagDownloadPdf: boolean = true;
  //Platform
  isMobile: boolean = false;
  isSafari: boolean = false;
  isAndroid: boolean = false;
  sizePlatForm: string = "72vh";
  sizeOldPlatForm: string = "72vh";
  viewMode: string;
  showToolbar: boolean = true;
  sidebarToggle: string = "none";
  hozFullScreen: boolean = false;
  flagFullScreen: boolean = false;
  constructor(
    private http: HttpClient,
    private platform: Platform,
    private deviceService: DeviceDetectorService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    ) {
        this.iconRegistry.addSvgIcon(
          'exit-full-screen',
          this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/exit-full-screen.svg'));
     }

  ngOnInit(): void {
    // this.isHiddenSpinner = true;
    this.isSafari = this.platform.SAFARI;
    this.isAndroid = this.platform.ANDROID;
    this.isMobile = this.deviceService.isMobile() || this.platform.IOS || this.isAndroid;
    if (this.isMobile){
      this.viewMode = "single";
    } else{
      this.viewMode = "single";
    }
    this._oldZoomSetting = 0;
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.getPdfFormServer();
  }
  settingPDF(){
    return {
      backGroundColor: this.backGroundColorPdf,
      isPinchOnMobile: true,
      handTool: true,
      fullscreen: false,
      scrollbar: true,
      zoom: true,
      showBorders: true,
      showBookmarkButton: false,
      showPagingButtons: true,
      showPrintButton: false,
      showPropertiesButton: true,
      showSidebarButton: false,
      sidebarVisible: false,
      showSpreadButton: true,
      showOpenFileButton: false,
      mobileFriendlyZoom: true
    };
   }

   onPdfLoad(event){
     //doing something
   }
   romanToInt(str1) {
      let  num = this.charToInt( str1.charAt(0) );
      let  pre;
      let curr;
      for (let i = 1; i < str1.length; i++){
        curr = this.charToInt( str1.charAt(i) );
        pre = this.charToInt( str1.charAt(i - 1) );
        if(curr <= pre){
          num += curr;
        } else {
          num = num - pre * 2 + curr;
        }
      }
      return num;
  }
  charToInt(c){
    switch (c){
      case 'i': return 1;
      case 'v': return 5;
      case 'x': return 10;
      case 'l': return 50;
      case 'c': return 100;
      case 'd': return 500;
      case 'm': return 1000;
      default: return -1;
    }
  }
  pagesLoaded(event){
    if (this.isMobile){
      const h = event.source.viewer.clientHeight;
      this.sizePlatForm = (h + 50) + 'px';
      this.sizeOldPlatForm = this.sizePlatForm ;
      this.cdr.detectChanges();
    }
    this.pdf = event;
    this.howMuchPage = event.pagesCount;
    const viewContainer = document.getElementById("viewerContainer");
    viewContainer.style.border = "2px solid #DCDCDC";
    this.onReadComplete();
    this.loadComplete.emit(true);
  }

   onPageChange(event){
     this.onReadComplete();
   }

   onPageRendered(event){
     //doing something
   }
   onPdfLoadingFailed(event){
     if (event){
      this.loadPdfError.emit(true);
      this.src = defaultBase64[1];
     }
   }

   /**
    * Left and Right Navigation
    */
   changeIndexPage(amount: number){
     if (amount === 1){
      const element = document.getElementById("next");
      element.dispatchEvent(new Event("click"));
     } else{
       if (amount === -1){
        const element = document.getElementById("previous");
        element.dispatchEvent(new Event("click"));
       }
     }
   }

   /**
    * Download pdf
    */

   getPdfFormServer() {
    this.pdfPage = 1;
    this.isHiddenSpinner = false;
    fetch(this.sourcePdf)
      .then((response) => {
        return response.blob();
      })
      .then( (myBlob) => {
        const data = new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onload = () => {
            const base64 = reader.result as string;
            resolve(base64.replace(/^data:.+;base64,/, ''));
          };
          reader.readAsDataURL(myBlob);
        });
        data.then(res => {
          this.src = res as string;
          this.isHiddenSpinner = true;
        });
      }, (error) =>{
        this.isHiddenSpinner = true;
      });
    }

  /*
   * Create file name
   */
  getRandomStringFileName() {
    length = Math.floor(Math.random() * 32);
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let  result = '';
    for ( let  i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result + ".pdf";
  }

  /**
   * Event show and hiden toggleBar
   */
  onShowToggleBar(){
    this.showToolbar = !this.showToolbar;
  }

  async printPDF() {
    this.isHiddenSpinner = false;
    const iframe = document.createElement('iframe');
    fetch(this.sourcePdf).then( response => {
        return response.blob();
    }).then( (myBlob) => {
        iframe.src = window.URL.createObjectURL(new Blob([myBlob], {type: "application/pdf"}));
        document.body.appendChild(iframe);
        window.URL.revokeObjectURL(iframe.src);
        this.isHiddenSpinner = true;
    }).then(
         () => {
            setTimeout( () => {
              iframe.contentWindow.print();
              this.isHiddenSpinner = true;
            }, 100);
        },(error) => {
            this.isHiddenSpinner = true;
        });
  }

  downloadPDF(){
    const element = document.getElementById("download");
        element.dispatchEvent(new Event("click"));
    }

  /**
   *
   */
  onZoomIn(){
      const element = document.getElementById("zoomIn");
      element.dispatchEvent(new Event("click"));
  }

  onZoomOut(){
      const element = document.getElementById("zoomOut");
      element.dispatchEvent(new Event("click"));
  }

  // currentZoomFactor(event){
  //   const checkZoom = ['auto', 'page-actual', 'page-fit', 'page-width'];
  //   if (checkZoom.includes(event)){
  //     event = "-1";
  //   }
  //   this._oldZoomSetting = Number(event);
  // }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullScreenMode() {
    if (document.fullscreenElement) {
      this.sizePlatForm = '100vh';
      this.backGroundColorPdf = "black";
      this.flagFullScreen = true;
      this.eventFullScreen = false;
      this.hozFullScreen = true;

      this.cdr.detectChanges();
    } else {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      this.hozFullScreen = false;
      this.eventFullScreen = true;
      this.backGroundColorPdf = "white";
      this.cdr.detectChanges();
    }

  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.flagFullScreen) {
      this.sizePlatForm = this.sizeOldPlatForm;
      this.flagFullScreen = false;
      this.cdr.detectChanges();
    }
  }

  fullScreen(){
    const elem = document.getElementById("pdfElement")  as HTMLElement & {
      requestFullscreen(): Promise<void>;
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
    this.flagFullScreen = true;
    this.sizePlatForm = '100vh';
    if (elem.requestFullscreen) {

      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {

      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
    this.cdr.detectChanges();
  }

  onHorfullScreen(){
    const element = document.getElementById("presentationMode");
    element.dispatchEvent(new Event("click"));
  }
  closeFullscreen() {
    const document: any = window.document;
    this.flagFullScreen = false;
    this.sizePlatForm = this.sizeOldPlatForm;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    this.cdr.detectChanges();
  }

  onReadComplete() {
    if (this.pdfPage === this.howMuchPage) {
      this.readComplete.emit(true);
    } else {
      this.readComplete.emit(false);
    }
  }
}
