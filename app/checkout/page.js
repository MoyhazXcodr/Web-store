'use client';
import React, { useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Checkout() {
  // State untuk data keranjang
  const [cart, setCart] = useState([
    { id: 1, name: "Aura Admin UI Kit", category: "Category", price: 150000, qty: 1, img: "/images/produk1.png" },
    { id: 2, name: "Desain UI/UX (Colleatorle)", category: "E-book", price: 150000, qty: 1, img: "/images/produk2.png" },
    { id: 3, name: "Maylam UI Kit", category: "Plugins", price: 150000, qty: 1, img: "/images/produk3.png" },
  ]);

  // State untuk metode pembayaran
  const [paymentMethod, setPaymentMethod] = useState('GoPay');

  // Fungsi tambah/kurang kuantitas
  const updateQty = (id, change) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
    ));
  };

  // Fungsi hapus item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Hitung total
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="p-8">
      {/* Breadcrumb / Header Kecil */}
      <div className="flex items-center gap-2 text-textMuted text-sm mb-8">
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-textMain font-medium">Keranjang & Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8">
        
        {/* KIRI: Isi Keranjang */}
        <section className="space-y-4">
          <div className="flex justify-between items-center mb-4 text-textMain">
            <h2 className="text-xl font-bold">Isi Keranjang</h2>
            <button className="bg-bgPanel border border-borderMain px-3 py-1.5 rounded-lg text-sm hover:border-primary transition">
              + Isi Keranjang
            </button>
          </div>

          <div className="bg-bgPanel border border-borderMain rounded-xl p-2">
            {/* Header Tabel Keranjang */}
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-6 px-4 py-3 border-b border-borderMain text-textMuted text-sm">
              <div className="w-5"></div>
              <div>Product</div>
              <div className="w-32 text-center">Item</div>
              <div className="w-32 text-center">Quantity</div>
              <div className="w-10"></div>
            </div>

            {/* List Item */}
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-6 items-center px-4 py-4 border-b border-borderMain/50 last:border-0 group hover:bg-bgMain/50 transition-colors">
                
                {/* Checkbox Biru */}
                <div className="text-primary">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>

                {/* Info Produk */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-bgMain rounded-lg overflow-hidden border border-borderMain shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/150/16161a/e0e0e0' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textMain">{item.name}</h3>
                    <p className="text-textMuted text-xs mb-1">{item.category}</p>
                    <span className="text-[10px] bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded">Beli Sekarang</span>
                  </div>
                </div>

                {/* Harga */}
                <div className="w-32 text-center font-medium text-textMuted">
                  Rp {(item.price / 1000)}JT
                </div>

                {/* Kuantitas */}
                <div className="w-32 flex justify-center">
                  <div className="flex items-center gap-3 bg-bgMain border border-borderMain rounded-lg px-2 py-1">
                    <button onClick={() => updateQty(item.id, -1)} className="text-textMuted hover:text-textMain"><MinusIcon className="w-4 h-4" /></button>
                    <span className="w-4 text-center text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="text-textMuted hover:text-textMain"><PlusIcon className="w-4 h-4" /></button>
                  </div>
                </div>

                {/* Tombol Hapus */}
                <div className="w-10 flex justify-end">
                  <button onClick={() => removeItem(item.id)} className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* KANAN: Ringkasan & Pembayaran */}
        <section className="space-y-6 mt-11">
          
          {/* Ringkasan Pesanan */}
          <div className="bg-bgPanel border border-borderMain rounded-xl p-6">
            <h3 className="text-lg font-bold text-textMain mb-4">Ringkasan Pesanan</h3>
            <div className="flex justify-between text-textMuted text-sm mb-3">
              <span>Subtotal</span>
              <span>Rp {(total / 1000).toLocaleString('id-ID')}JT</span>
            </div>
            <div className="flex justify-between text-textMuted text-sm mb-6">
              <span>Ringkasan Pesanan</span>
              <span>Rp {(total / 1000).toLocaleString('id-ID')}JT</span>
            </div>
            <div className="flex justify-between text-textMain font-bold border-t border-borderMain pt-4">
              <span>Total</span>
              <span>Rp {(total / 1000).toLocaleString('id-ID')}JT</span>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div>
            <h3 className="text-lg font-bold text-textMain mb-4">Metode Pembayaran</h3>
            <div className="space-y-3">
              
              {/* GoPay */}
              <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'GoPay' ? 'border-primary bg-primary/5' : 'border-borderMain hover:border-textMuted bg-bgPanel'}`}>
                <input type="radio" name="payment" value="GoPay" checked={paymentMethod === 'GoPay'} onChange={(e) => setPaymentMethod(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'GoPay' ? 'border-primary' : 'border-textMuted'}`}>
                  {paymentMethod === 'GoPay' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 shrink-0"></div> {/* Ikon Dummy GoPay */}
                <span className="font-medium text-textMain flex-1">GoPay</span>
              </label>

              {/* OVO */}
              <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'OVO' ? 'border-primary bg-primary/5' : 'border-borderMain hover:border-textMuted bg-bgPanel'}`}>
                <input type="radio" name="payment" value="OVO" checked={paymentMethod === 'OVO'} onChange={(e) => setPaymentMethod(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'OVO' ? 'border-primary' : 'border-textMuted'}`}>
                  {paymentMethod === 'OVO' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-500 shrink-0 flex items-center justify-center text-[10px] font-bold">OVO</div>
                <span className="font-medium text-textMain flex-1">OVO</span>
                <span className="text-textMuted text-sm">OVO</span>
              </label>

              {/* Bank Transfer */}
              <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'Bank Transfer' ? 'border-primary bg-primary/5' : 'border-borderMain hover:border-textMuted bg-bgPanel'}`}>
                <input type="radio" name="payment" value="Bank Transfer" checked={paymentMethod === 'Bank Transfer'} onChange={(e) => setPaymentMethod(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'Bank Transfer' ? 'border-primary' : 'border-textMuted'}`}>
                  {paymentMethod === 'Bank Transfer' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                </div>
                <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <span className="text-[10px]">🏦</span>
                </div>
                <span className="font-medium text-textMain flex-1">Bank Transfer</span>
                <span className="text-emerald-500">💳</span>
              </label>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
