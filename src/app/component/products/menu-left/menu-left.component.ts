import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';
import {SCREEN_SIZE} from '../../../@theme/size-detector/screen-size.enum';
import {ResizeService} from '../../../@theme/size-detector/service/resize.service';
import {ContentService} from '../../../service/products/content/content.service';
import {TestMobileService} from '../../../service/test-mobile.service';

@Component({
    selector: 'app-menu-left',
    templateUrl: './menu-left.component.html',
    styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit, AfterViewInit {
    size: SCREEN_SIZE;
    arrowStatus = true;
    iconSize = 32;
    destroyRxjs: Subscription;
    menuLeftLayout = '';

    constructor(private contentService: ContentService,
                public resizeService: ResizeService,
                private testMobileService: TestMobileService
    ) {
      this.menuLeftLayout = 'shopping-cart  category  truck';
      this.menuLeftLayout = 'shopping-cart  category  truck';
      if (this.testMobileService.checkMobile()) {
        this.menuLeftLayout = 'shopping-cart | category | truck';
        this.size = SCREEN_SIZE.SM;
        this.resizeService.onResize(SCREEN_SIZE.SM);
      } else {
        this.size = SCREEN_SIZE.LG;
        this.resizeService.onResize(SCREEN_SIZE.LG);
        this.menuLeftLayout = 'shopping-cart  category  truck';
      }

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
      this.destroyRxjs = this.resizeService.onResize$.subscribe(x => {
        this.size = x;
        switch (this.size) {
          case 'lg':
            this.iconSize = 32;
            this.menuLeftLayout = 'shopping-cart  category  truck';
            if (!this.arrowStatus) {
              this.arrowStatus = true;
            }
            document.documentElement.style.setProperty('--dynamic-instanceTop', '11vh');
            break;
          case 'xl':
            this.iconSize = 32;
            this.menuLeftLayout = 'shopping-cart  category  truck';
            if (!this.arrowStatus) {
              this.arrowStatus = true;
            }
            document.documentElement.style.setProperty('--dynamic-instanceTop', '9vh');
            break;
          default:
            this.iconSize = 22;
            this.menuLeftLayout = 'shopping-cart | category | truck';
            document.documentElement.style.setProperty('--dynamic-instanceTop', '15vh');
        }
      });
    }

    openNav() {
        this.arrowStatus = !this.arrowStatus;
        if (this.menuLeftLayout === 'shopping-cart  category  truck') {
            this.menuLeftLayout = 'shopping-cart | category | truck';
        } else {
            this.menuLeftLayout = 'shopping-cart  category  truck';
        }
        this.contentService.changeStatusMenu(this.arrowStatus);
    }


}
