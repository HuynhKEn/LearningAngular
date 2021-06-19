import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DataCollapseChange {
    collapseId: string;
    selected: boolean;
}

let uuid: number = 1;

@Component({
    selector: 'app-collapse-item',
    templateUrl: './collapse-item.component.html',
    styleUrls: ['./collapse-item.component.scss']
})
export class CollapseItemComponent implements OnInit {
    @Input() title: string = '';
    @Input() selected: boolean = false;
    @Output() selectedChange: EventEmitter<DataCollapseChange> = new EventEmitter<DataCollapseChange>();
    private _id: number;

    constructor() {
    }

    get collapseId() {
        return 'collapse-item-' + this._id;
    }

    ngOnInit(): void {
        this._id = ++uuid;
    }

    toggleSelected() {
        this.selected = !this.selected;
        this.selectedChange.emit({
            collapseId: this.collapseId,
            selected: this.selected
        });
    }

}
