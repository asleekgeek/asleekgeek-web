"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              ASleekGeek
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Articles</Link>
              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Categories</Link>
              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Community</Link>
              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Articles</Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Categories</Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Community</Link>
            <Link href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
