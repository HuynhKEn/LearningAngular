import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {CollapseGroupComponent} from './collapse-group/collapse-group.component';
import {CollapseItemComponent} from './collapse-item/collapse-item.component';
import {CollapseComponent} from './collapse.component';

@NgModule({
  declarations: [
    CollapseComponent,
    CollapseGroupComponent,
    CollapseItemComponent,
  ]
  ,
  imports: [
    CommonModule,
  ],
  exports: [
    CollapseComponent,
    CollapseGroupComponent,
    CollapseItemComponent,
  ]

})
export class CollapseModule {
}
