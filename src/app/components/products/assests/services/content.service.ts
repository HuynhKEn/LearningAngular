import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  /* UPDATE SIZE VIEW WHEN CLICK LEFT AND RIGHT MENU LEFT */
  private contentStatus = new BehaviorSubject<any>(true);
  public contentStatus$ = this.contentStatus.asObservable();

  constructor() {
  }

  changeStatusMenu(contentStatus: boolean) {
    this.contentStatus.next(contentStatus);
  }
}
