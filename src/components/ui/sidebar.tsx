import { A } from '@solidjs/router';
import brandIcon from '../../assets/brandicon.png';
import homeIcon from '../../assets/SideBar/Home.png';
import HomeAktif from '../../assets/SideBar/HomeAktif.png';
import ExploreIcon from '../../assets/SideBar/Explor.png';
import ExplorAktif from '../../assets/SideBar/ExplorAktif.png';
import NotificationIcon from '../../assets/SideBar/Notif.png';
import CompanyIcon from '../../assets/SideBar/Company.png';
import ScanIcon from '../../assets/SideBar/Scan.png';
import WishlistIcon from '../../assets/SideBar/Wishlist.png';
import ProfileIcon from '../../assets/SideBar/Profil.png';
import LogoutIcon from '../../assets/SideBar/exit.png';

interface SidebarProps {
  activePage?: 'home' | 'explore' | 'notifications' | 'company' | 'scan' | 'wishlist' | 'profile';
}

const Sidebar = (props: SidebarProps) => {
  const { activePage = 'home' } = props;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside class="w-20 lg:w-22 bg-white shadow-sm h-screen fixed left-0 top-0 pt-8 hidden md:block z-40">
        <img src={brandIcon} alt="logo" class="w-10 h-12 md:w-13 md:h-15 mx-auto" />
        <div class="flex flex-col items-center space-y-4 md:space-y-6 py-4 md:py-6 pt-16 md:pt-24">
          <A 
            href="/dashboard" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'home' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={activePage === 'home' ? HomeAktif : homeIcon} alt="logo" class="w-4 h-4 md:w-5 md:h-5" />
          </A>
          <A 
            href="/explore" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'explore' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={activePage === 'explore' ? ExplorAktif : ExploreIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
          </A>
          <A 
            href="/notifications" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'notifications' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={NotificationIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
          </A>
          <A 
            href="/company" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'company' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={CompanyIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
          </A>
          <A 
            href="/scan" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'scan' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={ScanIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
          </A>
          <A 
            href="/wishlist" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'wishlist' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={WishlistIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
          </A>
        </div>
        <div class="flex flex-col items-center space-y-2 pt-24 md:pt-34">
          <A 
            href="/profile" 
            class={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
              activePage === 'profile' 
                ? 'bg-[#2581fc] hover:scale-105 shadow-lg' 
                : 'bg-transparent hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <img src={ProfileIcon} alt="logo" class="w-6 h-6 md:w-8 md:h-8" />
          </A>
          <A 
            href="/" 
            class="w-10 h-10 md:w-14 md:h-14 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          >
            <img src={LogoutIcon} alt="logo" class="w-4 h-4 md:w-6 md:h-6" />
          </A>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 block md:hidden">
        <div class="flex justify-around items-center py-2">
          <A href="/dashboard" class="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div class={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              activePage === 'home' ? 'bg-[#2581fc] shadow-lg' : 'bg-transparent hover:bg-gray-100'
            }`}>
              <img src={activePage === 'home' ? HomeAktif : homeIcon} alt="logo" class="w-5 h-5" />
            </div>
            <span class={`text-xs ${activePage === 'home' ? 'text-gray-600 font-medium' : 'text-gray-600'}`}>Home</span>
          </A>
          <A href="/explore" class="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div class={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              activePage === 'explore' ? 'bg-[#2581fc] shadow-lg' : 'bg-transparent hover:bg-gray-100'
            }`}>
              <img src={activePage === 'explore' ? ExplorAktif : ExploreIcon} alt="logo" class="w-5 h-5" />
            </div>
            <span class={`text-xs ${activePage === 'explore' ? 'text-gray-600 font-medium' : 'text-gray-600'}`}>Explore</span>
          </A>
          <A href="/notifications" class="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div class={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              activePage === 'notifications' ? 'bg-[#2581fc] shadow-lg' : 'bg-transparent hover:bg-gray-100'
            }`}>
              <img src={NotificationIcon} alt="logo" class="w-5 h-5" />
            </div>
            <span class={`text-xs ${activePage === 'notifications' ? 'text-gray-600 font-medium' : 'text-gray-600'}`}>Notif</span>
          </A>
          <A href="/scan" class="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div class={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              activePage === 'scan' ? 'bg-[#2581fc] shadow-lg' : 'bg-transparent hover:bg-gray-100'
            }`}>
              <img src={ScanIcon} alt="logo" class="w-5 h-5" />
            </div>
            <span class={`text-xs ${activePage === 'scan' ? 'text-gray-600 font-medium' : 'text-gray-600'}`}>Scan</span>
          </A>
          <A href="/profile" class="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div class={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              activePage === 'profile' ? 'bg-[#2581fc] shadow-lg' : 'bg-transparent hover:bg-gray-100'
            }`}>
              <img src={ProfileIcon} alt="logo" class="w-5 h-5" />
            </div>
            <span class={`text-xs ${activePage === 'profile' ? 'text-gray-600 font-medium' : 'text-gray-600'}`}>Profile</span>
          </A>
        </div>
      </nav>
    </>
  );
};

export default Sidebar; 