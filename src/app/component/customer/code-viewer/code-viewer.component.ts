import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit {
  @Input() sourceCode: string;
  constructor() { }
  ngOnInit(): void {
  }
}
