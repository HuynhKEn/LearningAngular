import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-component',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  search = '';
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void{
    if (this.search) {
    }
  }

}
