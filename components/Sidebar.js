import { HomeIcon, BookOpenIcon, SwatchIcon, CubeIcon, WrenchScrewdriverIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const menus = [
    { name: 'Semua Produk', icon: HomeIcon, active: true },
    { name: 'E-books', icon: BookOpenIcon },
    { name: 'Desain UI/UX', icon: SwatchIcon },
    { name: 'Plugins', icon: CubeIcon },
    { name: 'Tools', icon: WrenchScrewdriverIcon },
    { name: 'Admin', icon: UserIcon },
  ];

  return (
    <aside className="w-64 bg-bgPanel border-r border-borderMain h-screen sticky top-0 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center font-bold text-xl">
          H
        </div>
        <span className="text-xl font-bold tracking-wide">Hazsly</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menus.map((menu, idx) => (
          <a key={idx} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            menu.active ? 'bg-primary/10 text-primary font-medium' : 'text-textMuted hover:bg-bgMain hover:text-textMain'
          }`}>
            <menu.icon className="w-5 h-5" />
            {menu.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
