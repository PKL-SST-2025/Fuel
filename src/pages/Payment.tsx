import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight, Edit, Download } from 'lucide-solid';
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
import { Badge } from '../components/ui/badge';

const sidebarMenuItems = [
  { id: 1, label: 'Profile' },
  { id: 2, label: 'Security' },
  { id: 3, label: 'Payment' }
];

const Payment = () => {
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
                <span class="text-gray-600">Payment</span>
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

            <Show when={activeTab() === 3}>
      <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg space-y-6">
        {/* Payment Header */}
        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Payment</h2>
        </div>

        {/* Payment Statistics Cards */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card class="bg-blue-50 border-blue-100">
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium text-blue-700">Total Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-3xl font-bold text-blue-900 mb-1">$460.46</div>
              <p class="text-sm text-green-600">+32.70% from last month</p>
            </CardContent>
          </Card>

          <Card class="bg-pink-50 border-pink-100">
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium text-pink-700">Successful Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-3xl font-bold text-pink-900 mb-1">125</div>
              <p class="text-sm text-green-600">+3 from yesterday</p>
            </CardContent>
          </Card>

          <Card class="bg-green-50 border-green-100">
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium text-green-700">Failed Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-3xl font-bold text-green-900 mb-1">5</div>
              <p class="text-sm text-red-600">-1 from yesterday</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment History */}
        <Card>
          <CardHeader class="flex flex-row items-center justify-between">
            <CardTitle class="text-lg">Payment history</CardTitle>
            <Button class="bg-blue-500 hover:bg-blue-600">
              <Download class="w-4 h-4 mr-2" />
              Download
            </Button>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left py-3 px-4 font-medium text-gray-700">
                      <input type="checkbox" class="rounded border-gray-300" />
                    </th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">Invoice number ↕</th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">Amount ↕</th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">SPBU ↕</th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">Date ↕</th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">Status ↕</th>
                    <th class="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <For each={[{ status: "Success" }, { status: "Success" }, { status: "Failed" }, { status: "Success" }, { status: "Failed" }]}> 
                    {(payment, index) => (
                      <tr class="border-b border-gray-100 hover:bg-gray-50">
                        <td class="py-3 px-4">
                          <input type="checkbox" class="rounded border-gray-300" />
                        </td>
                        <td class="py-3 px-4 text-gray-900">INV-23-07-009</td>
                        <td class="py-3 px-4 text-gray-900">$100</td>
                        <td class="py-3 px-4 text-gray-900">Shell</td>
                        <td class="py-3 px-4 text-gray-600">
                          <div>23-07-2024</div>
                          <div class="text-sm">4:12 PM</div>
                        </td>
                        <td class="py-3 px-4">
                          <Badge
                            variant={payment.status === "Success" ? "default" : "destructive"}
                            class={
                              payment.status === "Success"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {payment.status === "Success" ? "Success" : "Failed"}
                          </Badge>
                        </td>
                        <td class="py-3 px-4">
                          <Button variant="ghost" size="sm" class="h-8 w-8 p-0">
                            <Download class="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
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


export default Payment;