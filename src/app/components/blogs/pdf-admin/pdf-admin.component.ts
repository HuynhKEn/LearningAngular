import { Component, OnInit } from '@angular/core';

import { CommonDataService } from 'src/app/service/common-data.service';
import { GLOBAL_CONSTANT } from '../../../constant/global-constant';

@Component({
  selector: 'app-pdf-admin',
  templateUrl: './pdf-admin.component.html',
  styleUrls: ['./pdf-admin.component.scss']
})
export class PdfAdminComponent implements OnInit {
  sourceOfPDF: string;
  flagHiddenQuestion = true;
  isHiddenSpinner = false;
  GLOBAL: any;
  constructor(private commonDataService: CommonDataService) {
      this.sourceOfPDF = this.commonDataService.sourcesDefaultPDF();
  }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
  }

    /*
    PDF
  **/

  whenReadComple(event): void{
    if (event) {
        this.flagHiddenQuestion = false;
        alert(event);
    } else {
        this.flagHiddenQuestion = true;
    }
  }

  whenLoadError(event): void{
    if (event){
      this.isHiddenSpinner = true;
    }
  }
}
