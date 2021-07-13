import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewRef} from '@angular/core';

import {PrimeNGConfig} from 'primeng/api';
import {ProductsService} from '../../service/products/products.service';
import {TestMobileService} from '../../service/test-mobile.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
    heightFooter = '10vh';
    constructor(private productService: ProductsService, private cdr: ChangeDetectorRef,
                public testMobileService: TestMobileService, private primengConfig: PrimeNGConfig) {
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
            const headerRoot = document.getElementById('header-root');
            const bodyRoot = document.getElementById('body-root');
            const innerHeight = window.innerHeight;
            const heightFooter = innerHeight - (Math.round(headerRoot.getBoundingClientRect().height) +
                Math.round(bodyRoot.getBoundingClientRect().height));
            this.heightFooter = heightFooter + 'px';
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }
    }

}
