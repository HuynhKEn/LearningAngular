import {AfterViewInit, Component, OnInit} from '@angular/core';

import {ContentService} from '../../../service/products/content/content.service';
@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit, AfterViewInit {
  arrowStatus;

  constructor(private contentService: ContentService) {
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
