import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  colorTicTac = true;
  loginStatus: boolean;
  menuList = [
    "Python","Java","C#","Angular","Flask"
  ]
  changeColor = setInterval( ()=> this.colorTicTac = !this.colorTicTac, 5000);
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }



}
