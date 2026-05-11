"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#04342C] border-b border-[#2C2C2A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/kova-logo.svg" 
                alt="KOVA" 
                width={120} 
                height={64}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link href="/science" className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors duration-200 font-medium">
              Science
            </Link>
            <Link href="/about" className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors duration-200 font-medium">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors relative" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#1D9E75] text-[#F5F4F0] text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors" aria-label="Account">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#04342C] border-t border-[#2C2C2A]/50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/shop"
              className="block px-3 py-2 text-[#F5F4F0] hover:text-[#1D9E75] hover:bg-[#2C2C2A]/30 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/science"
              className="block px-3 py-2 text-[#F5F4F0] hover:text-[#1D9E75] hover:bg-[#2C2C2A]/30 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Science
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-[#F5F4F0] hover:text-[#1D9E75] hover:bg-[#2C2C2A]/30 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center space-x-4 px-3 pt-4 border-t border-[#2C2C2A]/30">
              <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors relative" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <button className="text-[#F5F4F0] hover:text-[#1D9E75] transition-colors" aria-label="Account">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}