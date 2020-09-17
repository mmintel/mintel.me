import {
  Navigation,
  NavigationName,
} from '@/lib/core/features/navigation/domain';
import { NavigationGateway } from '@/lib/core/features/navigation/gateways';
import {
  ContentfulCollection,
  ContentfulGateway,
  ContentfulRecord,
} from '@/lib/implementations/gateways';
import { NavigationQuery } from './queries/NavigationQuery';

export interface ContentfulNavigationResponse {
  navigationCollection: ContentfulCollection<ContentfulNavigation>;
}

export interface ContentfulNavigation extends ContentfulRecord {
  title: string;
  name: string;
  itemsCollection: ContentfulCollection<ContentfulNavigationItem>;
}

export interface ContentfulNavigationItem extends ContentfulRecord {
  title: string;
  url: string;
  internal: boolean;
  page: {
    slug: string;
  };
}

export class ContentfulNavigationGateway extends ContentfulGateway
  implements NavigationGateway {
  async getNavigation(name: NavigationName): Promise<Navigation> {
    const response = await this.request<ContentfulNavigationResponse>(
      NavigationQuery,
      {
        name,
      },
    );

    if (!response) {
      throw new Error('No navigation found.');
    }

    const rawNavigation = response.navigationCollection.items[0];
    const navigation = new Navigation({
      id: rawNavigation.sys.id,
      title: rawNavigation.title,
      name: rawNavigation.name,
      items: rawNavigation.itemsCollection.items.map(rawNavigationItem => ({
        id: rawNavigationItem.sys.id,
        title: rawNavigationItem.title,
        internal: rawNavigationItem.internal,
        url: rawNavigationItem.url,
        page: {
          slug: rawNavigationItem.page.slug,
        },
      })),
    });

    return navigation;
  }
}