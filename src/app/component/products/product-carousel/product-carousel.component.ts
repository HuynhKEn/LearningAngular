import { Component, OnInit } from '@angular/core';

import {ContentService} from '../../../service/products/content/content.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  customOptionsLeft = {
    margin: 5,
    autoplay: true,
    responsiveClass: true,
    loop: true,
    navigation: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
        loop: false,
        navText: [
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"' +
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"' +
          'style="enable-background:new 0 0 24 24;" xml:space="preserve">' +
          '<path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/>' +
          '</svg>' +
          '</div>'
          ,

          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
          '<path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312' +
          ' L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/>' +
          '</svg></div>'
        ]
      },
      480: {
        items: 3,
        nav: true,
        navText: [
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
          'x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">' +
          '<path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/>' +
          '</svg>' +
          '</div>'
          ,
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
          '<path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/>' +
          '</svg></div>'
        ]
      },
      800: {
        items: 4,
        nav: true,
        navText: [
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"' +
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"' +
          'style="enable-background:new 0 0 24 24;" xml:space="preserve">' +
          '<path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/>' +
          '</svg>' +
          '</div>'
          ,
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
          '<path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/>' +
          '</svg></div>'
        ]
      },
      1024: {
        items: 5,
        nav: true,
        navText: [
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"' +
          'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24"' +
          'style="enable-background:new 0 0 24 24;" xml:space="preserve">' +
          '<path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/>' +
          '</svg></div>'
          ,
          '<div class="btn btn-warning d-flex justify-content-center align-items-center">' +
          '<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
          '<path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/>' +
          '</svg></div>'
        ]
      }
    }
  };

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

}
