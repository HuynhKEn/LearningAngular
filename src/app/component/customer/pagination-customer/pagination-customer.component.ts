import {  AfterViewInit, Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject, fromEvent   } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { PaginationCustomerService } from './pagination-customer-services/pagination-customer.service';
import { PaginationModel } from './pagination-customer.model';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-pagination-customer',
  templateUrl: './pagination-customer.component.html',
  styleUrls: ['./pagination-customer.component.scss']
})
export class PaginationCustomerComponent implements OnInit, AfterViewInit {
  @Input() settingConfig: PaginationModel;
  @Output() filterDataOut = new EventEmitter<any[] | any>();

  @ViewChild('prevLeft') prevLeft: any;
  @ViewChild('prevLeftBtn') prevLeftBtn: ElementRef;
  @ViewChild('prevLeftAll') prevLeftAll: any;
  @ViewChild('prevLeftAllBtn') prevLeftAllBtn: any;

  @ViewChild('nextRight') nextRight: any;
  @ViewChild('nextRightBtn') nextRightBtn: ElementRef;
  @ViewChild('nextRightAll') nextRightAll: any;
  @ViewChild('nextRightAllBtn') nextRightAllBtn: any;

  element$: Observable<any>;
  pageSize: any;
  pageSize$: any;
  currentPage = 1;
  dataSource: any[] | any;
  currentSize: number;
  pageSizeModelTemp: number;
  mode = 2;

  constructor(private paginationService: PaginationCustomerService) {
    this.element$ = combineLatest([
      this.paginationService.totalPage$,
      this.paginationService.currentSize$,
      this.paginationService.totalSize$,
      this.paginationService.currenOffset$,
    ]).pipe(
      map( (res) => {
        return {
          totalPage: res[0], currentSize: res[1], totalSize: res[2], currentOffset: res[3]
        };
      })
    );
  }

  ngOnInit(): void {
    this.dataSource = this.settingConfig.data;
    if (Array.isArray(this.dataSource)) {
      this.paginationService.updateTotalSize(this.dataSource.length);
    }
    this.pageSize =  new BehaviorSubject(this.settingConfig.pageSizeDefault);
    this.pageSize$ = this.pageSize.asObservable();
  }

  async ngAfterViewInit(): Promise<void> {
    if (this.mode === 1) {
      this.statusDisabledPrev();
      let totalSize;
      totalSize = this.paginationService.getTotalSize();

      this.pageSize$.pipe(
        distinctUntilChanged(),
      ).subscribe( (res) => {
        this.currentPage = 1;
        this.statusDisabledPrev();
        this.statusTurnOnNext();
        this.paginationService.updateSize(res);
        this.currentSize = this.paginationService.getCurrentSize();
        this.paginationService.updateTotalPage(this.getNumberPage(totalSize));
        this.paginationService.updateOffset(this.getValueUpdateOffset());
        this.filterData(this.getValueUpdateOffset(), totalSize, this.dataSource);
      });

      // ANCHOR  Prev Left
      fromEvent(this.prevLeft.nativeElement, 'click').pipe(
        map( res => {
          return res;
        })
      ).subscribe( (subRes) => {
        if (subRes) {
          if (this.currentPage > 1) {
            this.statusTurnOnNext();
            this.currentPage -= 1;
            this.paginationService.updateOffset(this.getValueUpdateOffset());
            this.filterData(this.getValueUpdateOffset(), totalSize, this.dataSource);
            if (this.currentPage === 1) {
              this.statusDisabledPrev();
            }
          }
        }
      });

      // ANCHOR  Next Right
      fromEvent(this.nextRight.nativeElement, 'click').pipe(
        map( res => {
          return res;
        })
      ).subscribe( (subRes) => {
        if (subRes) {
          const totalPage  = this.paginationService.getTotalPage();
          if (this.currentPage < Number(totalPage) ) {
            this.statusTurnOnPrev();
            this.currentPage += 1;
            this.paginationService.updateOffset(this.getValueUpdateOffset());
            this.filterData(this.getValueUpdateOffset(), totalSize, this.dataSource);
            if (this.currentPage === Math.floor(totalSize / this.currentSize) + 1) {
              this.statusDisabledNext();
            }
          }
        }
      });

      // ANCHOR  Next Right All
      fromEvent(this.nextRightAll.nativeElement, 'click').pipe(
          map(res => {
            return this.getNumberPage(totalSize);
          })
        ).subscribe( numberPage => {
          this.statusDisabledNextTurnOnPrev();
          this.currentPage = numberPage;
          this.paginationService.updateOffset(this.getValueUpdateOffset());
          this.filterData(this.getValueUpdateOffset(), totalSize, this.dataSource);
      });

      // ANCHOR  Prev Left All
      fromEvent(this.prevLeftAll.nativeElement, 'click').pipe(
        map(res => {
          return 1;
        })
        ).subscribe( numberPage => {
          this.statusDisabledPrevTurnOnNext();
          this.currentPage = numberPage;
          this.paginationService.updateOffset(this.getValueUpdateOffset());
          this.filterData(this.getValueUpdateOffset(), totalSize, this.dataSource);
      });
    }
  }

  statusDisabledNextTurnOnPrev(): void {
    this.prevLeftBtn['disabled'] = false;
    this.prevLeftAllBtn['disabled'] = false;
    this.nextRightBtn['disabled'] = true;
    this.nextRightAllBtn['disabled'] = true;
  }

  statusDisabledPrevTurnOnNext(): void {
    this.nextRightBtn['disabled'] = false;
    this.nextRightAllBtn['disabled'] = false;
    this.prevLeftBtn['disabled'] = true;
    this.prevLeftAllBtn['disabled'] = true;
  }

  statusDisabledPrev(): void  {
    this.prevLeftBtn['disabled'] = true;
    this.prevLeftAllBtn['disabled'] = true;
  }

  statusDisabledNext(): void {
    this.nextRightBtn['disabled'] = true;
    this.nextRightAllBtn['disabled'] = true;
  }

  statusTurnOnNext(): void  {
    this.nextRightBtn['disabled'] = false;
    this.nextRightAllBtn['disabled'] = false;
  }
  statusTurnOnPrev(): void  {
    this.prevLeftBtn['disabled'] = false;
    this.prevLeftAllBtn['disabled'] = false;
  }

  getSetOfCurrentOffsetAPage(totalSize): number {
    return (this.currentPage) * this.currentSize > totalSize ?
      totalSize : (this.currentPage) * this.currentSize;
  }

  getValueUpdateOffset(): number  {
    return Math.floor( (this.currentPage - 1) * (this.currentSize) + 1);
  }

  getNumberPage(totalSize): number  {
    return  totalSize % this.currentSize !== 0 ? Math.floor(totalSize / this.currentSize) + 1 :
      Math.floor(totalSize / this.currentSize);
  }

  // ANCHOR Filter Data
  filterData(offset, totalSize, dataSourceLocal): void {
    const dataFilter = cloneDeep(dataSourceLocal);
    const totalOffsetCurrent = this.getSetOfCurrentOffsetAPage(totalSize);
    if (Array.isArray(dataFilter) && dataFilter.length > 0 ) {
      const filterDataOut = dataFilter.splice(Number(offset) - 1, totalOffsetCurrent);
      this.filterDataOut.emit(filterDataOut);
    } else {
      this.filterDataOut.emit(dataFilter);
    }
  }

  arrayCreateList(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }
}
