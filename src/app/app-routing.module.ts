import { NgModule } from '@angular/core';

import { PreloadAllModules } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/blogs/home/home.component';
import { PostComponent } from './components/blogs/post/post.component';
import { RegisterComponent } from './components/blogs/register/register.component';
import { ROUTE_PATH } from './config/route-path.config';
const routes: Routes = [
  { path: `${ROUTE_PATH.HOME}`, component: HomeComponent },
  { path: `${ROUTE_PATH.REGISTER}`, component: RegisterComponent },
  { path: `${ROUTE_PATH.POST}`, component: PostComponent },
  {
    path: `${ROUTE_PATH.PRODUCTS}`,
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: `${ROUTE_PATH.LOGIN}`,
    loadChildren: () => import('./components/blogs/login/login.module').then(m => m.LoginModule)
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
