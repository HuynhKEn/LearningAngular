import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/components/blogs/assets/services/admin.service';
import { ROUTE_PATH } from '../../../config/route-path.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLoginGroup: FormGroup;
  success = '';
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      public adminService: AdminService
  ) {
    this.adminService.changeStatusToLogin(true);
    this.formLoginGroup = this.formBuilder.group({
        username: ['', Validators.required]
      ,
        password: ['', Validators.required]
      ,
        remember: ['']
    });
  }



  ngOnInit(): void {
  }
  onSubmit(): void{
    if (this.formLoginGroup.invalid){
      return;
    }
    this.router.navigate([`${ROUTE_PATH.LOGIN}` + '/' + `${ROUTE_PATH.ADMIN}`]);

  }
  get dataControl(): any{
    return this.formLoginGroup.controls;
  }
  get primUsername(): any{
    return this.formLoginGroup.get('username');
  }

  get primPassword(): any{
    return this.formLoginGroup.get('password');
  }

}
