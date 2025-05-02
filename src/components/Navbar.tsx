// src/components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 font-sans"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Navigation Links - centered and prominent */}
          <div className="hidden md:flex md:justify-center md:flex-1">
            <ul className="flex items-center space-x-16 list-none p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-md text-lg font-bold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/random-forest"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-md text-lg font-bold transition-colors"
                >
                  Random Forest
                </Link>
              </li>
              <li>
                <Link
                  href="/lstm"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-md text-lg font-bold transition-colors"
                >
                  LSTM
                </Link>
              </li>
              <li>
                <Link
                  href="/xg-boost"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-md text-lg font-bold transition-colors"
                >
                  XG Boost
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
            <Link
              href="/about"
              className="block text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/random-forest"
              className="block text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Random Forest
            </Link>
            <Link
              href="/lstm"
              className="block text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LSTM
            </Link>
            <Link
              href="/xg-boost"
              className="block text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              XG Boost
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;