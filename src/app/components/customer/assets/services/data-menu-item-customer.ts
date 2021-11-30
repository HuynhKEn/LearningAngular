import {ROUTE_PATH} from '../../../../config/route-path.config';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  color?: string;
  colorClick?: string;
  route?: string;
  children?: NavItem[];
}

export class MenuSettings {
  static navItems: NavItem[] = [
    {
      displayName: 'MN_MEDIA',
      iconName: 'perm_media',
      route: `${ROUTE_PATH.MANAGER_ADMIN_MEDIA}`,
      color: '#8f9bb3',
      colorClick: '#3366ff'
    },
    {
      displayName: 'TOPIC',
      iconName: 'topic',
      route: `${ROUTE_PATH.TOPIC_ADMIN}`,
      color: '#8f9bb3',
      colorClick: '#36f'
    },
    {
      displayName: 'POST',
      iconName: 'note',
      route: `${ROUTE_PATH.POST_ADMIN}`,
      color: '#8f9bb3',
      colorClick: '#36f'
    },
    {
      displayName: 'POST-ASM',
      iconName: 'note',
      route: `${ROUTE_PATH.POST_ASSIGNMENT}`,
      color: '#8f9bb3',
      colorClick: '#36f'
    },
    {
      displayName: 'MN_CODE',
      iconName: 'code',
      route: `${ROUTE_PATH.MANAGER_CODE}`,
      color: '#8f9bb3',
      colorClick: '#36f'
    },
    {
      displayName: 'MEDIA',
      iconName: 'video_library',
      route: `${ROUTE_PATH.MEDIA_ADMIN}`,
      color: '#8f9bb3',
      colorClick: '#36f',
      children: [
        {
          displayName: 'UPLOAD',
          iconName: 'upload',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.UPLOAD_ADMIN}` ,
          color: '#8f9bb3',
          colorClick: '#36f'
        },
        {
          displayName: 'PDF-SHOW',
          iconName: 'picture_as_pdf',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.PDF_ADMIN}`,
          color: '#8f9bb3',
          colorClick: '#36f'
        },
        {
          displayName: 'C_SHOW_ITEM',
          iconName: 'style',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CARD_SHOW_ITEM}`,
          color: '#8f9bb3',
          colorClick: '#36f'
        },
        {
          displayName: 'CAROUSEL_ITEM',
          iconName: 'view_carousel',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM}`,
          color: '#8f9bb3',
          colorClick: '#36f'
        },
        {
          displayName: 'CAROUSEL_ITEM_V',
          iconName: 'view_column',
          route: `${ROUTE_PATH.MEDIA_ADMIN}` + '/' + `${ROUTE_PATH.CAROUSEL_ITEM_V}`,
          color: '#8f9bb3',
          colorClick: '#36f'
        }
      ]
    },
  ];
}

