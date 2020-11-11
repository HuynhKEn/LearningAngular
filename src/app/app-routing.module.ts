import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MediaComponent } from './component/media/media.component';
import { PostAdminComponent } from './component/post-admin/post-admin.component';
import { PostComponent } from './component/post/post.component';
import { RegisterComponent } from './component/register/register.component';
import { TopicComponent } from './component/topic/topic.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'post',component:PostComponent},
  {path:'login',component:LoginComponent,
   children:[{
     path:'admin',component:AdminComponent,
     children:[{
      path:'topic-admin',component:TopicComponent,
     },{
      path:'post-admin',component:PostAdminComponent
     },
    {
      path:'media-admin',component:MediaComponent
    }]

   }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
