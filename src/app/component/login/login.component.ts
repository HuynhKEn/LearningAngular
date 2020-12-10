import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms'
import { AdminService } from 'src/app/service/admin/admin.service';
import { ROUTE_PATH } from '../../config/route-path.config'
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminStatus : boolean;
  formLoginGroup : FormGroup;
  success = ""
  constructor(private formBuilder:FormBuilder,private router:Router,private adminService:AdminService) {
    this.adminService.changeStatusToLogin(true)
    this.adminService.adminStatus$.subscribe(res => this.adminStatus = res)
    this.formLoginGroup = this.formBuilder.group({
        username : ['',Validators.required]
      ,
        password :['',Validators.required]
      ,
        remember :['',]
    })
  }



  ngOnInit(): void {
  }
  onSubmit(){
    if (this.formLoginGroup.invalid){
      return
    }
    this.router.navigate([`${ROUTE_PATH.LOGIN}` + "/" + `${ROUTE_PATH.ADMIN}`])

  }
  get dataControl(){
    return this.formLoginGroup.controls;
  }
  get primUsername(){
    return this.formLoginGroup.get('username')
  }

  get primPassword(){
    return this.formLoginGroup.get('password')
  }

}
