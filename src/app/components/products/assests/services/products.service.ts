import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productStatus = new BehaviorSubject<any>(false);
  public productStatus$ = this.productStatus.asObservable();

  constructor() {
  }

  changeStatusProduct(productStatus: boolean) {
    this.productStatus.next(productStatus);
  }

}
