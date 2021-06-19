import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DownloadPDFService  {

    constructor(private _router: Router) {
    }

    downloadPDF(_url): any {
        return;
    }
}
