import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {TestMobileService} from '../../../../../service/test-mobile.service';
import {CollapseService} from '../service/collapse.service';

export interface DataCollapseChange {
    collapseId: string;
    selected: boolean;
}

let uuid = 1;

@Component({
    selector: 'app-collapse-item',
    templateUrl: './collapse-item.component.html',
    styleUrls: ['./collapse-item.component.scss']
})
export class CollapseItemComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() selected = false;
    @Input() content = '';
    @Input() isFromItem = false;
    @Input() numberWordShow = 250;
    @Input() numberDotContent = 1;
    @Output() selectedChange: EventEmitter<DataCollapseChange> = new EventEmitter<DataCollapseChange>();

    private _id: number;
    contentShort = '';
    triggerExpandAndCollapse = true;
    isMobile = false;

    constructor(private  collapseService: CollapseService, private testMobileService: TestMobileService) {
        if (this.testMobileService.checkMobile()) {
            this.isMobile = true;
        }
    }

    get collapseId() {
        return 'collapse-item-' + this._id;
    }

    ngOnInit(): void {
        this._id = ++uuid;
    }

    ngAfterViewInit() {
        if (!this.isFromItem) {
            this.collapseService.collapse$.subscribe( status => {
                if (this.selected  !== status ) {
                    this.selected = status;
                }
            });
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.triggerExpandAndCollapse = true;
        if (this.content && !this.isFromItem ) {
            const listWord = this.content.split(' ');
            const lengthWord =  this.content.length;
            const numberDot =  '...'.repeat(this.numberDotContent);
            if ( (listWord.length > this.numberWordShow) || (lengthWord > this.numberWordShow * 3) ) {
                if (listWord.length > this.numberWordShow) {
                    const listWordSlice = listWord.slice(0, this.numberWordShow);
                    listWordSlice.push(numberDot);
                    this.contentShort = listWordSlice.join(' ');
                } else {
                    this.contentShort = this.content.substring(0, this.numberWordShow * 3) + numberDot;
                }
            } else {
                this.contentShort = this.content;
                this.triggerExpandAndCollapse = false;
            }
        } else {
            this.contentShort = '';
            if (!this.isFromItem) {
                this.triggerExpandAndCollapse = false;
            }
        }
    }

    toggleSelected() {
        this.selected = !this.selected;
        this.selectedChange.emit({
            collapseId: this.collapseId,
            selected: this.selected
        });
    }
}
