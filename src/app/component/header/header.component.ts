import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoIcon = '../../../../assets/images/header-icon.png';
  loginStatus: boolean;
  menuList = [
    'Python', 'Java', 'C#', 'Angular', 'Flask'
  ];
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private adminService: AdminService){
    this.adminService.loginStatus$.subscribe(res => this.loginStatus = res);
  }


  ngOnInit(): void {
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
