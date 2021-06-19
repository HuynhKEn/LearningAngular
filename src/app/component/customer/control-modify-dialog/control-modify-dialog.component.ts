import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {cloneDeep} from 'lodash';
import * as moment from 'moment';
import { GLOBAL_CONSTANT } from '../../../constant/global-constant';
import { TranformValidatorService } from '../../../helpper/transform-validator.service';

@Component({
  selector: 'app-control-modify-dialog',
  templateUrl: './control-modify-dialog.component.html',
  styleUrls: ['./control-modify-dialog.component.scss'],
})
export class ControlModifyDialogComponent implements OnInit {
  formGroup: FormGroup;
  keyForm: string[] = [];
  keyDateForm: any[] = [];
  chooseSelect: any[] = [];
  listSelectValue = {};
  listRadioValue = {};
  datePickerTotal = {};
  typeElement = {};
  listRequired = {};
  title: string;
  CONSTANT: any;
  contentTextArea = '';
  constructor(
    private dialogRef: MatDialogRef<ControlModifyDialogComponent>,
    private fb: FormBuilder,
    private tranformValid: TranformValidatorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.CONSTANT = GLOBAL_CONSTANT.MESSAGE;
  }

  ngOnInit(): void {
    this.initView();
  }

  initView(): void {
    const groupForm = {};
    const keySelectSort = [];
    const keyRadioSort = [];
    let keyDataStartPickerSort = '';
    let keyDataEndPickerSort = '';
    let keyArea = '';
    this.title = this.data[1].toUpperCase();
    this.typeElement = this.data[3];
    Object.entries(this.typeElement).forEach( key => {
      if (key[1][0].select) {
        keySelectSort.push(key[0]);
        this.listSelectValue[key[0]] = key[1][0].select;
      } else {
        if (key[1][0].radio){
          keyRadioSort.push(key[0]);
          this.listRadioValue[key[0]] = key[1][0].radio;
        } else {
          if (key[1][0] === GLOBAL_CONSTANT.START_DATE){
            keyDataStartPickerSort = key[0];
          }
          if (key[1][0] === GLOBAL_CONSTANT.END_DATE){
            keyDataEndPickerSort  = key[0];
          }
          if (key[1][0] === GLOBAL_CONSTANT.AREA){
            keyArea  = key[0];
          }
        }
      }
    });
    const dataTotal =  this.data[2] === GLOBAL_CONSTANT.EDIT ? cloneDeep(this.data[0]) :
                       this.data[2] === GLOBAL_CONSTANT.ADD ? this.typeElement : null;
    const keySelectSortTemp = [];
    const keyRadioSortTemp = [];
    for (const [key, value] of Object.entries(dataTotal)) {
      if (!keySelectSort.includes(key) && !keyRadioSort.includes(key) &&
        keyDataStartPickerSort !== key && keyDataEndPickerSort !== key && keyArea !== key){
        this.keyForm.push(key);
      }
      else {
        if (keySelectSort.includes(key)) {
          keySelectSortTemp.push(key);
        } else {
          if (keyRadioSort.includes(key)){
            keyRadioSortTemp.push(key);
          }
        }
      }
      const statusValidators = this.typeElement[key];
      if (statusValidators.length > 1) {
        if (key === GLOBAL_CONSTANT.END_DATE || key === GLOBAL_CONSTANT.START_DATE) {
          const date = this.data[2] === GLOBAL_CONSTANT.EDIT ? new Date(moment(value).format('YYYY/MM/DD')) :
                       this.data[2] ===  GLOBAL_CONSTANT.ADD ? new Date(moment().format('YYYY/MM/DD')) : null;
          const validatorParse = cloneDeep(statusValidators.slice(1));
          const listValidatorParse = [];
          validatorParse.map(
            res =>  {
              if ( Object.keys(res)[0] !== 'pattern' &&
                  Object.keys(res)[0] !== 'required' && Object.keys(res)[0] !== 'email' ){
                    listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0], Number(Object.values(res)[0])));
              }
              if (Object.keys(res)[0] === 'pattern'){
                    listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0], 0, String(Object.values(res)[0])));
              }
              if (Object.keys(res)[0] === 'required' || Object.keys(res)[0] === 'email' ){
                    if (Object.keys(res)[0] === 'required'){
                      this.listRequired[key] = true;
                    }
                    listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0]));
              }
          });
          groupForm[key] = [date, listValidatorParse];
        } else {
          let valueDefault = this.data[2] === GLOBAL_CONSTANT.EDIT ? value :
                               this.data[2] === GLOBAL_CONSTANT.ADD  ? '' : null;
          const validatorParse = cloneDeep(statusValidators.slice(1));
          const listValidatorParse = [];
          validatorParse.map(
            res =>  {
              if (Object.keys(res)[0] !== 'pattern' && Object.keys(res)[0] !== 'required' &&
                   Object.keys(res)[0] !== 'email' ){
                listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0], Number(Object.values(res)[0])));
              }
              if (Object.keys(res)[0] === 'pattern'){
                listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0], 0, String(Object.values(res)[0])));
              }
              if (Object.keys(res)[0] === 'required' || Object.keys(res)[0] === 'email' ){
                if (Object.keys(res)[0] === 'required'){
                  this.listRequired[key] = true;
                }
                listValidatorParse.push(this.tranformValid.tranform(Object.keys(res)[0]));
              }
          });
          if ( this.typeElement[key][0].select && this.data[2] === GLOBAL_CONSTANT.ADD ){
            valueDefault = this.typeElement[key][0].select[0];
          }
          if ( this.typeElement[key][0].radio && this.data[2] === GLOBAL_CONSTANT.ADD ){
            valueDefault = this.typeElement[key][0].radio[0];
          }
          groupForm[key] = [valueDefault, listValidatorParse];
        }
      } else {
        if (key === GLOBAL_CONSTANT.END_DATE || key === GLOBAL_CONSTANT.START_DATE){
          const date = this.data[2] === GLOBAL_CONSTANT.EDIT ? new Date(moment(value).format('YYYY/MM/DD')) :
                       this.data[2] === GLOBAL_CONSTANT.ADD ? new Date(moment().format('YYYY/MM/DD')) : null;
          groupForm[key] = [date];
        } else {
          let valueDefault = this.data[2] === GLOBAL_CONSTANT.EDIT ? value :
                               this.data[2] === GLOBAL_CONSTANT.ADD ? '' : null;
          if ( this.typeElement[key][0].select && this.data[2] === GLOBAL_CONSTANT.ADD ){
            valueDefault = this.typeElement[key][0].select[0];
          }
          if ( this.typeElement[key][0].radio && this.data[2] === GLOBAL_CONSTANT.ADD ){
            valueDefault = this.typeElement[key][0].radio[0];
          }
          if ( keyArea !== ''){
            this.contentTextArea = valueDefault as string;
          }
          groupForm[key] = [valueDefault];
        }
      }
    }

    for (let i = 0 ; i < keySelectSortTemp.length - 1 ; i++){
      for (let j = i; j < keySelectSortTemp.length ; j++){
        if (keySelectSortTemp[i].length > keySelectSortTemp[j].length){
          const temp = keySelectSortTemp[i];
          keySelectSortTemp[i] = keySelectSortTemp[j];
          keySelectSortTemp[j] = temp;
        }
      }
    }
    for (let i = 0 ; i < keyRadioSortTemp.length - 1 ; i++){
      for (let j = i; j < keyRadioSortTemp.length ; j++){
        if (keyRadioSortTemp[i].length > keyRadioSortTemp[j].length){
          const temp = keyRadioSortTemp[i];
          keyRadioSortTemp[i] = keyRadioSortTemp[j];
          keyRadioSortTemp[j] = temp;
        }
      }
    }
    for (let i = 0 ; i < this.keyForm.length - 1 ; i++){
      for (let j = i; j < this.keyForm.length ; j++){
        if (this.keyForm[i].length > this.keyForm[j].length){
          const temp = this.keyForm[i];
          this.keyForm[i] = this.keyForm[j];
          this.keyForm[j] = temp;
        }
      }
    }
    if (keyArea !== ''){
      this.keyForm = this.keyForm.concat(keyArea);
    }
    this.keyForm = this.keyForm.concat(keySelectSortTemp, keyRadioSortTemp);
    if (keyDataStartPickerSort !== ''){
      this.keyDateForm.push(GLOBAL_CONSTANT.START_DATE);
    }
    if (keyDataEndPickerSort !== ''){
      this.keyDateForm.push(GLOBAL_CONSTANT.END_DATE);
    }

    if (keyDataStartPickerSort !== '' && keyDataStartPickerSort !== ''){
      this.formGroup = this.fb.group(groupForm, {validator: this.dateLessThan(GLOBAL_CONSTANT.START_DATE, GLOBAL_CONSTANT.END_DATE)});
    } else {
      this.formGroup = this.fb.group(groupForm);
    }
  }
  isSelectElement(object: any): boolean{
    return object instanceof Object && object[0].hasOwnProperty('select');
  }
  isInputElement(object: any): boolean{
    return object instanceof Object && object[0] === 'input';
  }
  isAreaElement(object: any): boolean{
    return object instanceof Object && object[0] === 'area';
  }
  isRadioElement(object: any): boolean{
    return object instanceof Object && object[0].hasOwnProperty('radio');
  }
  isDatePickerElement(object: any): boolean{
    return object instanceof Object && (object === GLOBAL_CONSTANT.START_DATE || object === GLOBAL_CONSTANT.END_DATE);
  }

  dateLessThan(start: string, end: string): object {
    return (group: FormGroup): {[key: string]: any} => {
     const f = group.controls[start];
     const t = group.controls[end];
     if (f.value > t.value) {
       return {
         dates: 'StartDate should be less than EndDate'
       };
     }
     return {};
    };
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    if (this.formGroup.invalid){
      return;
    }
    this.dialogRef.close(true);
  }
}
