import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { RegisterComponent } from './component/register/register.component';
import { ROUTE_PATH } from './config/route-path.config';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  { path: `${ROUTE_PATH.HOME}`, component: HomeComponent },
  { path: `${ROUTE_PATH.REGISTER}`, component: RegisterComponent },
  { path: `${ROUTE_PATH.POST}`, component: PostComponent },
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
