import {AfterViewInit, Component, OnInit} from '@angular/core';

import {ContentService} from '../../components/products/assests/services/content.service';

@Component({
  selector: 'app-body-root',
  templateUrl: './body-root.component.html',
  styleUrls: ['./body-root.component.scss']
})
export class BodyRootComponent implements OnInit, AfterViewInit {

  constructor(public contentService: ContentService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
