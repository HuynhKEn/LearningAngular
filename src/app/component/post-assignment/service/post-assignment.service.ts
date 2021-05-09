import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostAssignmentService {
  private postAssignmentData = new BehaviorSubject(false);
  postAssignmentData$ =  this.postAssignmentData.asObservable();
  constructor() {

  }
  changePostAssignmentDigital(value: boolean): void{
    this.postAssignmentData.next(value);
  }
}
