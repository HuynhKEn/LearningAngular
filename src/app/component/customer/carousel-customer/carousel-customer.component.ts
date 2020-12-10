import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-customer',
  templateUrl: './carousel-customer.component.html',
  styleUrls: ['./carousel-customer.component.scss']
})
export class CarouselCustomerComponent implements OnInit {
  images = ["machine.png", "python.png", "deeplearning.jfif"].map((n) => `../../../assets/images/${n}`);
  images_famework = ["caffe-deep-learning.jpg", "pytorch.jpg", "Tensorflow-.webp"].map((n) => `../../../assets/images/${n}`);
  sum_images = this.images.concat(this.images_famework)
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
