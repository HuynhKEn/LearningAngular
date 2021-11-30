import { Component, OnInit} from '@angular/core';

import { PRODUCT_LIST } from '../../../constants/layout-constant';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  girdAreasBody = '';
  girdAreasHeader = '';
  constructor() {
      this.girdAreasBody = PRODUCT_LIST.GRID_AREAS_BODY;
      this.girdAreasHeader = PRODUCT_LIST.GRID_AREAS_HEADER;
  }
  ngOnInit(): void {
  }

}
