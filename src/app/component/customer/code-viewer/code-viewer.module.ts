import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {HighlightJsModule} from 'ngx-highlight-js';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {CodeViewerComponent} from './code-viewer.component';


@NgModule({
  declarations: [
    CodeViewerComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HighlightJsModule,
  ],
  exports: [
    CodeViewerComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]

})
export class CodeViewerModule {}

