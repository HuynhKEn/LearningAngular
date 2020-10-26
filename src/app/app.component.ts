import { Component } from '@angular/core';
import { AdminService } from './service/admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearningAngular';
  loginStatus: boolean;
  constructor(private adminService : AdminService){
    this.adminService.loginStatus$.subscribe(res => this.loginStatus = res);
  }


}
