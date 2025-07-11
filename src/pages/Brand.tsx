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
import SPBU from '../assets/Company/spbusel.png';




interface Company {
name: string;
image: string;
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

const Brand = () => {
const [activeTab, setActiveTab] = createSignal('about');

const tabs = ['All', 'Pertamina', 'Shell', 'Vivo', 'Mobil', 'AB'];

const companies: Company[] = [
  { name: 'Pertamina', image: Pertamina },
  { name: 'Shell', image: Shell },
  { name: 'Vivo', image: Vivo },
  { name: 'Mobil', image: Mobil },
  { name: 'AB', image: BP },
  { name: 'PT. GSM', image: GSM },
  { name: 'PT. JMT', image: JM },
  { name: 'Motul', image: Motul },
  { name: 'PlanetBan', image: PB },
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
    price: '78.000',
    rating: 4.7,
    reviews: '5k+ reviews',
    deliveryFee: '$0 Delivery fee over $30',
    image: OliG,
  },
  {
    id: 2,
    name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
    price: '78.000',
    rating: 4.7,
    reviews: '5k+ reviews',
    deliveryFee: '$0 Delivery fee over $30',
    image: OliG,
  },
  {
    id: 3,
    name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
    price: '78.000',
    rating: 4.7,
    reviews: '5k+ reviews',
    deliveryFee: '$0 Delivery fee over $30',
    image: OliG,
  },
  {
      id: 4,
      name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
      price: '78.000',
      rating: 4.7,
      reviews: '5k+ reviews',
      deliveryFee: '$0 Delivery fee over $30',
      image: OliG,
    },
    {
        id: 5,
        name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
        price: '78.000',
        rating: 4.7,
        reviews: '5k+ reviews',
        deliveryFee: '$0 Delivery fee over $30',
        image: OliG,
      },
      {
        id: 6,
        name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
        price: '78.000',
        rating: 4.7,
        reviews: '5k+ reviews',
        deliveryFee: '$0 Delivery fee over $30',
        image: OliG,
      },
      {
        id: 7,
        name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
        price: '78.000',
        rating: 4.7,
        reviews: '5k+ reviews',
        deliveryFee: '$0 Delivery fee over $30',
        image: OliG,
      },
      {
        id: 8,
        name: 'RACEMAX SCOOTER 4T 10W30 (0.8L)',
        price: '78.000',
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
            <span class="text-gray-600">Brands</span>
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
        <div class="bg-white rounded-2xl shadow-sm p-8">
          {/* Header Info Stasiun */}
          <div class="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center gap-5 flex-1 min-w-0">
              <div class="bg-white rounded-2xl shadow p-2 flex items-center justify-center" style="width:64px;height:64px;">
                <img src={Shell} alt="Shell Logo" class="w-12 h-12 object-contain" />
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-2xl font-bold text-gray-900">Shell Bunk</span>
                  <span class="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-6 h-6"><svg xmlns='http://www.w3.org/2000/svg' class='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'><path d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'/></svg></span>
                </div>
                <div class="flex items-center gap-2">
                  <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span class="text-base font-semibold text-gray-700">4.7</span>
                  <span class="text-base text-gray-400">(32k+ reviews)</span>
                </div>
              </div>
              <div class="flex items-center gap-4 ml-6">
                <button class="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-50">
                  <svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M22 16.92V19a2 2 0 01-2 2A19.72 19.72 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z'/></svg>
                </button>
                <span class="flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-5 py-2 rounded-full text-base font-medium border border-green-100">
                  <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z' /></svg>
                  Best Safety
                </span>
              </div>
            </div>
            <div class="flex-shrink-0 mt-2 md:mt-0 md:ml-8">
              <div class="flex items-center bg-white border border-gray-200 rounded-2xl px-5 py-3 min-w-[320px] max-w-xs shadow-sm">
                <MapPin class="w-5 h-5 text-blue-500 mr-2" />
                <span class="text-gray-700 text-sm truncate">JL. CIREMAI RAYA, KALIJAGA, CIREBON, Jawa Barat West Java, 45144...</span>
              </div>
            </div>
          </div>

          {/* Tab Section */}
          <div class="flex gap-2 mb-6 bg-gray-50 rounded-2xl p-2 w-fit">
            <button
              class={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base ${activeTab() === 'about' ? 'bg-white shadow text-blue-900 border border-blue-100' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('about')}
            >
              <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect x='3' y='6' width='18' height='12' rx='3' stroke-width='2' stroke='currentColor' fill='none'/></svg> About Bunk
            </button>
            <button
              class={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base ${activeTab() === 'reviews' ? 'bg-white shadow text-blue-900 border border-blue-100' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star class="w-5 h-5" /> Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab() === 'about' && (
            <>
              {/* Gallery Section */}
              <div class="flex gap-6 mb-8">
                <For each={[1,2,3]}>{() => (
                  <div class="w-64 aspect-video rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={SPBU} alt="Shell Station" class="w-full h-full object-cover" />
                  </div>
                )}</For>
              </div>
              {/* Our Experts Recommend */}
              <div class="mb-2 flex items-center justify-between">
                <div>
                  <span class="font-semibold text-gray-900 text-base">Our Experts Recommend</span>
                  <div class="text-xs text-gray-400">Add more products for extra savings</div>
                </div>
                <button class="p-2 rounded-full hover:bg-gray-100"><svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='5' cy='12' r='2'/><circle cx='12' cy='12' r='2'/><circle cx='19' cy='12' r='2'/></svg></button>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pb-2">
                <For each={products}>{(product, i) => (
                  <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-row items-stretch relative min-h-[140px] transition hover:shadow-xl">
                    {/* Wishlist icon pojok kanan atas */}
                    <button class="absolute -top-4 -right-4 z-10 p-1 rounded-full bg-white shadow border-2 border-gray-200">
                      <Heart class="w-6 h-6 text-red-500" />
                    </button>
                    {/* Gambar produk */}
                    <div class="flex flex-col items-center justify-between mr-4 min-w-[80px]">
                      <div class="relative w-16 h-16 mb-2">
                        <img src={product.image} alt={product.name} class="w-16 h-16 rounded-lg object-contain bg-gray-100" />
                      </div>
                      {/* Badge waktu pengiriman atau Wishlist */}
                      {i() === 0 ? (
                        <button class="flex items-center gap-1 text-xs text-red-500 bg-white border border-gray-200 rounded-full px-3 py-1 font-medium shadow mt-2">
                          <Heart class="w-4 h-4 text-red-500" /> Wishlist
                        </button>
                      ) : (
                        <div class="flex items-center gap-1 text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1 font-medium shadow mt-2">
                          <svg xmlns='http://www.w3.org/2000/svg' class='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3' /></svg>
                          25 Mins
                        </div>
                      )}
                    </div>
                    {/* Info produk */}
                    <div class="flex flex-col flex-1 min-w-0 justify-between">
                      <div>
                        <div class="text-xs text-gray-900 font-semibold mb-1 line-clamp-2">{product.name}</div>
                        <div class="flex items-center gap-1 mb-1">
                          <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span class="text-xs text-gray-700 font-semibold">{product.rating}</span>
                          <span class="text-xs text-gray-400">(5k+ reviews)</span>
                        </div>
                        <div class="text-xs text-blue-600 mb-2">{product.deliveryFee}</div>
                      </div>
                      <div class="flex items-end justify-between mt-2">
                        <span></span>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg font-semibold text-sm flex items-center gap-2 shadow"><span>{product.price}</span></button>
                        <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full flex items-center justify-center border border-gray-200 ml-2"><Plus class="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                )}</For>
              </div>
            </>
          )}
          {activeTab() === 'reviews' && <ReviewsSection />}
        </div>
      </div>
    </div>
  </div>
);
};

// ReviewsSection
const ReviewsSection = () => {
  // Dummy data
  const reviews = [
    {
      name: 'Budi Santoso',
      avatar: '',
      rating: 5,
      date: '12 Mei 2024',
      text: 'Pelayanan ramah, tempat bersih, pengisian cepat. Recommended!',
    },
    {
      name: 'Siti Aminah',
      avatar: '',
      rating: 4,
      date: '10 Mei 2024',
      text: 'Staf sopan, lokasi mudah dijangkau. Hanya antri sedikit lama.',
    },
    {
      name: 'Andi Wijaya',
      avatar: '',
      rating: 5,
      date: '8 Mei 2024',
      text: 'Harga bersaing, fasilitas lengkap. Akan kembali lagi!',
    },
  ];
  const summary = { rating: 4.7, total: 32000, breakdown: [22000, 7000, 2000, 800, 200] };
  return (
    <div class="max-w-3xl mx-auto">
      {/* Summary */}
      <div class="bg-white rounded-2xl shadow p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <Star class="w-7 h-7 fill-yellow-400 text-yellow-400" />
            <span class="text-3xl font-bold text-gray-900">{summary.rating}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-base text-gray-700 font-semibold">dari 5</span>
            <span class="text-sm text-gray-400">({summary.total.toLocaleString('id-ID')} reviews)</span>
          </div>
        </div>
        {/* Breakdown bar */}
        <div class="flex flex-col gap-1 flex-1">
          {[5,4,3,2,1].map((star, idx) => (
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-500">{star}</span>
              <Star class="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <div class="flex-1 h-2 bg-gray-100 rounded">
                <div class="h-2 rounded bg-yellow-400" style={{ width: `${(summary.breakdown[5-star]/summary.total)*100}%` }}></div>
              </div>
              <span class="text-xs text-gray-400 w-10 text-right">{summary.breakdown[5-star]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* List Review */}
      <div class="flex flex-col gap-5">
        {reviews.length === 0 ? (
          <div class="text-center text-gray-400 py-12">Belum ada review</div>
        ) : (
          reviews.map(r => (
            <div class="bg-white rounded-2xl shadow p-5 flex gap-4 items-start">
              <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                {r.avatar || r.name.split(' ').map(n=>n[0]).join('').slice(0,2)}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-semibold text-gray-900">{r.name}</span>
                  <span class="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
                    <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" /> {r.rating}
                  </span>
                  <span class="text-xs text-gray-400 ml-2">{r.date}</span>
                </div>
                <div class="text-gray-700 text-sm">{r.text}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Brand;
