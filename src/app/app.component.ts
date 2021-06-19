import {Component} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {AdminService} from './service/admin/admin.service';
import {ProductsService} from './service/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearningAngular';

  constructor(
    public adminService: AdminService,
    private primengConfig: PrimeNGConfig,
    public productService: ProductsService
  ) {
    this.primengConfig.ripple = true;
  }


}
