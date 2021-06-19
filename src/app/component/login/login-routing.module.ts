import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ROUTE_PATH} from '../../config/route-path.config';
import {LoginComponent} from './login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: `${ROUTE_PATH.ADMIN}`,
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
