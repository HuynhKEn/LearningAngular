import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonDataService } from 'src/app/service/common-data.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../../config/route-path.config';
import { GLOBAL_CONSTANT } from '../../../constant/global-constant';
@Component({
  selector: 'app-carousel-customer',
  templateUrl: './carousel-customer.component.html',
  styleUrls: ['./carousel-customer.component.scss']
})
export class CarouselCustomerComponent implements OnInit {
  @ViewChild('owlElement') owlElement: any;
  uploadedImage: File;
  imagePreview: string;
  // dataShow = ["machine.png", "python.png"].map((n) => `../../../assets/images/${n}`);
  dataShow = [];
  isDestroy = false;
  isNavigation = false;
  dialogAny: any;
  promise: any;
  GLOBAL: any;
  customOptionsLeft = {
    margin: 15,
    merge: true,
    navigation: true,
    navText: [
            // tslint:disable-next-line:quotemark
            "<img src='../../../../assets/images/next.png' class='nav-btn-back prev-slide' alt='' >",
            // tslint:disable-next-line:quotemark
            "<img src='../../../../assets/images/next.png' class='nav-btn-next next-slide' alt='' >"],
    responsiveClass: true,
    dot: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    },
    nav: true
  };

  constructor(
    private ng2ImgMax: Ng2ImgMaxService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private commonDataService: CommonDataService,
    private dialog: MatDialog,
    private router: Router,
  ) {
      this.dataShow = this.commonDataService.iuDefaultData();
    }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
    this.ImagePreview();
  }

  // Resize image form upload
  imageChange(event): void {
    const image = event.target.files[0];
    this.ng2ImgMax.resizeImage(image, 350, 350).subscribe(
      result => {
        this.uploadedImage = result;
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }
  ImageChangeCompress(event): void {
    const image = event.target.files[0];
    this.ng2ImgMax.compressImage(image, 0.075).subscribe(
      result => {
        this.uploadedImage = new File([result], result.name);
      },
      error => {
        console.log('😢 Oh no!', error);
      });
  }

  ImagePreview(): void {
    const imagesShow = this.dataShow;
    let fileNameExt = '';
    let title = '';
    let i = 1;
    imagesShow.map( res => {
      fileNameExt = res.imgPath.split('.').pop();
      title = res.title;
      fetch(res.imgPath, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: new Headers({
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'image/*',
        })
      })
        .then(response => {
          return response.blob();
        })
        .then(blob => {
          const fileBlob = new File([blob], 'image.' + fileNameExt, {type: 'image/' + fileNameExt});
          const promise = new Promise( (resolve, rej) => {
            this.ng2ImgMax.resizeImage(fileBlob, 350 , 350).subscribe(
              result => {
                this.uploadedImage = new File([result], result.name);
                resolve(this.uploadedImage);
              },
              error => {
                console.log('😢 Oh no!', error);
            });
          });
          promise.then( resPromise => {
            const html = '<div class="item"><img alt="" class="slide-image" src=' + `${URL.createObjectURL(resPromise)}` + '>' +
                '<span class="number-lesson">' + `${i}` + '</span>' +
                '<span class="name-lesson">' + `${title}` + '</span>' + '</div>';
            this.owlElement.trigger('add.owl.carousel', [html]);
            this.owlElement.trigger('refresh.owl.carousel');
            i = i + 1;
          });
          // this.owlElement.trigger('destroy.owl.carousel');


        }).catch(error => console.error(error));
      });
  }
  getInnerHTMLValue(value): any{
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
  canDeactivate(): Observable<boolean> | boolean  {
    if (!this.isDestroy ){
      this.openDialog(true);
      return  this.dialogAny.afterClosed().pipe(
        map( result => {
            if (result === true){
                this.isNavigation = true;
                this.isDestroy = true;
                return this.router.navigate([ROUTE_PATH.HOME]);
            }
            return result === GLOBAL_CONSTANT.BACKUP;
        })
      );
    }
    if (this.isNavigation){
      return true;
    }

  }

  openDialog(backup: boolean = false): void{
    this.dialogAny = this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: {
        title: '確認',
        message: '',
        backup
      },
    });
    if (!backup) {
      this.dialogAny.afterClosed().subscribe(
        (data) => {
          if (data && data !==  GLOBAL_CONSTANT.BACKUP){
            this.isNavigation = true;
            this.isDestroy = true;
            return this.router.navigate([ROUTE_PATH.HOME]);
          }
        }
      );
    }
  }
}

