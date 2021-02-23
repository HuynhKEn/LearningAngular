import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewChild, DoCheck  } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { map, switchMap, tap } from 'rxjs/operators';
import { AdminService } from 'src/app/service/admin/admin.service';
import { NavService } from '../customer/B-set-up-service/nav.service';
import { interval } from 'rxjs';
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
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cdRef.detectChanges();

  }

  ngAfterViewInit(): void {
    this.navService.appSideNav = this.matSidenav;
  }

  onToggleSidenav(event): void {
    // this.matSidenavContent.elementScrolled().pipe( switchMap( () => interval(1000) ) ).subscribe( (e)=> console.log(e))
    // this.matSidenav.openedStart.pipe(switchMap( () => interval(1000) )).subscribe( (e)=> console.log(e))
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
