import {AfterViewInit, Component, OnInit} from '@angular/core';

import { ContentService } from '../../../service/products/content/content.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
