import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class DownloadPDFService  {

    constructor(private router: Router) {
    }

    downloadPDF(url): any {
        return;
    }
}
