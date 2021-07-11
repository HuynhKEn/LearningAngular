import {AfterViewInit, Component, OnInit} from '@angular/core';

import {ContentService} from '../../../service/products/content/content.service';
import {TestMobileService} from '../../../service/test-mobile.service';
@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit, AfterViewInit {
  arrowStatus = true;

  constructor(private contentService: ContentService, public testMobileService: TestMobileService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.arrowStatus = true;
  }

  openNav() {
    this.arrowStatus = !this.arrowStatus;
    this.contentService.changeStatusMenu(this.arrowStatus);
  }


}
