import {NgModule} from '@angular/core';
// @ts-ignore
import {RouterModule, Routes} from '@angular/router';

import {CollapseComponent} from '../collapse.component';


// @ts-ignore
const routes: Routes = [
    {
        path: '',
        component: CollapseComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollapseRoutingModule {
}
