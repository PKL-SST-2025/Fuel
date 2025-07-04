import { For, createSignal } from 'solid-js';
import { MapPin, Bell, User, Menu, Search, Filter, MoreHorizontal, Heart, Share2, Star, Users, Car, Plus, ChevronDown } from 'lucide-solid';
import { A } from '@solidjs/router';
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
import Cbiru from '../assets/SideBar/Cbiru.png';
import Caktif from '../assets/SideBar/Caktif.png';
import Notifikasi from '../assets/SideBar/Notif.png';
import BP from '../assets/Company/BP.png';
import Shell from '../assets/Company/LogoS.png';
import Vivo from '../assets/Company/LogoV.png';
import Mobil from '../assets/Company/M.png';
import Pertamina from '../assets/Company/LogoP.png';
import GSM from '../assets/Company/GSM.png';
import JM from '../assets/Company/JM.png';
import Motul from '../assets/Company/Motul.png';
import OliG from '../assets/Company/olim.jpg';
import PB from '../assets/Company/PB.png';
import BERKOH from '../assets/Company/PerBerkoh.png';




interface Company {
  name: string;
  logo: string;
}

interface Station {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  facilities: {
    pumps: number;
    employees: number;
  };
  isWishlist: boolean;
}

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: string;
  deliveryFee: string;
  image: string;
}

const Company = () => {
  const [activeTab, setActiveTab] = createSignal('All');

  const tabs = ['All', 'Pertamina', 'Shell', 'Vivo', 'Mobil', 'AB'];

  const companies: Company[] = [
    { name: 'Pertamina', logo: Pertamina },
    { name: 'Shell', logo: Shell },
    { name: 'Vivo', logo: Vivo },
    { name: 'Mobil', logo: Mobil },
    { name: 'AB', logo: BP },
    { name: 'PT. GSM', logo: GSM },
    { name: 'PT. JMT', logo: JM },
    { name: 'Motul', logo: Motul },
    { name: 'PlanetBan', logo: PB },
  ];

  const stations: Station[] = [
    {
      id: 1,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: false,
    },
    {
      id: 2,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: true,
    },
    {
      id: 3,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: true,
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
      price: '$50.99',
      rating: 4.7,
      reviews: '5k+ reviews',
      deliveryFee: '$0 Delivery fee over $30',
      image: OliG,
    },
    {
      id: 2,
      name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
      price: '$50.99',
      rating: 4.7,
      reviews: '5k+ reviews',
      deliveryFee: '$0 Delivery fee over $30',
      image: OliG,
    },
    {
      id: 3,
      name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
      price: '$50.99',
      rating: 4.7,
      reviews: '5k+ reviews',
      deliveryFee: '$0 Delivery fee over $30',
      image: OliG,
    },
    {
        id: 3,
        name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
        price: '$50.99',
        rating: 4.7,
        reviews: '5k+ reviews',
        deliveryFee: '$0 Delivery fee over $30',
        image: OliG,
      },
  ];

  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="bg-gradient-to-b from-[#4995FF]/15 to-[#f9fafb] px-42 pr-16 py-10  ">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <img src={HouseIcon} alt="logo" class="w-7 h-8" />
              <span class="text-gray-600">/</span>
              <img src={Cbiru} alt="logo" class="w-5 h-5" />
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <span class="text-gray-600">Company</span>
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
                <img src={Notifikasi} alt="logo" class="w-7 h-7" />
              </A>
              <A href="/company" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
                <img src={Caktif} alt="logo" class="w-7 h-7" />
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

      <div class="container mx-auto px-24 pr-32 py-6 ml-24">
        <div class="bg-white rounded-2xl shadow-sm p-6">
          <div class="relative mb-6">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Select or find a fuel station near me..."
              class="pl-10 pr-12 h-12 text-gray-600 rounded-md w-full"
            />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Filter class="w-4 h-4" />
            </button>
          </div>

          <div class="flex flex-wrap gap-2">
            <For each={tabs}>{(tab) => (
              <button
                onClick={() => setActiveTab(tab)}
                class={`rounded-full px-4 py-2 text-sm border ${activeTab() === tab ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {tab}
              </button>
            )}</For>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-semibold text-gray-900">Company</h2>
                <button><MoreHorizontal class="w-4 h-4" /></button>
              </div>

              <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
                <For each={companies}>{(company) => (
                  <div class="flex flex-col items-center bg-gray-100 rounded-2xl p-2">
                    <div class={`w-12 h-12 rounded-lg flex items-center justify-center mb-2`}>
                      <img src={company.logo} alt="" />
                    </div>
                    <span class="text-xs text-gray-600 text-center">{company.name}</span>
                  </div>
                )}</For>
              </div>
            </div>

            {/* Station section (reused) */}
            <StationSection />
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-sm p-6">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Product</h2>
              <div class="space-y-4">
                <For each={products}>{(product) => (
                  <div class="border-b border-gray-100 pb-4 last:border-b-0">
                    <div class="flex space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        class="w-30 h-30 rounded-lg object-contain bg-gray-100"
                      />
                      <div class="flex-1 min-w-0">
                        <div class="flex items-start justify-between mb-1">
                          <h3 class="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                          <button class="p-1 ml-2"><Share2 class="w-3 h-3" /></button>
                        </div>
                        <div class="flex items-center space-x-1 mb-1">
                          <Star class="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span class="text-xs text-gray-600">{product.rating}</span>
                          <span class="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                        <p class="text-xs text-blue-600 mb-2">{product.deliveryFee}</p>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-2">
                            <button class="p-1"><Heart class="w-4 h-4 text-red-500" /></button>
                            <span class="text-xs text-gray-500">Wishlist</span>
                          </div>
                          <div class="flex items-center space-x-2">
                            <span class="text-sm font-bold text-blue-600">{product.price}</span>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded"><Plus class="w-3 h-3" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}</For>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Company;

const StationSection = () => {
  const [stations, setStations] = createSignal([
    {
      id: 1,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: false,
    },
    {
      id: 2,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: true,
    },
    {
      id: 3,
      name: 'Pertamina',
      image: BERKOH,
      location: 'SPBU Pertamina Berkoh',
      rating: 4.5,
      facilities: { pumps: 6, employees: 2 },
      isWishlist: true,
    },
  ]);

  return (
    <div class="bg-white rounded-2xl shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <img src={Pertamina} alt="" class="w-8 h-8" />
          </div>
          <h2 class="text-lg font-semibold text-gray-900">PERTAMINA</h2>
        </div>
        <button class="hover:bg-gray-100 p-1 rounded">
          <MoreHorizontal class="w-4 h-4" />
        </button>
      </div>

      <div class="mb-4">
        <h3 class="font-medium text-gray-900 mb-2">Fuel Pertamina Around You</h3>
        <p class="text-sm text-gray-500">Find affordable bunk stays near you</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <For each={stations()}>{(station) => (
          <div class="relative">
            <div class="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
              <img
                src={station.image}
                alt="Gas Station"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-2 right-2 flex space-x-1">
                <button class="bg-white/80 backdrop-blur-sm p-1 h-7 w-7 rounded">
                  <Share2 class="w-3 h-3" />
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between mb-2">
              <button
                class="flex items-center space-x-1 hover:opacity-80"
                onClick={() => {
                  setStations(stations().map(s =>
                    s.id === station.id ? { ...s, isWishlist: !s.isWishlist } : s
                  ));
                }}
              >
                <Heart
                  class={`w-4 h-4 ${station.isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
                <span class="text-sm text-gray-600">Wishlist</span>
              </button>
              <div class="flex items-center space-x-1">
                <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span class="text-sm font-medium">{station.rating}</span>
              </div>
            </div>
            <h4 class="font-medium text-gray-900 mb-1">{station.name}</h4>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <MapPin class="w-3 h-3 mr-1" />
              {station.location}
            </div>
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <div class="flex items-center space-x-1">
                <Car class="w-3 h-3" />
                <span>{station.facilities.pumps}</span>
              </div>
              <div class="flex items-center space-x-1">
                <Users class="w-3 h-3" />
                <span>{station.facilities.employees}</span>
              </div>
            </div>
          </div>
        )}</For>
      </div>
    </div>
  );
};
