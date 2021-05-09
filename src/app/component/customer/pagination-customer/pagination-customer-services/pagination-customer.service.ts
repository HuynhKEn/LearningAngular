import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationCustomerService {

  private totalPage  = new BehaviorSubject(1);
  totalPage$ = this.totalPage.asObservable();

  private currentSize  = new BehaviorSubject(10);
  currentSize$ = this.currentSize.asObservable();

  private totalSize  = new BehaviorSubject(0);
  totalSize$ = this.totalSize.asObservable();

  private currenOffset  = new BehaviorSubject(1);
  currenOffset$ = this.currenOffset.asObservable();

  updateTotalPage(newPage): void {
    this.totalPage.next(newPage);
  }

  updateSize(newSize): void {
    this.currentSize.next(newSize);
  }

  updateTotalSize(newTotalSize): void {
    this.totalSize.next(newTotalSize);
  }

  updateOffset(newOffset): void {
    this.currenOffset.next(newOffset);
  }

  getCurrentSize(): number {
    let currentSize;
    this.currentSize$.subscribe(cSize => { currentSize = cSize; });
    return currentSize;
  }

  getTotalSize(): number {
    let totalSize;
    this.totalSize$.subscribe(insideTotal => {
      totalSize =  insideTotal;
    });
    return totalSize;
  }

  getTotalPage(): number {
    let totalPage;
    this.totalPage$.subscribe(res => {
        totalPage = res;
    });
    return totalPage;
  }

}

