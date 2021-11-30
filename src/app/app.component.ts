import {Component} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {AdminService} from './components/blogs/assets/services/admin.service';
import {ProductsService} from './components/products/assests/services/products.service';
import {MobileService} from './service/mobile.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Product Ecommerce';

    constructor(
        public adminService: AdminService,
        private primengConfig: PrimeNGConfig,
        public productService: ProductsService,
        private mobileService: MobileService,
    ) {
        this.primengConfig.ripple = true;
        if (this.mobileService.checkMobile()) {
            this.mobileService.changeStatusMobile(true);
        } else {
            this.mobileService.changeStatusMobile(false);
        }
    }
}
