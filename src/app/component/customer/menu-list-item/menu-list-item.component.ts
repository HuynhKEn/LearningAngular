import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuSettings, NavItem} from '../A-set-up-dynamic/data-menu-item-customer';
@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
})
export class MenuListItemComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<boolean>();
  menuElement: NavItem[];
  constructor() {
  }

  ngOnInit(): void {
    this.menuElement = MenuSettings.navItems;
  }
  onToggleSidenav(): void{
    this.toggleSidenav.emit(true);
  }
}
