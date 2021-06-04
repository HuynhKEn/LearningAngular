import {Component} from '@angular/core';
import {AdminService} from './service/admin/admin.service';
import {PrimeNGConfig} from 'primeng/api';
import {ProductsService} from "./service/products/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearningAngular';
  loginStatus: boolean;

  constructor(
    private adminService: AdminService,
    private primengConfig: PrimeNGConfig,
    public productService: ProductsService
  ) {
    this.primengConfig.ripple = true;
    this.adminService.loginStatus$
      .subscribe(res => {
          this.loginStatus = res
        }
      );
  }


}
