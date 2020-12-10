import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import { NavItem} from "../A-set-up-dynamic/data-menu-item-customer";
import {Router} from '@angular/router';
import {NavService} from '../B-set-up-service/nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ROUTE_PATH} from '../../../config/route-path.config'
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item-customer.component.html',
  styleUrls: ['./list-item-customer.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class ListItemCustomerComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  @Input() mobile? : boolean;
  routerLinkAny: any;
  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([`${ROUTE_PATH.LOGIN}`+`/${ROUTE_PATH.ADMIN}/` + item.route]);
      if (this.mobile) {
        this.navService.closeNav();
      }
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }

  }
}
