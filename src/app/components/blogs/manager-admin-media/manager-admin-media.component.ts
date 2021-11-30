import {Component, OnInit} from '@angular/core';

import {GLOBAL_CONSTANT} from '../../../constant/global-constant';
import {CommonDataService} from '../../../service/common-data.service';

@Component({
  selector: 'app-manager-admin-media',
  templateUrl: './manager-admin-media.component.html',
  styleUrls: ['./manager-admin-media.component.scss']
})
export class ManagerAdminMediaComponent implements OnInit {
  videos: any[];
  GLOBAL: any;

  constructor(private commonDataService: CommonDataService) {
    this.videos = this.commonDataService.dataMedia();
  }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
  }

  settingTable(): any {
    const columnsDisplay = ['NO', 'TITLE', 'TOPIC', 'DURATION', 'FILE_TYPE', 'START_DATE', 'END_DATE'];
    const typeOfColumns = ['', 'string', 'string', '', '', '', ''];
    const disableSearch = {
      NO: false,
      TOPIC: false,
      DURATION: false,
      FILE_TYPE: false,
      START_DATE: true,
      END_DATE: true
    };
    const turnOnActionEvent = true;
    const dataSrc = this.videos;
    const typeElement = {
      id: ['input', {required: ''}],
      link: ['input', {required: ''}],
      videoTime: ['input'],
      topic: ['input'],
      fileType: [{select: ['pdf', 'video']}, {required: ''}],
      thumb: ['input', {pattern: '[a-zA-Z ]*'}],
      /* tslint:disable-next-line:quotemark */
      title: [{radio: ["Tutorial Edit", "Python Tutorial", "The Book", "Demo Video"]}, {required: ''}],
      startDate: ['startDate'],
      endDate: ['endDate'],
    };
    const heightDialog = 580;
    const widthDialog = 900;
    return {
      typeElement,
      widthDialog,
      heightDialog,
      typeOfColumns,
      data: dataSrc,
      disableSearch,
      columns: columnsDisplay,
      action: turnOnActionEvent
    };
  }
}
