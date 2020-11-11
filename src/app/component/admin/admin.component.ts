import { Component, OnInit,AfterViewInit,ChangeDetectionStrategy,ChangeDetectorRef, ViewChild, DoCheck  } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { map, switchMap, tap } from 'rxjs/operators';
import { AdminService } from 'src/app/service/admin/admin.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AdminComponent implements OnInit,DoCheck {
  @ViewChild(MatSidenav) matSidenav : MatSidenav
  @ViewChild(MatSidenavContent)  matSidenavContent: MatSidenavContent
  logoIcon = "../../../assets/images/icon.png"
  constructor(private adminService: AdminService, private cdRef :ChangeDetectorRef ) {
    this.adminService.changeStatusToAdmin(true);

  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.cdRef.detectChanges();

  }

  showNavLabels: boolean = true;
  onToggleSidenav = () => {
    // this.matSidenavContent.elementScrolled().pipe( switchMap( () => interval(1000) ) ).subscribe( (e)=> console.log(e))
    // this.matSidenav.openedStart.pipe(switchMap( () => interval(1000) )).subscribe( (e)=> console.log(e))
    this.matSidenav.toggle()
  }

  closeToggleSidenav = () => {
    this.matSidenav.close()

  }


}
