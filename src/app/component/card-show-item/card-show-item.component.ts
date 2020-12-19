import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/service/common-data.service';

@Component({
  selector: 'app-card-show-item',
  templateUrl: './card-show-item.component.html',
  styleUrls: ['./card-show-item.component.scss']
})
export class CardShowItemComponent implements OnInit {
  dataForward = []
  constructor(private commonDataService: CommonDataService) {
    const randomChoose = this.getRandomInt(2)
    if (randomChoose === 0){
      this.dataForward = this.commonDataService.iuDefaultData();
    } else{
      this.dataForward = this.commonDataService.dataMedia();
    }
  }

  ngOnInit(): void {
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
