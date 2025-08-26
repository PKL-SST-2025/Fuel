import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight, Edit, Download, Check } from 'lucide-solid';
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
import { createSignal, For, Show, onMount, createEffect } from 'solid-js';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { useNavigate } from '@solidjs/router';
import { useAuth, User } from '../lib/auth';
import api from '../lib/api';

const Profile = () => {
  const [activeTab, setActiveTab] = createSignal(1);
  const [showModal, setShowModal] = createSignal('');
  const [isEditProfile, setIsEditProfile] = createSignal(false);
  const [isEditPersonal, setIsEditPersonal] = createSignal(false);
  const [isEditAddress, setIsEditAddress] = createSignal(false);
  const [profileImg, setProfileImg] = createSignal(ProfileIcon);
  
    const [state, { logout, updateUser }] = useAuth();
  const navigate = useNavigate();

  const user = () => state.user;

  const [formData, setFormData] = createSignal<Partial<User>>({});

  onMount(() => {
    if (!state.isAuthenticated && !state.isLoading) {
      navigate('/login');
    }
    if (state.user) {
        setFormData(state.user);
    }
  });

  createEffect(() => {
    if (!state.isAuthenticated && !state.isLoading) {
        navigate('/login');
    }
    if(state.user) {
        setFormData(state.user);
    }
  });

  const handleInputChange = (field: keyof User, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async (section: 'profile' | 'personal' | 'address') => {
    try {
      const updatedUser = await updateUser(formData());
      if (updatedUser) {
        setFormData(updatedUser);
      }
      if (section === 'profile') setIsEditProfile(false);
      if (section === 'personal') setIsEditPersonal(false);
      if (section === 'address') setIsEditAddress(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  // Untuk handle upload gambar profil
  const handleProfileImgChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target && typeof ev.target.result === 'string') {
          setProfileImg(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
              <span class="text-gray-600">Account</span>
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
          <img src={brandIcon} alt="logo" class="w-13 h-15 mx-auto" />
          <div class="flex flex-col items-center space-y-6 py-6 pt-24">
            <a href="/dashboard" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={homeIcon} alt="logo" class="w-5 h-5" />
            </a>
            <a href="/explore" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={ExploreIcon} alt="logo" class="w-7 h-7" />
            </a>
            <a href="/notifications" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={NotificationIcon} alt="logo" class="w-7 h-7" />
            </a>
            <a href="/company" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={CompanyIcon} alt="logo" class="w-7 h-7" />
            </a>
            <a href="/scan" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={ScanIcon} alt="logo" class="w-7 h-7" />
            </a>
            <a href="/wishlist" class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={WishlistIcon} alt="logo" class="w-7 h-7" />
            </a>
          </div>
          <div class="flex flex-col items-center space-y-2 pt-34">
            <a class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center" onClick={() => setActiveTab(1)} style={{ cursor: 'pointer', background: activeTab() === 1 ? '#e0e7ff' : 'transparent' }}>
              <img src={ProfileIcon} alt="logo" class="w-8 h-8" />
            </a>
            <a href="#" onClick={() => logout()} class="w-14 h-14 bg-transparent rounded-full flex items-center justify-center">
              <img src={LogoutIcon} alt="logo" class="w-6 h-6" />
            </a>
          </div>
        </aside>

        <main class="flex-1 p-6 ml-48">
          <h1 class="text-2xl font-semibold text-gray-900 mb-6">Account Setting</h1>
          <div class="flex gap-6">
            <div class="w-64 space-y-2">
              <button 
                class={`p-4 rounded-lg w-full  transition-all duration-300 ease-in-out relative overflow-hidden ${activeTab() === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white' : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'}`}
                onClick={() => setActiveTab(1)}
              >
                <span class={`transition-all duration-300 ${activeTab() === 1 ? 'font-semibold' : ''}`}>Profile</span>
                {activeTab() === 1 && <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              </button>
              <button
                class={`p-4 rounded-lg w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${activeTab() === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white' : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'}`}
                onClick={() => setActiveTab(2)}
              >
                <span class={`transition-all duration-300 ${activeTab() === 2 ? 'font-semibold' : ''}`}>Security</span>
                {activeTab() === 2 && <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              </button>
              <button
                class={`p-4 rounded-lg w-full justify-start transition-all duration-300 ease-in-out relative overflow-hidden ${activeTab() === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105 border-l-4 border-white' : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-102 hover:shadow-md'}`}
                onClick={() => setActiveTab(3)}
              >
                <span class={`transition-all duration-300 ${activeTab() === 3 ? 'font-semibold' : ''}`}>Payment</span>
                {activeTab() === 3 && <div class="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              </button>
              <div class="pt-124 border-t border-gray-200">
                <Button
                  variant={activeTab() === 4 ? 'default' : 'ghost'}
                  class={`w-full transition-all duration-300 ease-in-out relative overflow-hidden ${
                    activeTab() === 4 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105 border-l-4 border-white' 
                      : 'text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:scale-102 hover:shadow-md'
                  }`}
                  onClick={() => {
                    setActiveTab(4);
                    setShowModal('hapus');
                  }}
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
            <div class="flex-1 space-y-6 mr-20">
              {/* Profile Tab */}
              <Show when={activeTab() === 1}>
                {/* Profile Header */}
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between">
                    <CardTitle class="text-xl">My Profile</CardTitle>
                    <Show when={!isEditProfile()} fallback={
                      <Button variant="default" size="sm" onClick={() => handleSave('profile')} class="bg-blue-600 hover:bg-blue-700 text-white">
                        <Check class="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    }>
                      <Button variant="outline" size="sm" onClick={() => setIsEditProfile(true)}>
                        <Edit class="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </Show>
                  </CardHeader>
                  <CardContent>
                    <div class="flex items-center space-x-4">
                      <Avatar class="w-16 h-16">
                        <img src={profileImg()} alt="logo" class="w-16 h-16 object-cover rounded-full" />
                        <AvatarFallback class="bg-gray-800 text-white text-lg">GS</AvatarFallback>
                      </Avatar>
                      <Show when={isEditProfile()}>
                        <input type="file" accept="image/*" class="mt-2" onChange={handleProfileImgChange} />
                      </Show>
                      <div>
                        <Show when={user()} fallback={<p>Loading user...</p>}>
                        <Show when={!isEditProfile()} fallback={
                          <input class="w-full border rounded px-2 py-1 text-lg font-semibold" value={formData().nama_lengkap || ''} onInput={e => handleInputChange('nama_lengkap', e.target.value)} />
                        }>
                          <h3 class="text-lg font-semibold text-gray-900">{user()?.nama_lengkap}</h3>
                        </Show>
                        <p class="text-sm text-gray-600">{user()?.role}</p>
                        <p class="text-sm text-gray-500">Purwokerto, Indonesia</p>
                      </Show>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Personal Information */}
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between">
                    <CardTitle class="text-lg">Personal Information</CardTitle>
                    <Show when={!isEditPersonal()} fallback={
                      <Button variant="default" size="sm" onClick={() => handleSave('personal')} class="bg-blue-600 hover:bg-blue-700 text-white">
                        <Check class="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    }>
                      <Button variant="outline" size="sm" onClick={() => setIsEditPersonal(true)}>
                        <Edit class="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </Show>
                  </CardHeader>
                  <CardContent class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="text-sm font-medium text-gray-500">First Name</label>
                        <Show when={!isEditPersonal()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().first_name || ''} onInput={e => handleInputChange('first_name', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.first_name || ''}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">Last Name</label>
                        <Show when={!isEditPersonal()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().last_name || ''} onInput={e => handleInputChange('last_name', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.last_name || ''}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">Email Address</label>
                        <Show when={!isEditPersonal()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().email || ''} onInput={e => handleInputChange('email', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.email}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">Phone</label>
                        <Show when={!isEditPersonal()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().no_hp || ''} onInput={e => handleInputChange('no_hp', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.no_hp || 'Not set'}</p>
                        </Show>
                      </div>
                    </div>
                    <div>
                      <label class="text-sm font-medium text-gray-500">Bio</label>
                      <Show when={!isEditPersonal()} fallback={
                        <input class="w-full border rounded px-2 py-1" value={formData().role || ''} onInput={e => handleInputChange('role', e.target.value)} />
                      }>
                        <p class="text-gray-900 mt-1">{user()?.role}</p>
                      </Show>
                    </div>
                  </CardContent>
                </Card>
                {/* Address */}
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between">
                    <CardTitle class="text-lg">Address</CardTitle>
                    <Show when={!isEditAddress()} fallback={
                      <Button variant="default" size="sm" onClick={() => handleSave('address')} class="bg-blue-600 hover:bg-blue-700 text-white">
                        <Check class="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    }>
                      <Button variant="outline" size="sm" onClick={() => setIsEditAddress(true)}>
                        <Edit class="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </Show>
                  </CardHeader>
                  <CardContent class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="text-sm font-medium text-gray-500">Country</label>
                        <Show when={!isEditAddress()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().country || ''} onInput={e => handleInputChange('country', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.country || 'Not set'}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">City / State</label>
                        <Show when={!isEditAddress()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().city_state || ''} onInput={e => handleInputChange('city_state', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.city_state || 'Not set'}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">Kode Pos</label>
                        <Show when={!isEditAddress()} fallback={
                          <input class="w-full border rounded px-2 py-1" value={formData().kode_pos || ''} onInput={e => handleInputChange('kode_pos', e.target.value)} />
                        }>
                          <p class="text-gray-900 mt-1">{user()?.kode_pos || 'Not set'}</p>
                        </Show>
                      </div>
                      <div>
                        <label class="text-sm font-medium text-gray-500">TAX ID</label>
                        <Show when={!isEditAddress()} fallback={
                          <input class="w-full border rounded px-2 py-1" value="-" />
                        }>
                          <p class="text-gray-900 mt-1">-</p>
                        </Show>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Show>
              {/* Security Tab */}
              <Show when={activeTab() === 2}>
                <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg space-y-6">
                  <div>
                    <h2 class="text-2xl font-semibold text-gray-900 mb-2">Security</h2>
                  </div>
                  {/* Change Password Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle class="text-lg">Change your password</CardTitle>
                      <p class="text-sm text-gray-500">You can update your password every month</p>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <div>
                        <label for="current-password" class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <Input id="current-password" type="password" placeholder="" class="w-full max-w-md" />
                      </div>
                      <div>
                        <label for="new-password" class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <Input id="new-password" type="password" placeholder="" class="w-full max-w-md" />
                        <p class="text-xs text-gray-500 mt-1">Minimum 8 characters. Must include numbers, letters and special character.</p>
                      </div>
                    </CardContent>
                  </Card>
                  {/* 2FA Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle class="text-lg">2-factor authentication</CardTitle>
                      <p class="text-sm text-gray-500">Keep your account more secure by adding another layer of security</p>
                    </CardHeader>
                    <CardContent class="space-y-6">
                      <div>
                        <h4 class="font-medium text-gray-900 mb-2">Enable 2-factor authentication</h4>
                        <p class="text-sm text-gray-500 mb-4">Protects you against password theft by requesting an authentication code via SMS on every login.</p>
                        <div>
                          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
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
              {/* Payment Tab */}
              <Show when={activeTab() === 3}>
                <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg space-y-6">
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
              {/* Delete Account Tab */}
              <Show when={activeTab() === 4}>
                <div class="flex-1 bg-white rounded-2xl p-6 shadow-lg space-y-6">
                  <div>
                    <h2 class="text-2xl font-semibold text-gray-900 mb-6">Delete Account</h2>
                  </div>
                  <Card class="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle class="text-lg text-red-800">⚠️ Peringatan Penting</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p class="text-red-700">
                        Menghapus akun adalah tindakan yang tidak dapat dibatalkan. Setelah akun dihapus:
                      </p>
                      <ul class="list-disc list-inside space-y-2 text-red-700 ml-4">
                        <li>Semua data profil Anda akan dihapus secara permanen</li>
                        <li>Riwayat transaksi dan pembayaran akan hilang</li>
                        <li>Saldo yang tersisa tidak dapat dikembalikan</li>
                        <li>Akun tidak dapat dipulihkan kembali</li>
                      </ul>
                      <div class="mt-6">
                        <Button 
                          class="w-full bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => setShowModal('hapus')}
                        >
                          Hapus Akun Saya
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Show>
              {/* Modal Popups */}
              {showModal() === 'hapus' && (
                <div class="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
                  <div class="bg-white rounded-xl shadow-lg p-8 max-w-xs w-full flex flex-col items-center">
                    <div class="font-bold text-lg mb-4 text-center">Anda yakin ingin menghapus akun ini?</div>
                    <div class="flex gap-4 mt-2">
                      <button class="px-6 py-2 rounded bg-[#ff5c5c] text-white font-semibold hover:bg-[#c0392b] transition" onClick={() => { setShowModal(''); navigate('/'); }}>Ya</button>
                      <button class="px-6 py-2 rounded bg-gray-200 font-semibold hover:bg-gray-300 transition" onClick={() => setShowModal('')}>Tidak</button>
                    </div>
                  </div>
                </div>
                )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
