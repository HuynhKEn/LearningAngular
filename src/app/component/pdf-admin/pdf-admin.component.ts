import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/service/common-data.service';

@Component({
  selector: 'app-pdf-admin',
  templateUrl: './pdf-admin.component.html',
  styleUrls: ['./pdf-admin.component.scss']
})
export class PdfAdminComponent implements OnInit {
  sourceOfPDF: string;
  flagHiddenQuestion: boolean = true;
  isHiddenSpinner:boolean = false;
  constructor(private commonDataService: CommonDataService) {
      this.sourceOfPDF = this.commonDataService.sourcesDefaultPDF();
  }

  ngOnInit(): void {
  }

    /*
    PDF
  **/

  whenReadComple(event){
    if (event) {
        this.flagHiddenQuestion = false;
        alert(event);
    } else {
        this.flagHiddenQuestion = true;
    }
  }

  whenLoadError(event){
    if (event){
      this.isHiddenSpinner = true;
    }
  }
}
