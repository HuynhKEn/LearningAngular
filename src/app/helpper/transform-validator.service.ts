import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TranformValidatorService {
  tranform(pattern: string, value?: number, regexValue = '' ): ValidatorFn {
    if (pattern === 'min' &&  value ){
      return Validators.min(value);
    } else {
      if ( pattern === 'min' &&  !!!value ){
        return null;
      }
    }
    if (pattern === 'max' &&  value ){
      return Validators.max(value);
    } else {
      if ( pattern === 'max' &&  !!!value ){
        return null;
      }
    }
    if (pattern === 'minLength' &&  value ){
      return Validators.minLength(value);
    } else {
      if ( pattern === 'minLength' &&  !!!value ){
        return null;
      }
    }
    if (pattern === 'maxLength' &&  value ){
      return Validators.maxLength(value);
    } else {
      if ( pattern === 'maxLength' &&  !!!value ){
        return null;
      }
    }
    if (pattern === 'required'){
      return Validators.required;
    }

    if (pattern === 'email'){
      return Validators.email;
    }

    if (pattern === 'pattern' &&  regexValue ){
      return Validators.pattern(regexValue);
    } else {
      if ( pattern === 'pattern' &&  !!!regexValue ){
        return null;
      }
    }
  }
}
