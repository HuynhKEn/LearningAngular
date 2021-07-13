import { Component, OnInit } from '@angular/core';

import {ContentService} from '../../../service/products/content/content.service';

@Component({
  selector: 'app-content-main-product-layout',
  templateUrl: './content-main-product-layout.component.html',
  styleUrls: ['./content-main-product-layout.component.scss']
})
export class ContentMainProductLayoutComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

}
