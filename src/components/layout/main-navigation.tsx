import React from 'react';
import { InternalLink } from '../elements/internal-link';
import { Navigation } from '@/core/features/navigation/domain';

interface MainNavigationProps {
  navigation: Navigation;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ navigation }) => (
  <div className="p-2">
    <nav className="list-none flex -mx-2">
      {navigation.items.map((item) => (
        <li key={item.id} className="flex-auto px-2">
          {item.page && item.internal && (
            <InternalLink target={item.page}>
              <a>{item.title}</a>
            </InternalLink>
          )}
        </li>
      ))}
    </nav>
  </div>
);

export default MainNavigation;
