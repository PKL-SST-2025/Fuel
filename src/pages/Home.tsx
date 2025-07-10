import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight } from 'lucide-solid';
import brandIcon from '../assets/brandicon.png';
import homeIcon from '../assets/SideBar/Home.png';
import HomeAktif from '../assets/SideBar/HomeAktif.png';
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
import BanIcon from '../assets/Home/Ban.png';
import OliIcon from '../assets/Home/Oli.png';
import TowIcon from '../assets/Home/Tow.png';
import berkoh from '../assets/Home/PerBerkoh.png';
import Pertamina from '../assets/Home/LogoP.png';
import Shell from '../assets/Home/LogoS.png';
import BP from '../assets/Home/BP.png';
import { createSignal, onCleanup } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';

const Dashboard = () => {
  const [selectedService, setSelectedService] = createSignal(0);
  const [selectedBrand, setSelectedBrand] = createSignal('Pertamina');
  const [showComparison, setShowComparison] = createSignal(false);
  const navigate = useNavigate();

  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <img src={HouseIcon} alt="logo" class="w-7 h-8" />
              <span class="text-gray-600">/</span>
              <img src={Homebiru} alt="logo" class="w-5 h-5" />
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <span class="text-gray-600">Dashboard</span>
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
              <A href="/dashboard" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
                <img src={HomeAktif} alt="logo" class="w-5 h-5" />
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
                    class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button class="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
                  <Filter class="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div class="flex space-x-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  ✓ SPBU
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Pertamina
                </button>
                <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200">
                  Shell
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div class="lg:col-span-2 space-y-6">
                {/* Our Service Section */}
                <div class="bg-white rounded-2xl shadow-sm p-6">
                  <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-semibold text-gray-900">Our Service</h2>
                    <MoreHorizontal class="w-5 h-5 text-gray-400" />
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Fuel', 'Towing', 'Puncture', 'Oil'].map((label, idx) => (
                      <label class={`p-8 text-center rounded-2xl cursor-pointer transition border-2 ${selectedService() === idx ? 'bg-[#2581fc] text-white border-[#2581fc]' : 'bg-gray-200 text-gray-600 border-transparent'}`}> 
                        <input
                          type="radio"
                          name="service"
                          checked={selectedService() === idx}
                          onChange={() => setSelectedService(idx)}
                          class="hidden"
                        />
                        <div class={`w-14 h-14 ${selectedService() === idx ? 'bg-white/20' : 'bg-white'} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                          <img src={idx === 0 ? FuelIcon : idx === 1 ? TowIcon : idx === 2 ? BanIcon : OliIcon} alt="logo" class="w-8 h-8" />
                        </div>
                        <span class="text-sm font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Around You Section */}
                <div class="bg-white rounded-2xl shadow-sm p-6">
                  <div class="flex items-center justify-between mb-6">
                    <div>
                      <h2 class="text-xl font-semibold text-gray-900">Fuel Around You</h2>
                      <p class="text-gray-500 text-sm">Find affordable fuel near you</p>
                    </div>
                    <MoreHorizontal class="w-5 h-5 text-gray-400" />
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map(() => (
                      <div class="border border-gray-200 rounded-2xl p-1">
                        <div class="relative mb-3">
                          <img
                            src={berkoh}
                            alt="Shell Petrol Bunk"
                            class="w-full h-54 object-cover rounded-2xl"
                          />
                          <div class="absolute bottom-2 left-2 bg-white rounded-full px-2 py-1 pr-3 flex items-center justify-center">
                            <span class="text-sm font-medium">❤️ Wishlist</span>
                          </div>
                        </div>
                        <div class="p-2">
                        <div class="flex items-center justify-between">
                          <h3 class="font-semibold text-gray-900 mb-1">Shell Petrol Bunk</h3>
                          <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center space-x-1">
                              <Star class="w-4 h-4 text-yellow-400 fill-current" />
                              <span class="text-sm font-medium">4.5</span>
                            </div>
                          </div>
                        </div>
                        <p class="text-gray-500 text-sm mb-2">📍 Madhavaram Milk Colony, Ch - 51</p>
                        <div class="flex items-center justify-between text-sm">
                          <span class="text-gray-600">⛽ 6</span>
                            <span class="text-gray-600">👥 2</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div class="space-y-6">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div class="flex flex-row items-center justify-center mb-6">
                    <div class="flex flex-row items-center justify-center space-x-8 py-4">
                      <div class="flex flex-col items-center justify-center space-x-2">
                        <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <img src={Pertamina} alt="logo" class="w-10 h-10" />
                        </div>
                        <span class="text-sm">Pertamina</span>
                      </div>
                      <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowLeftRight class="w-4 h-4" />
                      </div>
                      <div class="flex flex-col items-center justify-center space-x-2">
                        <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <img src={Shell} alt="logo" class="w-10 h-10" onDblClick={() => navigate('/brand')} />
                        </div>
                        <span class="text-sm">Shell</span>
                      </div>
                    </div>
                  </div>

                  <button
                    class="w-full bg-blue-400/60 hover:bg-blue-400/80 rounded-xl py-4 text-lg font-medium flex items-center justify-between px-6 transition mt-2 shadow"
                    onClick={() => setShowComparison(v => !v)}
                  >
                    Compare Prices
                    <ChevronRight class="w-6 h-6" />
                  </button>

                  {showComparison() && (
                    <div class="bg-white rounded-2xl shadow-lg mt-6 p-6 text-gray-900">
                      <div class="flex items-center justify-between mb-4">
                        <span class="font-semibold text-lg text-blue-700">Perbandingan Harga BBM</span>
                        <span class="text-xs text-gray-400">Update: 2024</span>
                      </div>
                      <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                          <thead>
                            <tr class="text-left text-gray-500 border-b">
                              <th class="py-2 px-3">Jenis BBM</th>
                              <th class="py-2 px-3">Pertamina</th>
                              <th class="py-2 px-3">Shell</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {name: 'Pertalite', pertamina: 10000, shell: 10500},
                              {name: 'Pertamax', pertamina: 13900, shell: 14200},
                              {name: 'V-Power', pertamina: null, shell: 15000},
                            ].map(row => (
                              <tr class="border-b last:border-0">
                                <td class="py-3 px-3 font-semibold">{row.name}</td>
                                <td class="py-3 px-3">
                                  {row.pertamina ? (
                                    <span class="inline-flex items-center gap-2">
                                      Rp {row.pertamina.toLocaleString('id-ID')}
                                      {row.pertamina < (row.shell || 999999) && (
                                        <span class="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">Lebih Murah</span>
                                      )}
                                    </span>
                                  ) : (
                                    <span class="text-gray-400">-</span>
                                  )}
                                </td>
                                <td class="py-3 px-3">
                                  {row.shell ? (
                                    <span class="inline-flex items-center gap-2">
                                      Rp {row.shell.toLocaleString('id-ID')}
                                      {row.shell < (row.pertamina || 999999) && (
                                        <span class="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">Lebih Murah</span>
                                      )}
                                    </span>
                                  ) : (
                                    <span class="text-gray-400">-</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                <div class="bg-white rounded-2xl shadow-sm p-6">
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">SPBU</h3>
                    <MoreHorizontal class="w-5 h-5 text-gray-400" />
                  </div>

                  <div class="grid grid-cols-3 gap-4">
                    {[{name: 'Pertamina', img: Pertamina}, {name: 'Shell', img: Shell}, {name: 'Vivo', img: BP}].map((brand) => (
                      brand.name === 'Shell' ? (
                        <label
                          class={`text-center rounded-2xl p-2 py-4 cursor-pointer transition border-2 ${selectedBrand() === brand.name ? 'bg-blue-200 border-blue-500' : 'bg-gray-200 border-transparent'}`}
                          onDblClick={() => navigate('/brand')}
                        >
                          <input
                            type="radio"
                            name="brand"
                            value={brand.name}
                            checked={selectedBrand() === brand.name}
                            onChange={() => setSelectedBrand(brand.name)}
                            class="hidden"
                          />
                          <div class="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center">
                            <img src={brand.img} alt="logo" class="w-10 h-10" />
                          </div>
                          <span class="text-xs text-gray-600">{brand.name}</span>
                        </label>
                      ) : (
                        <label class={`text-center rounded-2xl p-2 py-4 cursor-pointer transition border-2 ${selectedBrand() === brand.name ? 'bg-blue-200 border-blue-500' : 'bg-gray-200 border-transparent'}`}> 
                          <input
                            type="radio"
                            name="brand"
                            value={brand.name}
                            checked={selectedBrand() === brand.name}
                            onChange={() => setSelectedBrand(brand.name)}
                            class="hidden"
                          />
                          <div class="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center">
                            <img src={brand.img} alt="logo" class="w-10 h-10" />
                          </div>
                          <span class="text-xs text-gray-600">{brand.name}</span>
                        </label>
                      )
                    ))}
                  </div>

                  <div class="flex justify-center mt-4">
                    <div class="flex space-x-2">
                      <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm p-6">
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Users</h3>
                    <MoreHorizontal class="w-5 h-5 text-gray-400" />
                  </div>

                  <div class="space-y-4">
                    {[['Shell', 80], ['Pertamina', 90], ['BP, AKR', 60], ['Vivo', 50]].map(([label, percent]) => (
                      <>
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-600">{label}</span>
                          <span class="text-sm font-medium">{percent}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-blue-500 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
