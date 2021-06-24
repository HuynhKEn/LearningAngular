import {Injectable} from '@angular/core';

import {DeviceDetectorService} from 'ngx-device-detector';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestMobileService {

    private testMobileStatus = new BehaviorSubject<any>(false);
    public testMobileStatus$ = this.testMobileStatus.asObservable();

    constructor(private deviceDetectService: DeviceDetectorService) {
    }

    changeStatusTest(statusTest: boolean) {
        this.testMobileStatus.next(statusTest);
    }

    checkMobile() {
        const isMobile = this.deviceDetectService.isMobile();
        const isTablet = this.deviceDetectService.isTablet();
        return isMobile || isTablet;
    }

}
