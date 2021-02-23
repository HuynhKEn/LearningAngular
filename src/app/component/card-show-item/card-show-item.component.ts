import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/service/common-data.service';

@Component({
  selector: 'app-card-show-item',
  templateUrl: './card-show-item.component.html',
  styleUrls: ['./card-show-item.component.scss']
})
export class CardShowItemComponent implements OnInit {
  dataForward = [];
  constructor(private commonDataService: CommonDataService) {
     this.dataForward = this.commonDataService.dataMedia();
  }

  ngOnInit(): void {
  }
  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
