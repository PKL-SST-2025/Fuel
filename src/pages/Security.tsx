import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight, Edit } from 'lucide-solid';
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
import LocationIcon from '../assets/SideBar/Lokasi.png';
import FuelIcon from '../assets/SideBar/Fuel.png';
import Notif from '../assets/SideBar/Notif1.png';
import { A } from '@solidjs/router';
import { createSignal, For, Show } from 'solid-js';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Input } from '../components/ui/input';

const sidebarMenuItems = [
  { id: 1, label: 'Profile', href: '/profile' },
  { id: 2, label: 'Security', href: '/security' },
  { id: 3, label: 'Payment', href: '/payment' }
];

const Security = () => {
    const [selectedService, setSelectedService] = createSignal(0);
    const [selectedBrand, setSelectedBrand] = createSignal('Pertamina');
    const [activeTab, setActiveTab] = createSignal(1);
  
    return (
      <div class="min-h-screen bg-gray-50">
        {/* Header */}
        <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <img src={HouseIcon} alt="logo" class="w-7 h-8" />
                <span class="text-gray-600">/</span>
                <img src={ProfileIcon} alt="logo" class="w-5 h-5" />
              </div>
              <div class="hidden md:flex items-center space-x-2">
                <span class="text-gray-600">Security</span>
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
                <img
                  src={Notif}
                  alt="logo"
                  class="w-5 h-5 cursor-pointer"
                  ref={el => (window as any).notifAnchor = el}
                  onClick={e => {
                    (window as any).notifAnchor = e.currentTarget;
                    (window as any).setNotifOpen(true);
                  }}
                />
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
                <A href="/" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
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
  

          <main class="flex-1 p-6 ml-48">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">Account Setting</h1>
          <div class="flex gap-6">
            <div class="w-64 space-y-2">
              <A href="/profile" style="text-decoration: none;">
                <Button
                  variant={activeTab() === 1 ? 'default' : 'ghost'}
                  class={`w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${
                    activeTab() === 1
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  <span class={`transition-all duration-300 ${activeTab() === 1 ? 'font-semibold' : ''}`}>
                    Profile
                  </span>
                  {activeTab() === 1 && (
                    <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Button>
              </A>

              <A href="/security" style="text-decoration: none;">
                <Button
                  variant={activeTab() === 2 ? 'default' : 'ghost'} 
                  class={`w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${
                    activeTab() === 2
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  <span class={`transition-all duration-300 ${activeTab() === 2 ? 'font-semibold' : ''}`}>
                    Security
                  </span>
                  {activeTab() === 2 && (
                    <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Button>
              </A>

              <A href="/payment" style="text-decoration: none;">
                <Button
                  variant={activeTab() === 3 ? 'default' : 'ghost'}
                  class={`w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${
                    activeTab() === 3
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  <span class={`transition-all duration-300 ${activeTab() === 3 ? 'font-semibold' : ''}`}>
                    Payment
                  </span>
                  {activeTab() === 3 && (
                    <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Button>
              </A>
              {/* Delete Account Button - Terpisah di bawah */}
              <div class="pt-136 border-t border-gray-200">
                <Button
                  variant={activeTab() === 4 ? 'default' : 'ghost'}
                  class={`w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${
                    activeTab() === 4 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105 border-l-4 border-white' 
                      : 'text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:scale-102 hover:shadow-md'
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  <span class={`transition-all duration-300 ${activeTab() === 4 ? 'font-semibold' : '' }`}>
                    Delete Account
                  </span>
                  {activeTab() === 4 && (
                    <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Button>
              </div>
            </div>

            {/* Security Content */}
            <Show when={activeTab() === 2}>
              <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg space-y-6">
                {/* Security Header */}
                <div>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-2">security</h2>
                </div>

                {/* Change Password Section */}
                <Card>
                  <CardHeader>
                    <CardTitle class="text-lg">Change your password</CardTitle>
                    <p class="text-sm text-gray-500">You can update your password every month</p>
                  </CardHeader>
                  <CardContent class="space-y-4">
                    <div>
                      <label for="current-password" class="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <Input id="current-password" type="password" placeholder="" class="w-full max-w-md" />
                    </div>
                    <div>
                      <label for="new-password" class="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <Input id="new-password" type="password" placeholder="" class="w-full max-w-md" />
                      <p class="text-xs text-gray-500 mt-1">
                        Minimum 8 characters. Must include numbers, letters and special character.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* 2FA Section */}
                <Card>
                  <CardHeader>
                    <CardTitle class="text-lg">2-factor authentication</CardTitle>
                    <p class="text-sm text-gray-500">
                      Keep your account more secure by adding another layer of security
                    </p>
                  </CardHeader>
                  <CardContent class="space-y-6">
                    <div>
                      <h4 class="font-medium text-gray-900 mb-2">Enable 2-factor authentication</h4>
                      <p class="text-sm text-gray-500 mb-4">
                        Protects you against password theft by requesting an authentication code via SMS on every login.
                      </p>

                      <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <div class="flex space-x-2 max-w-md">
                          <Input placeholder="+ 62" class="w-20" value="+ 62" />
                          <Input id="phone" type="tel" placeholder="" class="flex-1" />
                          <Button variant="outline">Verify</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Show>
          </div>
          </main>
        </div>
      </div>
    );
  };

  export default Security;
