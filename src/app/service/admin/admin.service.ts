import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private loginStatus  = new BehaviorSubject(false);
  loginStatus$ = this.loginStatus.asObservable();

  private adminStatus = new BehaviorSubject(false);
  adminStatus$ = this.adminStatus.asObservable();


  constructor() { }

  changeStatusToLogin(loginStatus: boolean) {
    this.loginStatus.next(loginStatus)
  }

  changeStatusToAdmin(adminStatus: boolean) {
    this.adminStatus.next(adminStatus)
  }
}
