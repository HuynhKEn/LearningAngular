/* tslint:disable:no-unused-expression */
/* tslint:disable:no-string-literal */

import {Component, OnInit} from '@angular/core';

import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
declare let pdt360DegViewer: any;

@Component({
    selector: 'app-rotate-3d-product',
    templateUrl: './rotate-3d-product.component.html',
    styleUrls: ['./rotate-3d-product.component.scss'],

})
export class Rotate3DProductComponent implements OnInit {
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig) {
    }

    ngOnInit(): void {
        const path = '../../../../assets/images/img/';
        pdt360DegViewer('product0', 51, path, 'png', true, true, false, false, false, false, false);
        pdt360DegViewer('product1', 51, path, 'png', true, false, false, false, false, false, false);
        pdt360DegViewer('product2', 51, path, 'png', false, true, false, false, false, false, false);
        pdt360DegViewer('product3', 51, path, 'png', false, false, true, false, false, false, false);
        pdt360DegViewer('product4', 51, path, 'png', false, false, false, true, false, false, false);
        pdt360DegViewer('product5', 51, path, 'png', false, false, false, false, true, false, false);
        pdt360DegViewer('product6', 51, path, 'png', false, false, false, false, false, true, false);
        pdt360DegViewer('product7', 51, path, 'png', false, false, false, false, false, false, true);
    }
}



