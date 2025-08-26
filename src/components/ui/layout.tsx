import { Component, JSX } from 'solid-js';
import Sidebar from './sidebar';
import Header from './header';

interface LayoutProps {
  activePage?: 'home' | 'explore' | 'notifications' | 'company' | 'scan' | 'wishlist' | 'profile';
  title: string;
  breadcrumbIcon?: string;
  showLocation?: boolean;
  showBalance?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  return (
    <div class="min-h-screen bg-gray-50">
      <Header 
        title={props.title}
        breadcrumbIcon={props.breadcrumbIcon}
        showLocation={props.showLocation}
        showBalance={props.showBalance}
        showNotifications={props.showNotifications}
        showProfile={props.showProfile}
      />
      
      <div class="flex">
        <Sidebar activePage={props.activePage} />
        
        {/* Main Content */}
        <main class="flex-1 ml-0 md:ml-20 lg:ml-22 p-4 md:p-6 mb-16 md:mb-0">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 