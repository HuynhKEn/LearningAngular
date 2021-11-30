import {AfterViewInit, Component, OnInit} from '@angular/core';

import {PRODUCT_CAROUSEL} from '../../../constants/layout-constant';
import {ContentService} from '../assests/services/content.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {

  customOptionsLeft = {
    margin: 15,
    autoplay: false,
    responsiveClass: true,
    loop: false,
    navigation: true,
    navText: [
      '<div class="btn btn-carousel-product d-flex justify-content-center align-items-center">' +
      '<img src="../../../../assets/icon/double_left.ico" alt="Not found">' +
      '</div>'
      ,

      '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
      '<img src="../../../../assets/icon/double_right.ico" alt="Not found">' +
      '</div>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      414: {
        items: 1,
        nav: true,
      },
      540: {
        items: 2,
        nav: true,
      },
      769: {
        items: 3,
        nav: true,
      },
      1024: {
        items: 4,
        nav: true,
      }
    }
  };
  girdAreasBody = '';
  girdAreasHeader = '';

  constructor(public contentService: ContentService) {
    this.girdAreasBody = PRODUCT_CAROUSEL.GRID_AREAS_BODY;
    this.girdAreasHeader = PRODUCT_CAROUSEL.GRID_AREAS_HEADER;
  }

  ngOnInit(): void {
  }

  /* tslint:disable:no-string-literal */
  ngAfterViewInit() {
    const owlStage = document.querySelectorAll('.owl-stage-outer');
    owlStage[0].classList.add('col-12');
    owlStage[0]['style']['margin'] = 0;
    owlStage[0]['style']['padding'] = 0;
    const owlNave = document.querySelectorAll('.owl-nav');
    owlNave[0].classList.add('col-12');
    owlNave[0]['style']['margin'] = 0;
    owlNave[0]['style']['padding'] = 0;
  }

}
