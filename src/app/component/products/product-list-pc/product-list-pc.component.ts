import { AfterViewInit, Component, OnInit } from '@angular/core';

import { DetectChangeService } from '../../../service/common-service/detect-change.service';
import { ContentService } from '../../../service/products/content/content.service';

@Component({
  selector: 'app-product-list-pc',
  templateUrl: './product-list-pc.component.html',
  styleUrls: ['./product-list-pc.component.scss']
})
export class ProductListPcComponent implements OnInit, AfterViewInit {

  constructor(public contentService: ContentService, private detectChangeService: DetectChangeService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    const containMain = document.querySelector('.content-main');
    if (containMain && containMain.scrollLeft === 0 ) {
      containMain.scrollLeft = 300;
      this.detectChangeService.callDetectChange();
      console.log(containMain.scrollLeft);
    }
  }

}
