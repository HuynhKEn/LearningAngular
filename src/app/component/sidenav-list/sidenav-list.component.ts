import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  menuList = [
    "Python","Java","C#","Angular","Flask"
  ]
  @Output() sidenavClose = new EventEmitter();
  constructor() { }
  ngOnInit() {

  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
