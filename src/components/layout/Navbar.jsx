// components/Header/Header.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState('top'); // 'top', 'scrolled', 'past-hero'
  const pathname = usePathname();

  const menuItems = [
    { name: 'INICIO', href: pathname === '/' ? '#Inicio' : '/#Inicio' },
    { name: 'PREGUNTA', href: pathname === '/' ? '#Pregunta' : '/#Pregunta' },
    { name: 'FUNCIONALIDADES', href: pathname === '/' ? '#Funcionalidades' : '/#Funcionalidades' },
    { name: 'SECTOR', href: pathname === '/' ? '#Sector' : '/#Sector' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollY > windowHeight) {
        setScrollState('past-hero');
      } else if (scrollY > 5) {
        setScrollState('scrolled');
      } else {
        setScrollState('top');
      }
    };
    
    // Verificar posición inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar clases según el estado de scroll
  const getHeaderClasses = () => {
    switch (scrollState) {
      case 'past-hero':
        return 'bg-black h-[80px]';
      case 'scrolled':
        return 'bg-black h-[80px]';
      case 'top':
      default:
        return 'bg-transparent h-[80px]';
    }
  };

  // Determinar logo según el estado de scroll
  const getLogoPath = () => {
    switch (scrollState) {
      case 'past-hero':
        return '/logo/appservice_naranaja-removebg.png'; // Logo con color
      case 'scrolled':
      case 'top':
      default:
        return '/logo/appservice_naranaja-removebg.png'; // Logo blanco
    }
  };

  // Determinar color del texto según el estado
  const getTextColor = () => {
    switch (scrollState) {
      case 'past-hero':
        return {
          text: 'text-white hover:text-default-200',
          underline: 'bg-white'
        };
      case 'scrolled':
        return {
          text: 'text-white hover:text-default-200',
          underline: 'bg-white'
        };
      case 'top':
      default:
        return {
          text: 'text-white hover:text-default-200',
          underline: 'bg-white'
        };
    }
  };

  // Determinar color del botón móvil
  const getMobileButtonColor = () => {
    switch (scrollState) {
      case 'past-hero':
        return 'text-white hover:bg-white/20';
      case 'scrolled':
      case 'top':
      default:
        return 'text-white hover:bg-white/20';
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Cambia según scroll */}
          <Link href="/" className="flex items-center">
            <div className="p-2 rounded-lg transition-all duration-300">
              <div className="relative h-12 w-auto">
                <img
                  src={getLogoPath()}
                  alt="Logo AppServis"
                  className="object-contain h-full w-full min-w-[120px] transition-opacity duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const colors = getTextColor();
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-medium relative group transition-colors duration-300 ${colors.text}`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 ${colors.underline} transition-all duration-300 group-hover:w-full`}
                      style={{ width: '0%' }}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${getMobileButtonColor()}`}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg font-medium text-gray-700 hover:text-default-600 hover:bg-default-50 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}