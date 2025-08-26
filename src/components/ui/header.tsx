import { ChevronDown } from 'lucide-solid';
import HouseIcon from '../../assets/SideBar/House.png';
import LocationIcon from '../../assets/SideBar/Lokasi.png';
import FuelIcon from '../../assets/SideBar/Fuel.png';
import Notif from '../../assets/SideBar/Notif1.png';
import ProfileIcon from '../../assets/SideBar/Profil.png';

interface HeaderProps {
  title: string;
  breadcrumbIcon?: string;
  showLocation?: boolean;
  showBalance?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
}

const Header = (props: HeaderProps) => {
  const { 
    title, 
    breadcrumbIcon, 
    showLocation = true, 
    showBalance = true, 
    showNotifications = true, 
    showProfile = true 
  } = props;

  return (
    <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] p-4 md:p-6 lg:p-10">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <img src={HouseIcon} alt="logo" class="w-5 h-6 md:w-7 md:h-8" />
            <span class="text-gray-600 text-sm md:text-base">/</span>
            {breadcrumbIcon && (
              <img src={breadcrumbIcon} alt="logo" class="w-5 h-5 md:w-7 md:h-7" />
            )}
          </div>
          <div class="hidden md:flex items-center space-x-2">
            <span class="text-gray-600">{title}</span>
          </div>
        </div>
        
        {/* Location - Hidden on mobile */}
        {showLocation && (
          <div class="hidden md:flex items-center space-x-4">
            <div class="flex flex-col items-center space-x-2 text-gray-600 text-center">
              <div class="flex items-center space-x-2">
                <span class="text-xs opacity-50">My Location</span>
                <ChevronDown class="w-4 h-4 opacity-50" />
              </div>
              <div class="flex items-center space-x-2">
                <img src={LocationIcon} alt="logo" class="w-4 h-4" />
                <span class="text-black font-semibold">Jl. Sudagaran III ....</span>
              </div>
            </div>
          </div>
        )}

        <div class="flex items-center space-x-2 md:space-x-4">
          {showBalance && (
            <div class="flex items-center space-x-2 md:space-x-4 bg-[#daeaff] px-2 py-2 md:px-3 md:py-3 rounded-lg">
              <div class="flex flex-row items-center space-x-1 md:space-x-2">
                <img src={FuelIcon} alt="logo" class="w-3 h-3 md:w-4 md:h-4" />
                <span class="text-xs md:text-sm">Saldo</span>
              </div>
              <div class="flex items-center space-x-1 md:space-x-2">
                <span class="font-semibold text-sm md:text-base">₹98.95</span>
              </div>
            </div>
          )}
          {showNotifications && (
            <div class="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
              <img
                src={Notif}
                alt="logo"
                class="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                ref={el => (window as any).notifAnchor = el}
                onClick={e => {
                  (window as any).notifAnchor = e.currentTarget;
                  (window as any).setNotifOpen(true);
                }}
              />
            </div>
          )}
          {showProfile && (
            <img src={ProfileIcon} alt="logo" class="w-8 h-8 md:w-10 md:h-10" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 