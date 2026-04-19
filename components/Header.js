import { MagnifyingGlassIcon, ArrowPathIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="h-20 bg-bgPanel border-b border-borderMain flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-96">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
        <input 
          type="text" 
          placeholder="Cari Produk" 
          className="w-full bg-bgMain border border-borderMain rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition"
        />
      </div>

      {/* Profil & Notifikasi */}
      <div className="flex items-center gap-6 text-textMuted">
        <ArrowPathIcon className="w-5 h-5 cursor-pointer hover:text-textMain" />
        <BellIcon className="w-5 h-5 cursor-pointer hover:text-textMain" />
        <div className="flex items-center gap-3 pl-4 border-l border-borderMain cursor-pointer">
          <img src="/images/avatar.png" alt="Profile" className="w-8 h-8 rounded-full bg-borderMain" />
          <span className="text-sm font-medium text-textMain">Myylam</span>
        </div>
      </div>
    </header>
  );
}
