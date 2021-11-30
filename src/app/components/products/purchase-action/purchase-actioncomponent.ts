import {Component, Input, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {ROUTE_PATH} from '../../../configs/route-path.config';

@Component({
    selector: 'purchase-action',
    templateUrl: './purchase-action.component.html',
    styleUrls: ['./purchase-action.component.scss']
})
export class ButtonBuyComponent implements OnInit {
    @Input() idProduct: number;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    pushToShoppingCart() {
        const state = {
            idProduct: this.idProduct
        };
        this.router.navigate([`${ROUTE_PATH.PRODUCTS}` + '/' + `${ROUTE_PATH.SHOP_CART}`], { state });
    }

    pushToShoppingCartWithParam() {
        this.router.navigate([ROUTE_PATH.SHOP_CART, this.idProduct]);
    }


}
