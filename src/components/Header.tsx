import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isSection: false },
    { name: 'About', href: '#about', isSection: true },
    { name: 'Departments', href: '#departments', isSection: true },
    { name: 'Student Life', href: '#student-life', isSection: true },
    { name: 'Facilities', href: '#facilities', isSection: true },
    { name: 'News', href: '#news', isSection: true },
    { name: 'Contact', href: '/contact', isSection: false }
  ];

  const scrollToSection = (href: string, isSection: boolean) => {
    if (!isSection) {
      window.location.href = href;
      return;
    }
    
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/UET-logo.webp" 
              alt="UET Mardan" 
              className="h-12 w-auto"
              loading="eager"
            />
            <span className="ml-2 text-xl font-bold text-[#003366] hidden sm:block">
              UET Mardan
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isSection)}
                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium hover:text-[#DAA520] ${
                  isScrolled || !isHomePage ? 'text-[#003366]' : 'text-[#003366]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#003366]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pt-4 pb-4 space-y-2 bg-white rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isSection)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-all duration-300 font-medium hover:bg-[#DAA520] hover:text-white ${
                  isScrolled || !isHomePage ? 'text-[#003366]' : 'text-[#003366]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;