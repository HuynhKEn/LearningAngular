import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewRef} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {MobileService} from '../../service/mobile.service';
import {ProductsService} from './assests/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
    private heightFooter = '10vh';

    constructor(
        private cdr: ChangeDetectorRef,
        public mobileService: MobileService,
        private primengConfig: PrimeNGConfig,
        private productService: ProductsService
    ) {
        this.primengConfig.ripple = true;
        this.productService.changeStatusProduct(true);
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.changeSize(false);
    }

    @HostListener('window:resize')
    onResize() {
        this.changeSize(false);
    }

    changeSize(enabled) {
        if (enabled) {
            const innerHeight = window.innerHeight;
            const bodyRoot = document.getElementById('product-body-root');
            const headerRoot = document.getElementById('product-header-root');
            this.heightFooter = innerHeight - (Math.round(headerRoot.getBoundingClientRect().height) +  Math.round(bodyRoot.getBoundingClientRect().height)) + 'px';
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }
    }
}
