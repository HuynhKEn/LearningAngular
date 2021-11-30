import { NgModule } from '@angular/core';

import { PreloadAllModules } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { ROUTE_PATH } from './configs/route-path.config';
const routes: Routes = [
  {
    path: `${ROUTE_PATH.PRODUCTS}`,
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  },

  { path: '', redirectTo: `${ROUTE_PATH.HOME}`, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
