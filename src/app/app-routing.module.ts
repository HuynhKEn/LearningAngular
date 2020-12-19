import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CardShowItemComponent } from './component/card-show-item/card-show-item.component';
import { CarouselCustomerVerticalComponent } from './component/customer/carousel-customer-vertical/carousel-customer-vertical.component';
import { CarouselCustomerComponent } from './component/customer/carousel-customer/carousel-customer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ManagerAdminMediaComponent } from './component/manager-admin-media/manager-admin-media.component';
import { MediaComponent } from './component/media/media.component';
import { PdfAdminComponent } from './component/pdf-admin/pdf-admin.component';
import { PostAdminComponent } from './component/post-admin/post-admin.component';
import { PostComponent } from './component/post/post.component';
import { RegisterComponent } from './component/register/register.component';
import { TopicComponent } from './component/topic-admin/topic.component';
import { ROUTE_PATH } from './config/route-path.config';
import { GuardDeactivate } from './component/customer/B-set-up-service/guard-deactivate.service';
const routes: Routes = [
  { path: '', redirectTo: `${ROUTE_PATH.HOME}`, pathMatch: 'full' },
  { path: `${ROUTE_PATH.HOME}`, component: HomeComponent },
  { path: `${ROUTE_PATH.REGISTER}`, component: RegisterComponent },
  { path: `${ROUTE_PATH.POST}`, component: PostComponent },
  {
    path: `${ROUTE_PATH.LOGIN}`,
    component: LoginComponent,
    children: [
      {
        path: `${ROUTE_PATH.ADMIN}`,
        component: AdminComponent,
        children: [
          {
            path: `${ROUTE_PATH.TOPIC_ADMIN}`,
            component: TopicComponent,
          },
          {
            path: `${ROUTE_PATH.POST_ADMIN}`,
            component: PostAdminComponent,
          },
          {
            path: `${ROUTE_PATH.MANAGER_ADMIN_MEDIA}`,
            component: ManagerAdminMediaComponent,
          },
          {
            path: `${ROUTE_PATH.MEDIA_ADMIN}`,
            children: [
              {
                path: `${ROUTE_PATH.UPLOAD_ADMIN}`,
                component: MediaComponent,
              },
              {
                path: `${ROUTE_PATH.PDF_ADMIN}`,
                component: PdfAdminComponent,
              },
              {
                path: `${ROUTE_PATH.CARD_SHOW_ITEM}`,
                component: CardShowItemComponent,
              },
              {
                path: `${ROUTE_PATH.CAROUSEL_ITEM}`,
                component: CarouselCustomerComponent,
                canDeactivate: [GuardDeactivate]
              },
              {
                path: `${ROUTE_PATH.CAROUSEL_ITEM_V}`,
                component: CarouselCustomerVerticalComponent
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
