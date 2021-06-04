import { NgModule } from '@angular/core';
import { ROUTE_PATH } from './config/route-path.config';
import { PostComponent } from './component/post/post.component';
import { HomeComponent } from './component/home/home.component';
import { PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: `${ROUTE_PATH.HOME}`, component: HomeComponent },
  { path: `${ROUTE_PATH.REGISTER}`, component: RegisterComponent },
  { path: `${ROUTE_PATH.POST}`, component: PostComponent },
  {
    path: `${ROUTE_PATH.PRODUCTS}`,
    loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: `${ROUTE_PATH.LOGIN}`,
    loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo: `${ROUTE_PATH.HOME}`, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,{
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
