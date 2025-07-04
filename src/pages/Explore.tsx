import { For } from 'solid-js';
import { Search, MapPin, Bell, User, Filter, ChevronDown } from 'lucide-solid';
import { A } from '@solidjs/router';
import brandIcon from '../assets/brandicon.png';
import homeIcon from '../assets/SideBar/Home.png';
import ExploreIcon from '../assets/SideBar/Explor.png';
import NotificationIcon from '../assets/SideBar/Notif.png';
import CompanyIcon from '../assets/SideBar/Company.png';
import ScanIcon from '../assets/SideBar/Scan.png';
import WishlistIcon from '../assets/SideBar/Wishlist.png';
import ProfileIcon from '../assets/SideBar/Profil.png';
import LogoutIcon from '../assets/SideBar/exit.png';
import HouseIcon from '../assets/SideBar/House.png';
import Homebiru from '../assets/SideBar/Homebiru.png';
import LocationIcon from '../assets/SideBar/Lokasi.png';
import FuelIcon from '../assets/SideBar/Fuel.png';
import Notif from '../assets/SideBar/Notif1.png';
import Explorbiru from '../assets/SideBar/Explorbiru.png';
import ExplorAktif from '../assets/SideBar/ExplorAktif.png';

const Explore = () => {
  return (
    <div class="min-h-screen bg-gray-50">
    {/* Header */}
    <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <img src={HouseIcon} alt="logo" class="w-7 h-8" />
            <span class="text-gray-600">/</span>
            <img src={Explorbiru} alt="logo" class="w-7 h-7" />
          </div>
          <div class="hidden md:flex items-center space-x-2">
            <span class="text-gray-600">Explore</span>
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
            <A href="/explore" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
              <img src={ExplorAktif} alt="logo" class="w-7 h-7" />
            </A>
            <A href="/notifications" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={NotificationIcon} alt="logo" class="w-7 h-7" />
            </A>
            <A href="/company" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={CompanyIcon} alt="logo" class="w-7 h-7" />
            </A>
            <A href="/scan" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={ScanIcon} alt="logo" class="w-7 h-7" />
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
        {/* Main Content */}
        <main class="flex-1 ml-16 p-6">
          <div class="max-w-7xl mx-auto">
            {/* Search Section */}
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div class="flex items-center space-x-4 mb-6">
                <div class="flex-1 relative">
                  <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Select or find a fuel station near me..."
                    class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                  />
                </div>
                <button class="p-3 bg-blue-50 rounded-xl hover:bg-blue-100">
                  <Filter class="w-5 h-5 text-blue-600" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div class="flex space-x-2 flex-wrap">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  ✓ All
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Pertamina
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Shell
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Vivo
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Mobil
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  AB
                </button>
              </div>
            </div>

            {/* Grid of Cards - 3x3 Layout */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <For each={Array.from({ length: 9 })}>
                {(_, index) => (
                  <div class="bg-white rounded-2xl shadow-sm p-6 min-h-[300px] border border-gray-100">
                    <div class="w-full h-40 bg-gray-100 rounded-xl mb-4"></div>
                    <div class="space-y-3">
                      <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Explore;
