import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NguCarousel,
  NguCarouselConfig,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguCarouselStore,
} from '@ngu/carousel';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-carousel-customer-vertical',
  templateUrl: './carousel-customer-vertical.component.html',
  styleUrls: ['./carousel-customer-vertical.component.scss'],
})
export class CarouselCustomerVerticalComponent
  implements OnInit, AfterViewInit {
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;

  name = 'Angular';
  slideNo = 1;
  withAnim = true;
  resetAnim = true;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    load: 3,
    slide: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: false,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    },
    vertical: {
      enabled: true,
      height: 600,
    },
    animation: "lazy",
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  };
  uploadedImage: File;
  imagePreview: string;
  images = ['machine.png', 'python.png'].map(
    (n) => `../../../assets/images/${n}`
  );
  images_famework = ['machine.png', 'python.png'].map(
    (n) => `../../../assets/images/${n}`
  );
  carouselItems: any[] = [];

  constructor(
    private ng2ImgMax: Ng2ImgMaxService,
    private sanitizer: DomSanitizer,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.ImagePreview();
  }

  ImagePreview() {
    const imagesShow = this.images.concat(this.images_famework);
    let fileNameExt = '';
    imagesShow.map((res) => {
      fileNameExt = res.split('.').pop();
      fileNameExt = fileNameExt === 'jpg' ? 'jpeg' : 'png';
      fetch(res)
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          const fileBlob = new File([blob], 'image.' + fileNameExt, {
            type: 'image/' + fileNameExt,
          });
          const promise = new Promise((resolve, rej) => {
            this.ng2ImgMax.resizeImage(fileBlob, 350, 350).subscribe(
              (result) => {
                this.uploadedImage = new File([result], result.name);
                resolve(this.uploadedImage);
              },
              (error) => {
                console.log('😢 Oh no!', error);
              }
            );
          });
          promise.then((res) => {
            this.carouselItems.push(this.getInnerHTMLValue(URL.createObjectURL(res)));
          });
          // this.owlElement.trigger('destroy.owl.carousel');
        })
        .catch((error) => console.error(error));
    });
  }
  getInnerHTMLValue(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

  carouselTileLoad(data) {
    let arr = this.carouselItems;
    this.carouselItems = [...this.carouselItems];
  }
  onmoveFn(data: NguCarouselStore) {
    console.log(data);
  }
}
