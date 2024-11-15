import Link from "next/link";
import Logo from "./logo";
import { useState } from 'react';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li><Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</Link></li>
            <li className="relative">
              <button 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Air Freight</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sea Freight</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Road Freight</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Warehousing</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customs Clearance</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Supply Chain Solutions</Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link 
                href="/" 
                className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
              >
                Track Shipment
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
