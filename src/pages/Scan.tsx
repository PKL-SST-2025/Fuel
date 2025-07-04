import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight, } from 'lucide-solid';
import brandIcon from '../assets/brandicon.png';
import homeIcon from '../assets/SideBar/Home.png';
import ScanAktif from '../assets/SideBar/ScanAktif.png';
import ExploreIcon from '../assets/SideBar/Explor.png';
import NotificationIcon from '../assets/SideBar/Notif.png';
import CompanyIcon from '../assets/SideBar/Company.png';
import ScanIcon from '../assets/SideBar/Scan.png';
import WishlistIcon from '../assets/SideBar/Wishlist.png';
import ProfileIcon from '../assets/SideBar/Profil.png';
import LogoutIcon from '../assets/SideBar/exit.png';
import HouseIcon from '../assets/SideBar/House.png';
import Scanbiru from '../assets/SideBar/Scanbiru.png';
import LocationIcon from '../assets/SideBar/Lokasi.png';
import FuelIcon from '../assets/SideBar/Fuel.png';
import Notif from '../assets/SideBar/Notif1.png';
import { createSignal } from 'solid-js';
import { A } from '@solidjs/router';

const Scan = () => {
  const [selectedService, setSelectedService] = createSignal(0);
  const [selectedBrand, setSelectedBrand] = createSignal('Pertamina');

  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <img src={HouseIcon} alt="logo" class="w-7 h-8" />
              <span class="text-gray-600">/</span>
              <img src={Scanbiru} alt="logo" class="w-5 h-5" />
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <span class="text-gray-600">Scan</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
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

          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-34 bg-[#daeaff] px-3 py-3 rounded-lg">
              <div class="flex flex-row items-center space-x-2">
                <img src={FuelIcon} alt="logo" class="w-4 h-4" />
                <span class="text-sm">Saldo</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="font-semibold">₹98.95</span>
              </div>
            </div>
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src={Notif} alt="logo" class="w-5 h-5" />
            </div>
            <img src={ProfileIcon} alt="logo" class="w-10 h-10" />
          </div>
        </div>
      </header>

      <div class="flex">
        {/* Sidebar */} 
        <aside class="w-22 bg-white shadow-sm h-screen fixed left-0 top-0 pt-8">
          <img src={brandIcon} alt="logo" class="w-13 h-15 mx-auto"  />
          <div class="flex flex-col items-center space-y-6 py-6 pt-24">
              <A href="/dashboard" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
                <img src={homeIcon} alt="logo" class="w-5 h-5" />
              </A>
              <A href="/explore" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
                <img src={ExploreIcon} alt="logo" class="w-7 h-7" />
              </A>
              <A href="/notifications" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
                <img src={NotificationIcon} alt="logo" class="w-7 h-7" />
              </A>
              <A href="/company" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
                <img src={CompanyIcon} alt="logo" class="w-7 h-7" />
              </A>
              <A href="/scan" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
                <img src={ScanAktif} alt="logo" class="w-7 h-7" />
              </A>
              <A href="/wishlist" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
                <img src={WishlistIcon} alt="logo" class="w-7 h-7" />
              </A>
          </div>
          <div class="flex flex-col items-center space-y-2 pt-34">
            <A href="/profile" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={ProfileIcon} alt="logo" class="w-8 h-8" />
            </A>
            <A href="/" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={LogoutIcon} alt="logo" class="w-6 h-6" />
            </A>
          </div>
        </aside>

        <div class="m-auto py-72 space-y-2">
            <h1 class="text-5xl text-gray-600 opacity-50 text-center">404 Not Found</h1>
            <p class="text-gray-500 opacity-50 text-center">The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default Scan;