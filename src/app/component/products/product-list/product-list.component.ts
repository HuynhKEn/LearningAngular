import { Component, OnInit} from '@angular/core';

import { ContentService } from '../../../service/products/content/content.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  girdAreasBody = '';
  girdAreasHeader = '';
  constructor(public contentService: ContentService) {
    this.girdAreasBody =
        'name name name' +
        '|' +
        'size valueSize valueSize' +
        '|' +
        'color valueColor valueColor' +
        '|' +
        'price valuePrice valuePrice | brand valueBrand valueBrand';
    this.girdAreasHeader =
        'header' +
        '|' +
        'image';
  }

  ngOnInit(): void {
  }

}
