import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-pdf-show',
  templateUrl: 'dialog-pdf-show.html',
})
export class DialogPdfShowComponent {
  element: any;
  constructor(
    private dialogRef: MatDialogRef<DialogPdfShowComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.element = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
