import {Injectable} from '@angular/core';

import {DeviceDetectorService} from 'ngx-device-detector';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MobileService {

    private mobileStatus = new BehaviorSubject<any>(false);
    public mobileStatus$ = this.mobileStatus.asObservable();

    constructor(private deviceDetectService: DeviceDetectorService) {
    }

    changeStatusMobile(statusTest: boolean) {
        this.mobileStatus.next(statusTest);
    }

    checkMobile() {
        const isMobile = this.deviceDetectService.isMobile();
        const isTablet = this.deviceDetectService.isTablet();
        return isMobile || isTablet;
    }

    checkTablet() {
        return this.deviceDetectService.isTablet();
    }

}
