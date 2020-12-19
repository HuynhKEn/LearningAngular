import {ROUTE_PATH} from "../../../config/route-path.config";
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  color?: string;
  route?: string;
  children?: NavItem[];
}

export class MenuSettings {
  static navItems: NavItem[] = [
    {
      displayName: 'TOPIC',
      iconName: 'topic',
      route: `${ROUTE_PATH.TOPIC_ADMIN}`,
      color: '#6a6666;'
    },
    {
      displayName: 'POST',
      iconName: 'note',
      route: `${ROUTE_PATH.POST_ADMIN}`,
      color: '#6a6666;'
    },
    {
      displayName: 'MN_MEDIA',
      iconName: 'visibility',
      route: `${ROUTE_PATH.MANAGER_ADMIN_MEDIA}`,
      color: '#6a6666;'
    },
    {
      displayName: 'MEDIA',
      iconName: 'video_library',
      route: `${ROUTE_PATH.MEDIA_ADMIN}`,
      color: '#6a6666;',
      children: [
        {
          displayName: 'UPLOAD',
          iconName: 'upload',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.UPLOAD_ADMIN}` ,
          color: '#6a6666;',
        },
        {
          displayName: 'PDF-SHOW',
          iconName: 'picture_as_pdf',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.PDF_ADMIN}`,
          color: '#6a6666;',
        },
        {
          displayName: 'C_SHOW_ITEM',
          iconName: 'style',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CARD_SHOW_ITEM}`,
          color: '#6a6666;',
        },
        {
          displayName: 'CAROUSEL_ITEM',
          iconName: 'view_carousel',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM}`,
          color: '#6a6666;',
        },
        {
          displayName: 'CAROUSEL_ITEM_V',
          iconName: 'view_column',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM_V}`,
          color: '#6a6666;',
        }
      ]
    },
  ];
}

