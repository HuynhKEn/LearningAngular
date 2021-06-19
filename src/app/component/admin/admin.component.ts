import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component,
  DoCheck, OnInit, ViewChild  } from '@angular/core';

import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

import { AdminService } from 'src/app/service/admin/admin.service';
import { NavService } from '../customer/B-set-up-service/nav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AdminComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(MatSidenav) matSidenav: MatSidenav;
  @ViewChild(MatSidenavContent)  matSidenavContent: MatSidenavContent;
    constructor(
      private adminService: AdminService,
      private cdRef: ChangeDetectorRef,
      private navService: NavService ) {
    this.adminService.changeStatusToAdmin(true);

  }
  showNavLabels = true;
  ngOnInit() {
  }

  ngDoCheck(): void {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.navService.appSideNav = this.matSidenav;
  }

  onToggleSidenav(event): void {
    if (event){
      this.matSidenav.toggle();
    }
  }

  onCloseToggleSidenav(event): void{
    if (event){
      this.matSidenav.close();
    }
  }


}
