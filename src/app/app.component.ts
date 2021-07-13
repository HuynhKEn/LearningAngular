import {Component} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {AdminService} from './service/admin/admin.service';
import {ProductsService} from './service/products/products.service';
import {TestMobileService} from './service/test-mobile.service';

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
        public productService: ProductsService,
        private testMobileService: TestMobileService
    ) {
        this.primengConfig.ripple = true;
        if (this.testMobileService.checkMobile()) {
            this.testMobileService.changeStatusTest(true);
        } else {
            this.testMobileService.changeStatusTest(false);
        }
    }
}
