import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';
import {ContentService} from '../../components/products/assests/services/content.service';
import {MobileService} from '../../services/mobile.service';
import {ResizeService} from '../../services/resize.service';
import {SCREEN_SIZE} from '../size-detector/screen-size.enum';

@Component({
    selector: 'app-menu-left',
    templateUrl: './menu-left.component.html',
    styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit, AfterViewInit {
    size: SCREEN_SIZE;
    iconSize = 32;
    arrowStatus = true;
    menuLeftLayout = '';
    destroyRxjs: Subscription;

    constructor(private contentService: ContentService,
                public resizeService: ResizeService,
                private mobileService: MobileService
    ) {
      this.menuLeftLayout = 'shopping-cart  category  truck';
      const wWindow = window.innerWidth;
      const hWindow = window.innerHeight;
      if (this.mobileService.checkMobile()) {
        this.size = SCREEN_SIZE.SM;
        this.resizeService.onResize(SCREEN_SIZE.SM);
        this.menuLeftLayout = 'shopping-cart | category | truck';
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
            break;
          case 'xl':
            this.iconSize = 32;
            this.menuLeftLayout = 'shopping-cart  category  truck';
            if (!this.arrowStatus) {
              this.arrowStatus = true;
            }
            break;
          default:
            this.iconSize = 22;
            this.menuLeftLayout = 'shopping-cart | category | truck';
        }
      });
      const headerDOM = document.querySelector('.header-content').getBoundingClientRect().height;
      document.documentElement.style.setProperty('--dynamic-instanceTop', headerDOM + 8 + 'px');
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
