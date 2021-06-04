import {NgModule} from '@angular/core';
import {CodeViewerComponent} from "./code-viewer.component";
import {HighlightModule, HIGHLIGHT_OPTIONS} from "ngx-highlightjs";
import {HighlightJsModule} from "ngx-highlight-js";
import {CommonModule} from "@angular/common";


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

