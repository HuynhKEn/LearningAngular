import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DataModel  {
  src: string;
  fileType: string;
  title: string;
  height: string;
}

@Component({
  selector: 'app-media-show-dialog-customer',
  templateUrl: './media-show-dialog-customer.component.html',
  styleUrls: ['./media-show-dialog-customer.component.scss']
})
export class MediaShowDialogCustomerComponent implements OnInit {
  title: string;
  src: string;
  fileType: string;
  height: string;
  constructor(
    public dialogRef: MatDialogRef<MediaShowDialogCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataModel
  ) {
    this.title = data.title;
    this.src = data.src;
    this.fileType = data.fileType;
    this.height = data.height;
  }

  ngOnInit(): void {
  }


  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

