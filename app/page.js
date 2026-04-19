import React from 'react';
import { BriefcaseIcon, CurrencyDollarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

// Data Mockup Statistik
const statsData = [
  { 
    id: 1, 
    title: 'Produk Tersedia', 
    value: '1.2K', 
    change: '+120', 
    isPositive: true,
    icon: BriefcaseIcon,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10'
  },
  { 
    id: 2, 
    title: 'Transaksi Bulan Ini', 
    value: '345', 
    change: '-08%', 
    isPositive: false,
    icon: PresentationChartLineIcon,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10'
  },
  { 
    id: 3, 
    title: 'Penghasilan Total', 
    value: 'Rp 150JT', 
    change: '+200K', 
    isPositive: true,
    icon: CurrencyDollarIcon,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10'
  },
];

// Data Mockup Produk
const productsData = [
  { 
    id: 1, 
    name: "Aura Admin UI Kit", 
    category: "Category", 
    img: "/images/produk1.png" // Pastikan file ini ada di public/images/
  },
  { 
    id: 2, 
    name: "Aura Admin UI Kit", 
    category: "Category", 
    img: "/images/produk2.png" 
  },
  { 
    id: 3, 
    name: "Aura Admin UI Kit", 
    category: "Plugins", 
    img: "/images/produk3.png" 
  },
  { 
    id: 4, 
    name: "Aura Admin UI Kit", 
    category: "Category", 
    img: "/images/produk4.png" 
  },
];

export default function Marketplace() {
  return (
    <div className="p-8 space-y-10">
      
      {/* 1. Marketplace Overview Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-textMain">Marketplace Overview</h1>
          <button className="flex items-center gap-2 bg-bgPanel border border-borderMain px-4 py-2 rounded-lg text-sm hover:border-primary transition">
            <span className="text-xl leading-none">+</span> Create Produk
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat) => (
            <div key={stat.id} className="bg-bgPanel border border-borderMain rounded-xl p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-textMuted text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                stat.isPositive ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'
              }`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Featured Produk Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-textMain">Featured Produkt</h2>
          <select className="bg-bgPanel border border-borderMain text-sm rounded-lg px-3 py-2 outline-none focus:border-primary">
            <option>30 New</option>
            <option>Popular</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="bg-bgPanel border border-borderMain rounded-xl p-4 flex flex-col group hover:border-primary transition-colors">
              {/* Gambar Produk */}
              <div className="w-full h-40 bg-bgMain rounded-lg mb-4 overflow-hidden border border-borderMain">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  // Fallback jika gambar belum ada
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/16161a/e0e0e0?text=Produk' }} 
                />
              </div>
              
              {/* Info Produk */}
              <div className="flex-1">
                <h3 className="font-semibold text-textMain mb-1">{product.name}</h3>
                <p className="text-textMuted text-xs mb-4">{product.category}</p>
              </div>

              {/* Tombol Beli */}
              <button className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-bgMain font-medium py-2 rounded-lg text-sm transition-all">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
