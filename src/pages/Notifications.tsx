import { For } from 'solid-js';
import { Search, Bell, MapPin, User, Home, ChevronDown } from 'lucide-solid';
import brandIcon from '../assets/brandicon.png';
import homeIcon from '../assets/SideBar/Home.png';
import ExploreIcon from '../assets/SideBar/Explor.png';
import CompanyIcon from '../assets/SideBar/Company.png';
import ScanIcon from '../assets/SideBar/Scan.png';
import WishlistIcon from '../assets/SideBar/Wishlist.png';
import ProfileIcon from '../assets/SideBar/Profil.png';
import LogoutIcon from '../assets/SideBar/exit.png';
import HouseIcon from '../assets/SideBar/House.png';
import LocationIcon from '../assets/SideBar/Lokasi.png';
import FuelIcon from '../assets/SideBar/Fuel.png';
import Notif from '../assets/SideBar/Notif1.png';
import Notifbiru from '../assets/SideBar/Notifbiru.png';
import NotifAktif from '../assets/SideBar/NotifAktif.png';
import Shell from '../assets/Notif/LogoS.png';
import Vivo from '../assets/Notif/LogoV.png';
import F from '../assets/Notif/F.png';

import { A } from '@solidjs/router';
// Define a type for notifications
type Notification = {
  id: number;
  company: string;
  time: string;
  title: string;
  logo: string;
  bgColor: string;
};

const todayNotifications: Notification[] = [
  {
    id: 1,
    company: "Shell",
    time: "1h ago",
    title: "You have a 25% promo on vpower fuel",
    logo: Shell,
    bgColor: "bg-yellow-50"
  },
  {
    id: 2,
    company: "Fuel Payment Success",
    time: "5h ago",
    title: "Your purchase of 10L Pertalite at Pertamina 34.169.02 has been successfully completed.",
    logo: Shell,
    bgColor: "bg-yellow-50"
  },
  {
    id: 3,
    company: "Vivo Fuel Price Increased",
    time: "21h ago",
    title: "The price of Vivo Revvo 92 has increased by Rp 200/L. Effective starting today.",
    logo: Vivo,
    bgColor: "bg-blue-50"
  }
];

const yesterdayNotifications: Notification[] = [
  {
    id: 4,
    company: "Fuel Usage Last Week: 42 Liters",
    time: "",
    title: "You refueled a total of 42 liters last week. Track your fuel consumption trends in the dashboard.",
    logo: F,
    bgColor: "bg-red-50"
  }
];

const Notifications = () => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <img src={HouseIcon} alt="logo" class="w-7 h-8" />
              <span class="text-gray-600">/</span>
              <img src={Notifbiru} alt="logo" class="w-5 h-5" />
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <span class="text-gray-600">Notifications</span>
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
              <A href="/notifications" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
                <img src={NotifAktif} alt="logo" class="w-7 h-7" />
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

        <main class="flex-1 ml-16 p-6">
          <div class="max-w-7xl mx-auto">
            <div class="mb-8">
              <div class="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  class="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white shadow-sm"
                />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <Search class="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div class="mb-8">
              <h1 class="text-2xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p class="text-gray-600">You have <span class="text-blue-600 font-semibold">6</span> Notifications to go through</p>
            </div>

            <div class="mb-8">
              <h2 class="text-lg font-semibold text-gray-900 mb-6">Today</h2>
              <div class="space-y-4">
                <For each={todayNotifications}>{notification => (
                  <div class={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`}>
                    <div class="flex items-start justify-between">
                      <div class="flex items-start space-x-4">
                        <div class={`w-12 h-12 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <img src={notification.logo} alt={notification.company} class="w-8 h-8 object-contain" />
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-center space-x-2 mb-1">
                            <h3 class="font-semibold text-gray-900 truncate">{notification.company}</h3>
                            {notification.time && <span class="text-sm text-gray-400 flex-shrink-0">{notification.time}</span>}
                          </div>
                          <p class="text-gray-600 text-sm leading-relaxed">{notification.title}</p>
                        </div>
                      </div>
                      <button class="text-blue-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm">View</button>
                    </div>
                  </div>
                )}</For>
              </div>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-gray-900 mb-6">Yesterday</h2>
              <div class="space-y-4">
                <For each={yesterdayNotifications}>{notification => (
                  <div class={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`}>
                    <div class="flex items-start justify-between">
                      <div class="flex items-start space-x-4">
                        <div class={`w-12 h-12 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <img src={notification.logo} alt={notification.company} class="w-8 h-8 object-contain" />
                        </div>
                        <div class="flex-1 min-w-0">
                          <h3 class="font-semibold text-gray-900 mb-1">{notification.company}</h3>
                          <p class="text-gray-600 text-sm leading-relaxed">{notification.title}</p>
                        </div>
                      </div>
                      <button class="text-blue-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm">View</button>
                    </div>
                  </div>
                )}</For>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
