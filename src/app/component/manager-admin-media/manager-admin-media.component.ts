import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../../app/service/common-data.service'
@Component({
  selector: 'app-manager-admin-media',
  templateUrl: './manager-admin-media.component.html',
  styleUrls: ['./manager-admin-media.component.scss']
})
export class ManagerAdminMediaComponent implements OnInit {
  videos =  []
  constructor( private commonDataService : CommonDataService) {
    this.videos = this.commonDataService.dataMedia();
  }

  ngOnInit(): void {
  }
  settingTable(){
    const columnsDisplay = ["NO","TOPIC","DURATION","FILE_TYPE"];
    const tunrOnactionEvent = true;
    const dataSrc = this.videos
    return {columns:columnsDisplay,action : tunrOnactionEvent,data:dataSrc}
  }


}
