import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-customer',
  templateUrl: './carousel-customer.component.html',
  styleUrls: ['./carousel-customer.component.scss']
})
export class CarouselCustomerComponent implements OnInit {
  @ViewChild('owlElement') owlElement: any;
  uploadedImage: File;
  imagePreview: string;
  images = ["machine.png", "python.png"].map((n) => `../../../assets/images/${n}`);
  images_famework = ["machine.png", "python.png"].map((n) => `../../../assets/images/${n}`);
  sum_images: any[] =  ['../../../../assets/images/back-page.png']
  customOptionsLeft = {
    margin: 15,
    merge:true,
    navigation: true,
    navText: [
            "<img src='../../../../assets/images/back-page.png' class='nav-btn-back prev-slide'>",
            "<img src='../../../../assets/images/next-page.png' class='nav-btn-next next-slide'></div>"],
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
  }

  constructor(
    private ng2ImgMax: Ng2ImgMaxService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {

    }

  ngOnInit() {
    this.ImagePreview();
  }

  //Resize image form upload
  imageChange(event) {
    let image = event.target.files[0];
    this.ng2ImgMax.resizeImage(image, 350, 350).subscribe(
      result => {
        this.uploadedImage = result;
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }
  ImageChangeCompress(event) {
    let image = event.target.files[0];
    this.ng2ImgMax.compressImage(image, 0.075).subscribe(
      result => {
        this.uploadedImage = new File([result], result.name);
      },
      error => {
        console.log('😢 Oh no!', error);
      });
  }

  ImagePreview() {
    const imagesShow = this.images.concat(this.images_famework)
    let fileNameExt = ""
    imagesShow.map( res =>{
      fileNameExt = res.split('.').pop();
      fileNameExt =  fileNameExt === "jpg" ? "jpeg" : "png"
      fetch(res)
        .then(response => {
          return response.blob();
        })
        .then(blob => {
          const fileBlob = new File([blob], "image."+fileNameExt, {type:"image/"+fileNameExt});
          const promise = new Promise( (resolve, rej) =>{
            this.ng2ImgMax.resizeImage(fileBlob, 350 , 350).subscribe(
              result => {
                this.uploadedImage = new File([result], result.name);
                resolve(this.uploadedImage)
              },
              error => {
                console.log('😢 Oh no!', error);
            })
          })
          promise.then( res => {
            const html = "<div class='item'><img class='slide-image' src="+ `${URL.createObjectURL(res)}` +"></div>";
            this.owlElement.trigger('add.owl.carousel', [html]);
            this.owlElement.trigger('refresh.owl.carousel');
          })
          // this.owlElement.trigger('destroy.owl.carousel');


        }).catch(error => console.error(error))
      })
    }
    getInnerHTMLValue(value){
      return this.sanitizer.bypassSecurityTrustUrl(value);
    }
}
