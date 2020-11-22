import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { defaultBase64} from '../default';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Platform } from '@angular/cdk/platform';
import { style } from '@angular/animations';



@Component({
  selector: 'app-pdf-viewer-customer',
  templateUrl: './pdf-viewer-customer.component.html',
  styleUrls: ['./pdf-viewer-customer.component.scss']
})
export class PdfViewerCustomerComponent implements OnInit {
  @Output('onReadComplete') readComplete = new EventEmitter();
  @Output('onLoadPdfError') loadPdfError = new EventEmitter();
  @Input() sourcePdf: string;
  pdfPage:number = 1;
  pdf:any;
  src = defaultBase64;
  howMuchPage:number = 0;
  toolTip = false;
  backGroundColorPdf:string ="white";
  zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width',
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
    2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0,
    3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0];
  _zoomSetting: number | string | undefined = 'page-width';
  _oldZoomSetting: number | string | undefined = 'page-width'
  eventFullScreen:boolean = true;
  //Platform
  isMobile: boolean = false;
  isSafari: boolean = false;
  isAndroid: boolean = false;
  sizePlatForm:string = "80vh"
  sizeOldPlatForm:string = "80vh"
  get zoomSetting() {
    return String(this._zoomSetting);
  }
  set zoomSetting(zoom: string) {
    if (isNaN(Number(zoom))) {
      this._zoomSetting = zoom;
    } else {
      this._zoomSetting = zoom + '%';
    }
  }

  /**
     * Property custom
     * @param showToolbar
     * @param sidebarToggle
  */
  showToolbar:boolean = true;
  sidebarToggle:string ="none"
  hozFullScreen:boolean = false;
  constructor(private http: HttpClient,private platform: Platform,private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isSafari = this.platform.SAFARI;
    this.isAndroid = this.platform.ANDROID;
    this.isMobile = this.deviceService.isMobile() ||  this.platform.IOS || this.isAndroid;
    if (this.isMobile){

      this.zoomSetting = "page-fit";
    }
    else{
      this.zoomSetting = "auto";
    }
    this._oldZoomSetting = 0;
    this.getPdfFormServer();
  }
  /**
     * Setting config inital for pdf
  */
  settingPDF(){
    return {
      backGroundColor:this.backGroundColorPdf,
      isPinchOnMobile:false,
      handTool:false,
      fullscreen:true,
      scrollbar:true,
      zoom:true,
      showBorders:true,
      showBookmarkButton:false,
      showPagingButtons:true,
      showPrintButton:true,
      showPropertiesButton:false,
      showSidebarButton:false,
      sidebarVisible:false,
      showSpreadButton:true,

    };
   }

  /**
     * When page loaded
  */
  pagesLoaded(event){
    this.pdf = event;
    this.howMuchPage = event.pagesCount
    const viewContainer = document.getElementById("viewerContainer");
    viewContainer.style.border ="2px solid #DCDCDC"
    // const sidebarToggle = document.getElementById("sidebarToggle")
    // sidebarToggle.style.display=this.sidebarToggle
  }


   /**
     * when page change
  */
   onPageChange(event){
     this.onReadedComple();
   }

   /**
     * When page change and rendered
  */
   onPageRendered(event){

   }

   onPdfLoadingFailed(event){
     if (event){
      this.loadPdfError.emit(true)
     }
   }

   /**
    * Left and Right Navigation
    */
   changeIndexPage(amount: number){
     if (amount === 1){
      const element = document.getElementById("next");
      element.dispatchEvent(new Event("click"));
     }
     else{
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
    this.http.get<any>(this.sourcePdf, {
          responseType: 'blob' as 'json',
          headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' :"*",
            'Access-Control-Allow-Headers': "Content-Type",
            'Access-Control-Allow-Methods': "GET,POST",
            'Accept': 'text/plain, */*',
            'Cache-Control': 'no-cache',
        })
      }).subscribe((response) => {
        const data = new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onload = () => {
            const base64 = reader.result as string
            resolve(base64.replace(/^data:.+;base64,/, ''));
          };
          reader.readAsDataURL(response);
        });
        data.then(res =>{
          this.src = res as string;
        })
      })
  }
  /**
   * Create file name
   */
  getRandomStringFileName() {
    length = Math.floor(Math.random() * 32);
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let  result = '';
    for ( let  i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result+".pdf";
  }

  /**
   * Event show and hiden toggleBar
   */
  onShowToggleBar(){
    this.showToolbar = !this.showToolbar;
  }

  /**
   *
   */
  onZoomIn(){
    if (this._oldZoomSetting===0){
      this.zoomSetting = "110";
    }
    else{
      const zoomAfter = this.zoomLevels.indexOf(Number(this._oldZoomSetting)*1.0/100);
      if (zoomAfter !==-1 &&  Number(this._oldZoomSetting)*1.0/100 !== 4.0){
          this.zoomSetting = String( Number(this.zoomLevels[zoomAfter+1])*100 );
          this.toolTip = false;
      }
      else{
        if ( Number(this._oldZoomSetting)*1.0/100 < 4.0){
          this.zoomSetting = String( Number(this.zoomSetting) + 10 );
          this.toolTip = false;
        }
        else{
          this.toolTip = true;
        }
      }
    }
  }

  onZoomOut(){
    if (this._oldZoomSetting===0){
      this.zoomSetting = "90";
    }
    else{
      const zoomAfter = this.zoomLevels.indexOf(Number(this._oldZoomSetting)*1.0/100);
      if (zoomAfter !==-1 &&  Number(this._oldZoomSetting)*1.0/100 !== 0.1){
          this.zoomSetting = String( Number(this.zoomLevels[zoomAfter-1])*100 );
          this.toolTip = false;
      }
      else{
        if ( Number(this._oldZoomSetting)*1.0/100 > 0.1){
          this.zoomSetting = String( Number(this.zoomSetting) - 10 );
          this.toolTip = false;
        }
        else{
          this.toolTip = true;
        }
      }
    }
  }

  currentZoomFactor(event){
    this._oldZoomSetting = parseInt(event)
  }


  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullScreenMode() {
    if (document.fullscreenElement) {
      this.eventFullScreen = false;
      this.hozFullScreen = true;
      this.backGroundColorPdf = "black";

    } else {
      // const outlet = document.getElementById("outerContainer");
      // outlet.parentElement.parentElement.parentElement.style.height = "80vh";
      this.hozFullScreen = false;
      this.eventFullScreen = true;
      this.sizePlatForm = this.sizeOldPlatForm;
      this.backGroundColorPdf = "white";
    }
  }

  fullScreen(){
    const elem = document.getElementById("pdfElement")  as HTMLElement & {
      requestFullscreen():Promise<void>;
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
    // const outlet = document.getElementById("outerContainer")
    // outlet.parentElement.parentElement.parentElement.style.height = "100vh";
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
  }

  onHorfullScreen(){
    const element = document.getElementById("presentationMode")
    element.dispatchEvent(new Event("click"));
  }

  closeFullscreen() {
    const document: any = window.document;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  onReadedComple() {
    if (this.pdfPage === this.howMuchPage) {
      this.readComplete.emit(true);
    } else {
      this.readComplete.emit(false);
    }
  }

}
