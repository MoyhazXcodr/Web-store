import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata = {
  title: 'Hazsly One | Premium Marketplace',
  description: 'Modern, Dark Minimal UI Overhaul',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen bg-bgMain">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          {/* Ini adalah tempat halaman berubah-ubah */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
