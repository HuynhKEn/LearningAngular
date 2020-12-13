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
      color: 'darkgrey;'
    },
    {
      displayName: 'POST',
      iconName: 'note',
      route: `${ROUTE_PATH.POST_ADMIN}`,
      color: 'darkgrey;'
    },
    {
      displayName: 'MN_MEDIA',
      iconName: 'visibility',
      route: `${ROUTE_PATH.MANAGER_ADMIN_MEDIA}`,
      color: 'darkgrey;'
    },
    {
      displayName: 'MEDIA',
      iconName: 'video_library',
      route: `${ROUTE_PATH.MEDIA_ADMIN}`,
      color: 'darkgrey;',
      children: [
        {
          displayName: 'UPLOAD',
          iconName: 'upload',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.UPLOAD_ADMIN}` ,
        },
        {
          displayName: 'PDF-SHOW',
          iconName: 'picture_as_pdf',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.PDF_ADMIN}`,
        },
        {
          displayName: 'C_SHOW_ITEM',
          iconName: 'style',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CARD_SHOW_ITEM}`,
        },
        {
          displayName: 'CAROUSEL_ITEM',
          iconName: 'nav',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM}`,
        },
        {
          displayName: 'CAROUSEL_ITEM_V',
          iconName: 'nav',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM_V}`,
        }
      ]
    },
  ];
}

