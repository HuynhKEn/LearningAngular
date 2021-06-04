import {Component, OnInit} from '@angular/core';
import {GLOBAL_CONSTANT} from 'src/app/constant/global-constant';
import {CommonDataService} from 'src/app/service/common-data.service';

@Component({
  selector: 'app-code-manage',
  templateUrl: './code-manage.component.html',
  styleUrls: ['./code-manage.component.scss']
})
export class CodeManageComponent implements OnInit {
  code = [];
  GLOBAL: any;

  constructor(private commonDataService: CommonDataService) {
    this.code = this.commonDataService.codeData();
  }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
  }

  settingTable(): object {
    const columnsDisplay = ['NO', 'TITLE', 'QUESTION', 'CONTENT', 'CODE', 'LEVEL'];
    const disableSearch = {NO: false, TITLE: false, QUESTION: false, CONTENT: false, CODE: false, LEVEL: false};
    const turnOnActionEvent = true;
    const typeOfColumns = ['', 'string', 'string', 'string', '', ''];
    const typeElement = {
      id: ['input', {required: ''}],
      title: ['input', {required: ''}],
      question: ['input'],
      content: ['input'],
      code: ['area'],
      level: [{select: ['Dễ', 'Trung bình', 'Khó']}, {required: ''}]
    };
    const heightDialog = 650;
    const widthDialog = 900;
    const dataSrc = this.code;
    return {
      typeElement,
      widthDialog,
      heightDialog,
      data: dataSrc,
      typeOfColumns,
      columns: columnsDisplay,
      action: turnOnActionEvent,
      disableSearch: disableSearch
    };
  }
}
