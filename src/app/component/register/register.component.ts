import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  isSubmitted  = false
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,16}$')],
      ],
      password: [
        '', Validators.required
      ]
    })
  }


  get UsernameStatus(){
    return this.registerFormGroup.get('username')
  }

  get passwordStatus(){
    return this.registerFormGroup.get('password')
  }

  onSubmit(){
    this.isSubmitted = true;
    if (this.registerFormGroup.invalid){
      return;
    }
  }

}
