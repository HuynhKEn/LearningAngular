import {ChangeDetectorRef, Injectable, ViewRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectChangeService  {

  constructor(private cdr: ChangeDetectorRef) {
  }

  callDetectChange() {
    if (this.cdr && !(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }
}
