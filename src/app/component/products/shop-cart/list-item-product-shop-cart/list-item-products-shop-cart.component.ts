import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-list-item-products-shop-cart',
    templateUrl: './list-item-products-shop-cart.component.html',
    styleUrls: ['./list-item-products-shop-cart.component.scss']
})
export class ListItemProductsShopCartComponent implements OnInit {
    customOptionsLeft = {
        items: 6,
        margin: 5,
        nav: true,
        loop: true,
        dots: false,
        navigation: true,
        navText: [
            '<span class="size-arrow-product-buy"><img src="../../../../../assets/icon/left-arrow.png" alt="Not found"></span>',
            '<span class="size-arrow-product-buy"><img src="../../../../../assets/icon/right-arrow.png" alt="Not found"></span>'
        ]
    };

    ngOnInit() {

    }
}
