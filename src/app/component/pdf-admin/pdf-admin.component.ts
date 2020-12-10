import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-admin',
  templateUrl: './pdf-admin.component.html',
  styleUrls: ['./pdf-admin.component.scss']
})
export class PdfAdminComponent implements OnInit {
  sourceOfPDF = 'https://cors-anywhere.herokuapp.com/http://www.dblab.ntua.gr/~gtsat/collection/Java%20books/Java%20Programming%20Language%20Handbook.pdf'
  flagHiddenQuestion: boolean = true;
  isHiddenSpinner:boolean = false;
  constructor() { }

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
