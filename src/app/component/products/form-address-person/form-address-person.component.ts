import {Component, OnInit} from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-address-person',
    templateUrl: './form-address-person.component.html',
    styleUrls: ['./form-address-person.component.scss']
})
export class FormAddressPersonComponent implements OnInit {
    provinces = ['Kiên giang'];
    selectedProvince: string;
    addressForm = new FormGroup({
        fullName: new FormControl(''),
        address: new FormControl(''),
        numberPhone: new FormControl(''),
    });
    ngOnInit() {
    }
}
