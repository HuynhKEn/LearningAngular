import {Component, OnInit} from '@angular/core';

import {ContentService} from '../../components/products/assests/services/content.service';

@Component({
  selector: 'app-content-main-layout',
  templateUrl: './content-main-layout.component.html',
  styleUrls: ['./content-main-layout.component.scss']
})
export class ContentMainLayoutComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }
}
