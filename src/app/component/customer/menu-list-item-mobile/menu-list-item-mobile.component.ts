import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuSettings, NavItem} from '../A-set-up-dynamic/data-menu-item-customer';
@Component({
  selector: 'app-menu-list-item-mobile',
  templateUrl: './menu-list-item-mobile.component.html',
  styleUrls: ['./menu-list-item-mobile.component.scss']
})
export class MenuListItemMobileComponent implements OnInit {
  mobile = true;
  menuElement: NavItem[];
  logoIcon = '../../../../assets/images/icon.png';

  constructor() { }

  ngOnInit(): void {
    this.menuElement = MenuSettings.navItems;
  }
}
