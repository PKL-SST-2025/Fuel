import { Search, MapPin, Heart, Star, MoreHorizontal, Filter, ChevronDown, ArrowLeftRight, ChevronRight, Share2, } from 'lucide-solid';
import brandIcon from '../assets/brandicon.png';
import homeIcon from '../assets/SideBar/Home.png';
import WishlistAktif from '../assets/SideBar/Waktif.png';
import ExploreIcon from '../assets/SideBar/Explor.png';
import NotificationIcon from '../assets/SideBar/Notif.png';
import CompanyIcon from '../assets/SideBar/Company.png';
import ScanIcon from '../assets/SideBar/Scan.png';
import WishlistIcon from '../assets/SideBar/Wishlist.png';
import ProfileIcon from '../assets/SideBar/Profil.png';
import LogoutIcon from '../assets/SideBar/exit.png';
import HouseIcon from '../assets/SideBar/House.png';
import Wishlistbiru from '../assets/SideBar/Wabiru.png';
import LocationIcon from '../assets/SideBar/Lokasi.png';
import FuelIcon from '../assets/SideBar/Fuel.png';
import Notif from '../assets/SideBar/Notif1.png';
import image from '../assets/W/PerBerkoh.png';
import Ban from '../assets/W/Ban.png';
import Oli from '../assets/W/Oli.png';
import Tow from '../assets/W/Tow.png';
import Fuel from '../assets/W/Fuel.png';
import { For, createSignal } from 'solid-js';
import { A } from '@solidjs/router';

interface Category {
    id: number;
    name: string;
    img: string;
    active: boolean;
  }
  
  interface Station {
    id: number;
    name: string;
    location: string;
    rating: number;
    image?: string;
    distance: string;
    price: string;
    isWishlist: boolean;
  };
  
  const categories: Category[] = [
    { id: 1, name: 'Fuel', img: Fuel, active: false },
    { id: 2, name: 'Towing', img: Tow, active: false },
    { id: 3, name: 'Puncture', img: Ban, active: false },
    { id: 4, name: 'Oil', img: Oli, active: false },
  ];
  
  const fuelStations: Station[] = [
    {
      id: 1,
      name: 'SPBU Pertamina 34-10201',
      location: 'Jl. Merdeka No.123',
      rating: 4.5,
      image: image,
      distance: '2.3 km',
      price: 'Rp13.500',
      isWishlist: false,
    },
    {
      id: 2,
      name: 'SPBU Shell MT Haryono',
      location: 'Jl. MT Haryono Kav.10',
      rating: 4.2,
      image: image,
      distance: '4.1 km',
      price: 'Rp13.700',
      isWishlist: false,
    },
    {
        id: 2,
        name: 'SPBU Shell MT Haryono',
        location: 'Jl. MT Haryono Kav.10',
        rating: 4.2,
        image: image,
        distance: '4.1 km',
        price: 'Rp13.700',
        isWishlist: false,
      },
      {
        id: 2,
        name: 'SPBU Shell MT Haryono',
        location: 'Jl. MT Haryono Kav.10',
        rating: 4.2,
        image: image,
        distance: '4.1 km',
        price: 'Rp13.700',
        isWishlist: false,
      },
      {
        id: 2,
        name: 'SPBU Shell MT Haryono',
        location: 'Jl. MT Haryono Kav.10',
        rating: 4.2,
        image: image,
        distance: '4.1 km',
        price: 'Rp13.700',
        isWishlist: false,
      },
      {
        id: 2,
        name: 'SPBU Shell MT Haryono',
        location: 'Jl. MT Haryono Kav.10',
        rating: 4.2,
        image: image,
        distance: '4.1 km',
        price: 'Rp13.700',
        isWishlist: false,
      },
      {
        id: 2,
        name: 'SPBU Shell MT Haryono',
        location: 'Jl. MT Haryono Kav.10',
        rating: 4.2,
        image: image,
        distance: '4.1 km',
        price: 'Rp13.700',
        isWishlist: false,
      }
  ];

const Wishlist = () => {
    const [activeCategory, setActiveCategory] = createSignal<number>(1);
    const [wishlistedStations, setWishlistedStations] = createSignal<number[]>([]);

    const toggleWishlist = (id: number) => {
        setWishlistedStations(prev =>
          prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
        );
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
              <img src={Wishlistbiru} alt="logo" class="w-5 h-5" />
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <span class="text-gray-600">Wishlist</span>
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
              <A href="/wishlist" class="w-14 h-14 bg-[#2581fc] rounded-full flex items-center justify-center">
                <img src={WishlistAktif} alt="logo" class="w-7 h-7" />
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
    <main class="flex-1 p-6 ml-52 mr-32 bg-white shadow-sm rounded-2xl">
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-gray-900">Category</h2>
          <button class="text-gray-400">⋯</button>
        </div>

        <div class="p-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <For each={categories}>{(category) => (
            <div
              class={`cursor-pointer transition-all hover:shadow-md rounded-2xl shadow-sm ring-offset-2 ${
                category.active || activeCategory() === category.id ? 'bg-blue-500 ring-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div class="p-4 text-center shadow-sm rounded-2xl">
                <div class={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${category.active || activeCategory() === category.id ? 'bg-white/20 ring-blue-500 text-white' : 'bg-white text-gray-700'}`}>
                  <img src={category.img} alt="logo" class="w-7 h-7" />
                </div> 
                <p class={`text-sm font-medium ${category.active || activeCategory() === category.id ? 'text-white' : 'text-gray-700'}`}>{category.name}</p>
              </div>
            </div>
          )}</For>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Fuel</h2>
        <div class="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <For each={fuelStations}>{(station) => (
            <div class="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 rounded-2xl shadow-sm">
              <div class="relative">
                <img
                  src={station.image || '/placeholder.svg'}
                  alt={station.name}
                  class="w-full h-40 object-cover"
                />
                <button class="absolute bottom-2 right-2 rounded-full flex items-center justify-center w-8 h-8 p-0 bg-white/80 hover:bg-white">
                  <Share2 class="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div class="p-4">
                <div class="flex items-center justify-between mb-2">
                  <button
                    class={`text-xs px-2 py-1 h-auto ${
                      wishlistedStations().includes(station.id)
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}
                    onClick={() => {
                      setWishlistedStations(prev =>
                        prev.includes(station.id) ? prev.filter(w => w !== station.id) : [...prev, station.id]
                      );
                    }}
                  >
                   <div class="flex items-center space-x-1">
                    <Heart 
                      class={`w-4 h-4 ${wishlistedStations().includes(station.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                    />
                    <span class="text-sm text-gray-600">Wishlist</span>
                  </div>
                  </button>
                  <div class="flex items-center space-x-1">
                    <span class="text-yellow-400">⭐</span>
                    <span class="text-sm font-medium">{station.rating}</span>
                  </div>
                </div>

                <h3 class="font-semibold text-gray-900 mb-1">{station.name}</h3>
                <div class="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin class="w-3 h-3 mr-1" />
                  <span>{station.location}</span>
                </div>

                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-1">
                      <span class="text-gray-400">⛽</span>
                      <span class="font-medium">{station.distance}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <span class="text-gray-400">👥</span>
                      <span class="font-medium">{station.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}</For>
        </div>
      </div>
    </main>
      </div>
    </div>
  );
};

export default Wishlist;