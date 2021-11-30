import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CollapseService {
    collapse = new BehaviorSubject(false);
    collapse$ = this.collapse.asObservable();

    changeStatus(status: boolean) {
        this.collapse.next(status);
    }
}
