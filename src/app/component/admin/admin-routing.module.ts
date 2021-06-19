import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ROUTE_PATH} from '../../config/route-path.config';
import {CardShowItemComponent} from '../card-show-item/card-show-item.component';
import {CodeManageComponent} from '../code-manage/code-manage.component';
import {GuardDeactivate} from '../customer/B-set-up-service/guard-deactivate.service';
import {CarouselCustomerVerticalComponent} from '../customer/carousel-customer-vertical/carousel-customer-vertical.component';
import {CarouselCustomerComponent} from '../customer/carousel-customer/carousel-customer.component';
import {ManagerAdminMediaComponent} from '../manager-admin-media/manager-admin-media.component';
import {MediaComponent} from '../media/media.component';
import {PdfAdminComponent} from '../pdf-admin/pdf-admin.component';
import {PostAdminComponent} from '../post-admin/post-admin.component';
import {PostAssignmentComponent} from '../post-assignment/post-assignment.component';
import {TopicComponent} from '../topic-admin/topic.component';
import {AdminComponent} from './admin.component';


const routes: Routes = [
  {
    path: '',
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
        path: `${ROUTE_PATH.POST_ASSIGNMENT}`,
        component: PostAssignmentComponent,
      },
      {
        path: `${ROUTE_PATH.MANAGER_ADMIN_MEDIA}`,
        component: ManagerAdminMediaComponent,
      },
      {
        path: `${ROUTE_PATH.MANAGER_CODE}`,
        component: CodeManageComponent,
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
          }
        ],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
