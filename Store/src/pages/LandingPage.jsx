import { Dialog, DialogPanel } from '@headlessui/react'
 import { Menu, X } from 'lucide-react' 
 import { useState } from 'react' 
 import Marque from '../components/LandingPageComp.jsx/Marque' 
 import Product from './Product'
 import BgImage2 from '../components/BgImage2' 
 import useCartStore from '../context/CartStore'
import { href, Link } from 'react-router'
import DummySection from '../Section/DummySection.jsx'

const navigation = [ { name: 'Product', href: '/Product' }, 
  { name: 'Features', href: '#' }, 
  { name: 'Marketplace', href: '#' },
   { name: 'Company', href: '#' }, ]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-10 backdrop-blur-md bg-black/80">
          {/* Brand */}
          <div className="flex lg:flex-1">
            <a href="#" className="text-3xl font-extrabold bg-clip-text text-[#C9A24D]">
              Store
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2 text-gray-200 hover:bg-white/10"
            >
              <Menu className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-lg font-semibold text-gray-200 hover:text-[#C9A24D] transition
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-[#C9A24D] after:to-[#C9A24D]
                  hover:after:w-full after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-full bg-[#C9A24D] px-8 py-2 text-sm font-semibold text-[#0B0B0B] hover:opacity-90 transition"
            >
              Login
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 bg-black/60" />
          <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0B0B0B] p-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold bg-gradient-to-r from-[#C9A24D] to-[#C9A24D] bg-clip-text text-transparent">
                Store
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="size-6 text-white" />
              </button>
            </div>
            <div className="mt-8 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-semibold text-gray-200 hover:text-[#C9A24D]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <a className="block rounded-lg bg-[#C9A24D] px-4 py-3 text-center font-semibold text-[#0B0B0B] hover:opacity-90">
                Login
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1718985342149-7178154e0aee?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,11,11,0.45)]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-[#F5F1EB] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            Wear Your Story
          </h1>
          <p className="mt-4 text-3xl md:text-4xl text-[#F5F1EB]/80">
            Luxury fashion made for every moment
          </p>
          <button className="mt-8 px-12 py-4 bg-[#C9A24D] text-[#0B0B0B] font-semibold rounded-md hover:opacity-90 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= MARQUE ================= */}
      <section className="bg-[#F5F1EB] text-[#0B0B0B]">
        <Marque />
      </section>

     <section className="bg-[#F5F1EB] text-[#0B0B0B] py-16">
      <DummySection />
   
          </section>



      <section className="relative py-20">
        <BgImage2 />
      </section>

      {/* ================= FLOATING CART BUTTON ================= */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
         to='/Cart'
          className="relative bg-[#C9A24D] text-black rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
