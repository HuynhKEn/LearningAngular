import {AfterContentInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList} from '@angular/core';

import {Subscription} from 'rxjs';
import {CollapseItemComponent} from '../collapse-item/collapse-item.component';


@Component({
    selector: 'app-collapse-group',
    templateUrl: './collapse-group.component.html',
    styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
    @ContentChildren(CollapseItemComponent) collapses: QueryList<CollapseItemComponent>;
    @Input() multiple = true;

    private _subscriptions: Subscription[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.collapses.forEach(collapse => {
            const subscription = collapse.selectedChange.subscribe(coll => {
                if (!this.multiple && coll.selected) {
                    this.toggleCollapse(coll);
                }
            });
            this._subscriptions.push(subscription);
        });
    }

    toggleCollapse(collapse) {
        this.collapses.forEach(c => {
            if (c.collapseId !== collapse.collapseId) {
                c.selected = false;
            }
        });
    }

    ngOnDestroy() {
        if (this._subscriptions && this._subscriptions.length) {
            this._subscriptions.forEach(sub => sub.unsubscribe());
        }
        this._subscriptions = [];
    }
}
