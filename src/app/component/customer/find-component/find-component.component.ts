import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-component',
  templateUrl: './find-component.component.html',
  styleUrls: ['./find-component.component.scss']
})
export class FindComponentComponent implements OnInit {
  search: string = '';
  @Input() color : string;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.search) {
    }
  }

}
