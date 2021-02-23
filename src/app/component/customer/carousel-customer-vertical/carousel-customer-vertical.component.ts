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
import { GLOBAL_CONSTANT } from '../../../constant/global-constant';
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
    animation: 'lazy',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  };
  uploadedImage: File;
  imagePreview: string;
  images = ['machine.png', 'python.png'].map(
    (n) => `../../../assets/images/${n}`
  );
  imageFramework = ['machine.png', 'python.png'].map(
    (n) => `../../../assets/images/${n}`
  );
  carouselItems: any[] = [];
  GLOBAL: any;
  constructor(
    private ng2ImgMax: Ng2ImgMaxService,
    private sanitizer: DomSanitizer,
    private cdrf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
    this.ImagePreview();
  }

  ImagePreview(): void {
    const imagesShow = this.images.concat(this.imageFramework);
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
          promise.then( (subRes) => {
            this.carouselItems.push(this.getInnerHTMLValue(URL.createObjectURL(subRes)));
          });
          // this.owlElement.trigger('destroy.owl.carousel');
        })
        .catch((error) => console.error(error));
    });
  }
  getInnerHTMLValue(value): any {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

  ngAfterViewInit(): void {
    this.cdrf.detectChanges();
  }

  carouselTileLoad(data): void {
    const arr = this.carouselItems;
    this.carouselItems = [...this.carouselItems];
  }
  onmoveFn(data: NguCarouselStore): void {
    console.log(data);
  }
}
