import { AfterViewInit, ChangeDetectorRef, Component,
  EventEmitter, HostListener, Input, OnChanges,
  OnInit, Output, SimpleChanges, ViewRef } from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer} from '@angular/platform-browser';

import { saveAs } from 'file-saver';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DownloadPDFService } from '../../../service/download.service';
import { defaultBase64} from './default';

@Component({
  selector: 'app-pdf-viewer-customer',
  templateUrl: './pdf-viewer-customer.component.html',
  styleUrls: ['./pdf-viewer-customer.component.scss']
})
export class PdfViewerCustomerComponent implements OnInit, OnChanges, AfterViewInit {
  @Output('onLoadComplete') loadComplete = new EventEmitter();
  @Output('onReadComplete') readComplete = new EventEmitter();
  @Output('onLoadPdfError') loadPdfError = new EventEmitter();
  @Input() sourcePdf: string;
  @Input() fileNameDownload = 'document.pdf';
  @Input() heightPdf?: string;
  pdfPage = 1;
  pdf: any;
  src = defaultBase64[0];
  howMuchPage = 0;
  toolTip = false;
  backGroundColorPdf = 'white';
  isHiddenSpinner: boolean;
  zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width',
    0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
  _oldZoomSetting: number | string | undefined = 'page-width';
  eventFullScreen = true;
  flagDownloadPdf = true;
  // Platform
  isMobile = false;
  isSafari = false;
  isAndroid = false;
  sizePlatForm = '69vh';
  sizeOldPlatForm = '69vh';
  viewMode: string;
  showToolbar = true;
  sidebarToggle = 'none';
  hozFullScreen = false;
  hozFullScreenIOS = false;
  flagFullScreen = false;

  // Handler full screen IOS
  topViewContainer: string;
  leftViewContainer: string;
  widthViewContainer: string;
  heightViewContainer: string;
  positionViewContainer: string;
  bottomViewContainer: string;
  rightViewContainer: string;
  maxWidthViewContainer: string;
  zIndexViewContainer: string;
  paddingViewContainer: string;
  zoomChildViewContainer: string;

  topViewContainerPDF: string;
  leftViewContainerPDF: string;
  widthViewContainerPDF: string;
  heightViewContainerPDF: string;
  positionViewContainerPDF: string;
  // ;
  constructor(
    private platform: Platform,
    private deviceService: DeviceDetectorService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private downloadPdfService: DownloadPDFService,
    private cdr: ChangeDetectorRef) {
    this.isSafari = this.platform.SAFARI;
    this.isAndroid = this.platform.ANDROID;
    this.isMobile = this.deviceService.isMobile() || this.platform.IOS || this.isAndroid;
    this.iconRegistry.addSvgIcon(
      'exit-full-screen',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/exit-full-screen.svg'));
  }

  ngOnInit(): void {
    // this.isHiddenSpinner = true;
    if (this.isMobile){
      this.viewMode = 'single';
    } else{
      this.viewMode = 'single';
    }
    this._oldZoomSetting = 0;
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.getPdfFormServer();
  }
  settingPDF(){
    // Fullscreen of platform safari must is false;
    return {
      backGroundColor: this.backGroundColorPdf,
      isPinchOnMobile: true,
      handTool: true,
      fullscreen: this.isSafari ? false : false,
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

  onPdfLoad(_event){
    // doing something
  }

  romanToInt(str1) {
    let  num = this.charToInt( str1.charAt(0) );
    let  pre;
    let curr;
    for (let i = 1; i < str1.length; i++){
      curr = this.charToInt( str1.charAt(i) );
      pre = this.charToInt( str1.charAt(i - 1) );
      if (curr <= pre){
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
    const viewContainer = document.getElementById('viewerContainer');
    viewContainer.style.border = '2px solid #DCDCDC';
    this.onReadComplete();
    this.loadComplete.emit(true);
  }

  onPageChange(_event){
    this.onReadComplete();
  }

  onPageRendered(_event){
    // doing something
  }

  onPdfLoadingFailed(event){
    if (event){
      this.loadPdfError.emit(true);
      this.src = defaultBase64[1];
    }
  }

  /**
   * * Left and Right Navigation
   */
  changeIndexPage(amount: number){
    if (amount === 1){
      const element = document.getElementById('next');
      element.dispatchEvent(new Event('click'));
    } else{
      if (amount === -1){
        const element = document.getElementById('previous');
        element.dispatchEvent(new Event('click'));
      }
    }
  }

  /**
   * * Download pdf
   */
  getPdfFormServer() {
    this.pdfPage = 1;
    this.isHiddenSpinner = false;
    fetch(this.sourcePdf).then((response) => {
      return response.blob();
    }).then( (myBlob) => {
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
    }, () => {
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
    return result + '.pdf';
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
      iframe.src = window.URL.createObjectURL(new Blob([myBlob], {type: 'application/pdf'}));
      document.body.appendChild(iframe);
      window.URL.revokeObjectURL(iframe.src);
      this.isHiddenSpinner = true;
    }).then( () => {
      setTimeout( () => {
        iframe.contentWindow.print();
        this.isHiddenSpinner = true;
      }, 100);
    }, () => {
      this.isHiddenSpinner = true;
    });
  }

  downloadPDF(){
    this.downloadPdfService.downloadPDF(this.sourcePdf).subscribe( (res) => {
      saveAs(res, this.getRandomStringFileName() + '.pdf');
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL);
    });
  }

  /**
   *
   */
  onZoomIn(){
    const element = document.getElementById('zoomIn');
    element.dispatchEvent(new Event('click'));
  }

  onZoomOut(){
    const element = document.getElementById('zoomOut');
    element.dispatchEvent(new Event('click'));
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('window:webkitfullscreenchange', ['$event'])
  @HostListener('document:webkitenterfullscreenchange', ['$event'])
  fullScreenMode() {
    if (document.fullscreenElement) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      this.eventFullScreen = false;
      this.hozFullScreen = true;
      this.backGroundColorPdf = 'black';
      this.cdr.detectChanges();
    } else {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      this.hozFullScreen = false;
      this.eventFullScreen = true;
      this.backGroundColorPdf = 'white';
      this.cdr.detectChanges();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.flagFullScreen) {
      this.sizePlatForm = this.sizeOldPlatForm;
      this.flagFullScreen = false;
      if (this.cdr && !(this.cdr as ViewRef).destroyed) {
        this.cdr.detectChanges();
      }
    }
  }

  fullScreen(){
    const elem = document.getElementById('pdfElement')  as HTMLElement & {
      requestFullscreen(): Promise<void>;
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
      webkitEnterFullscreen(): Promise<void>;
    };
    if (elem.requestFullscreen) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      /* IE/Edge */
      elem.msRequestFullscreen();
    } else if (elem.webkitEnterFullscreen) {
      this.flagFullScreen = true;
      this.sizePlatForm = '100vh';
      elem.webkitEnterFullscreen();
    }
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }

  ngAfterViewInit(){
    const fullScreenIOS = document.getElementById('fullscreenDiv');
    /* tslint:disable:no-string-literal */
    const childrenIOS = document.getElementById('pdfElement').children[3]['style'];
    this.positionViewContainer = fullScreenIOS.style.position;
    this.topViewContainer = fullScreenIOS.style.top;
    this.leftViewContainer = fullScreenIOS.style.left;
    this.bottomViewContainer = fullScreenIOS.style.bottom;
    this.rightViewContainer = fullScreenIOS.style.right;
    this.maxWidthViewContainer = fullScreenIOS.style.maxWidth;
    this.zIndexViewContainer = fullScreenIOS.style.zIndex;
    this.paddingViewContainer = fullScreenIOS.style.padding;
    this.zoomChildViewContainer = childrenIOS.height;

    const viewContainer = document.getElementById('viewerContainer');
    this.positionViewContainerPDF = viewContainer.style.position;
    this.topViewContainerPDF = viewContainer.style.top;
    this.leftViewContainerPDF = viewContainer.style.left;
    this.widthViewContainerPDF = viewContainer.style.width;
    this.heightViewContainerPDF = viewContainer.style.height;

  }

  fullScreenIOS(){
    this.hozFullScreenIOS = true;
    this.eventFullScreen = false;
    this.sizePlatForm = '100%';
    const fullScreenIOS = document.getElementById('fullscreenDiv');
    fullScreenIOS.style.position = 'fixed';
    fullScreenIOS.style.top = '0';
    fullScreenIOS.style.left = '0';
    fullScreenIOS.style.bottom = '0';
    fullScreenIOS.style.right = '0';
    fullScreenIOS.style.maxWidth = '100%';
    fullScreenIOS.style.zIndex = '9999';
    fullScreenIOS.style.padding = '0';
    /* tslint:disable:no-string-literal */
    document.getElementById('pdfElement').children[3]['style'].height = '100%';

    const viewContainer = document.getElementById('viewerContainer');
    viewContainer.style.position = 'fixed';
    viewContainer.style.top = '0';
    viewContainer.style.left = '0';
    viewContainer.style.width = '100%';
    viewContainer.style.height = '100%';
    this.backGroundColorPdf = 'black';
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }

  closeFullscreenIOS(){
    this.hozFullScreenIOS = false;
    this.eventFullScreen = true;
    this.sizePlatForm = this.sizeOldPlatForm;
    const exitFullScreenIOS = document.getElementById('fullscreenDiv');
    exitFullScreenIOS.style.position = this.positionViewContainer;
    exitFullScreenIOS.style.top = this.topViewContainer;
    exitFullScreenIOS.style.left = this.leftViewContainer;
    exitFullScreenIOS.style.bottom = this.bottomViewContainer;
    exitFullScreenIOS.style.right = this.rightViewContainer;
    exitFullScreenIOS.style.maxWidth = this.maxWidthViewContainer;
    exitFullScreenIOS.style.zIndex = this.zIndexViewContainer;
    exitFullScreenIOS.style.padding = this.paddingViewContainer;
    /* tslint:disable:no-string-literal */
    document.getElementById('pdfElement').children[3]['style'].height = this.zoomChildViewContainer;

    const viewContainer = document.getElementById('viewerContainer');
    viewContainer.style.position = this.positionViewContainerPDF;
    viewContainer.style.top = this.topViewContainerPDF;
    viewContainer.style.left =  this.leftViewContainerPDF;
    viewContainer.style.width = this.widthViewContainerPDF;
    viewContainer.style.height = this.heightViewContainerPDF;
    this.backGroundColorPdf = 'white';
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }
  closeFullscreen() {
    const document: any = window.document;
    if (document.exitFullscreen) {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      this.flagFullScreen = false;
      this.sizePlatForm = this.sizeOldPlatForm;
      document.msExitFullscreen();
    }
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }

  onReadComplete() {
    if (this.pdfPage === this.howMuchPage) {
      this.readComplete.emit(true);
    } else {
      this.readComplete.emit(false);
    }
  }
}
