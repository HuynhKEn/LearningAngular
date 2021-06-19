import {Component, OnInit} from '@angular/core';

import {ProductsService} from '../../service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) {
    this.productService.changeStatusProduct(true);
  }

  ngOnInit(): void {
  }

}
