import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private loginStatus  = new BehaviorSubject(true);
  loginStatus$ = this.loginStatus.asObservable();

  private adminStatus = new BehaviorSubject(true);
  adminStatus$ = this.adminStatus.asObservable();


  constructor() { }

  changeStatusToLogin(loginStatus: boolean) {
    this.loginStatus.next(loginStatus)
  }

  changeStatusToAdmin(adminStatus: boolean) {
    this.adminStatus.next(adminStatus)
  }
}
