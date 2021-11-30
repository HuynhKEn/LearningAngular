import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-customer',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class SearchCustomerComponent implements OnInit {
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
