import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {TestMobileService} from "../../../service/test-mobile.service";


@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {
  layoutDetailProducts = '';
  layoutColorProducts = '';
  layoutBenefitItem = '';
  layoutColorProductsLessThanMD = '';
  layoutActionProducts = '';
  numberBuyOptions = [1, 2, 3, 4, 5, 6, 7];
  numberBuySelected: number;
  sizeBuyOptions = [1, 2, 3, 4, 5, 6, 7];
  sizeBuySelected: number;
  descProduct = 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
      'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
      '\n' +
      '-Chất liệu đế: cao su\n' +
      '\n' +
      '-Chất liệu mặt giày: dệt cao cấp\n' +
      '\n' +
      '-Mầu sắc: Đen, Be\n' +
      '\n' +
      '-Form: chuẩn' + 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
      'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
      '\n' +
      '-Chất liệu đế: cao su\n' +
      '\n' +
      '-Chất liệu mặt giày: dệt cao cấp\n' +
      '\n' +
      '-Mầu sắc: Đen, Be\n' +
      '\n' +
      '-Form: chuẩn' + 'Thiết kế trẻ trung, năng động Chất liệu cao cấp bền đẹp Kiểu dáng thời trang, dễ phối đồ Màu sắt tinh tế, thanh lịch\n' +
      'Giày bốt cao cổ nam cao cấp mẫu mới phong cách hàn quốc hot trend SP362\n' +
      '\n' +
      '-Chất liệu đế: cao su\n' +
      '\n' +
      '-Chất liệu mặt giày: dệt cao cấp\n' +
      '\n' +
      '-Mầu sắc: Đen, Be\n' +
      '\n' +
      '-Form: chuẩn' ;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private testMobileService: TestMobileService
  ) {
    this.layoutDetailProducts = 'star evaluate-sold evaluate-sold';
    /**/
    this.layoutColorProducts = 'image text-icon-tick text-icon-tick';
    this.layoutColorProductsLessThanMD = 'image text-icon-tick|text-size text-size';
    /**/
    this.layoutActionProducts = 'benefit benefit | button-wallet button-buy';
    /**/
    if (this.testMobileService.checkMobile()) {
      this.layoutBenefitItem = `compensation|guarantee|refund`;
      document.documentElement.style.setProperty('--dynamic-instanceArrow', '-8%');
    } else {
      this.layoutBenefitItem = 'compensation guarantee refund';
    }


  }

  ngOnInit(): void {
  }

}
