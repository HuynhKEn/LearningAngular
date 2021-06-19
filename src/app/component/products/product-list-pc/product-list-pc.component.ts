import { Component, OnInit } from '@angular/core';

import { ContentService } from '../../../service/products/content/content.service';

@Component({
  selector: 'app-product-list-pc',
  templateUrl: './product-list-pc.component.html',
  styleUrls: ['./product-list-pc.component.scss']
})
export class ProductListPcComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

}
