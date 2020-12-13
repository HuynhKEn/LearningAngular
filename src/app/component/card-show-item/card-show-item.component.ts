import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/service/common-data.service';

@Component({
  selector: 'app-card-show-item',
  templateUrl: './card-show-item.component.html',
  styleUrls: ['./card-show-item.component.scss']
})
export class CardShowItemComponent implements OnInit {
  videos = []
  constructor(private commonDataService: CommonDataService) {
    this.videos = this.commonDataService.dataMedia();
  }

  ngOnInit(): void {
  }

}
