import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Use cases menu items
  const useCases = [
    {
      title: "Google Cloud Platform",
      description: "Externalisez vos projets GCP",
      href: "/nos-cas-d-usages/google-cloud"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      <style>{`
        /* Dropdown Styles */
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(203, 213, 225, 0.4);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(78, 205, 196, 0.1);
          min-width: 320px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 8px;
        }
        
        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .dropdown-item {
          display: block;
          padding: 12px 20px;
          text-decoration: none;
          color: #374151;
          border-radius: 12px;
          margin: 8px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        
        .dropdown-item:hover,
        .dropdown-item:focus {
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.1));
          border-color: rgba(45, 212, 191, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(45, 212, 191, 0.2);
        }
        
        .dropdown-item-title {
          font-weight: 600;
          font-size: 14px;
          color: #111827;
          margin-bottom: 2px;
        }
        
        .dropdown-item-description {
          font-size: 12px;
          color: #6b7280;
        }
        
        .dropdown-trigger {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .dropdown-trigger:hover {
          color: #14b8a6;
        }
        
        .dropdown-chevron {
          margin-left: 4px;
          transition: transform 0.2s ease;
        }
        
        .dropdown-chevron.open {
          transform: rotate(180deg);
        }
        
        /* Mobile dropdown styles */
        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(248, 250, 252, 0.9);
          border-radius: 8px;
          margin: 8px 0;
        }
        
        .mobile-dropdown.open {
          max-height: 400px;
        }
        
        .mobile-dropdown-item {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: #374151;
          border-bottom: 1px solid rgba(203, 213, 225, 0.3);
          transition: all 0.2s ease;
        }
        
        .mobile-dropdown-item:last-child {
          border-bottom: none;
        }
        
        .mobile-dropdown-item:hover {
          background: rgba(45, 212, 191, 0.1);
          color: #14b8a6;
        }
        
        /* Accessibility improvements */
        .dropdown-trigger:focus,
        .dropdown-item:focus,
        .mobile-dropdown-item:focus {
          outline: 2px solid #14b8a6;
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          .dropdown-menu {
            min-width: 280px;
          }
        }
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <div className="flex items-center">
                <span className="text-teal-500 font-bold text-3xl mr-2">DIGITAL</span>
                <span className="text-blue-600 font-bold text-3xl">FACTORY</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              {/* Dropdown for Nos cas d'usages */}
              <div className="dropdown-container" ref={dropdownRef}>
                <button
                  className="dropdown-trigger font-medium text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  aria-label="Nos cas d'usages menu"
                >
                  Nos cas d'usages
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`}
                  />
                </button>
                
                <div 
                  className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}
                  role="menu"
                  aria-label="Use cases submenu"
                >
                  {useCases.map((useCase, index) => (
                    <Link
                      key={index}
                      to={useCase.href}
                      className="dropdown-item"
                      onClick={closeAllMenus}
                      role="menuitem"
                    >
                      <div className="dropdown-item-title">{useCase.title}</div>
                      <div className="dropdown-item-description">{useCase.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/#pricing" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Tarifs</Link>
              <Link to="/#trial" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Offre d'Essai</Link>
              <Link to="/#contact" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Contact</Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav 
          className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {/* Mobile Dropdown for Nos cas d'usages */}
            <div ref={mobileDropdownRef}>
              <button
                className="dropdown-trigger font-medium text-gray-700 hover:text-teal-600 transition-colors py-2 w-full text-left"
                onClick={toggleMobileDropdown}
                aria-expanded={mobileDropdownOpen}
                aria-haspopup="true"
              >
                Nos cas d'usages
                <ChevronDown 
                  size={16} 
                  className={`dropdown-chevron ${mobileDropdownOpen ? 'open' : ''}`}
                />
              </button>
              
              <div className={`mobile-dropdown ${mobileDropdownOpen ? 'open' : ''}`}>
                {useCases.map((useCase, index) => (
                  <Link
                    key={index}
                    to={useCase.href}
                    className="mobile-dropdown-item"
                    onClick={closeAllMenus}
                  >
                    <div className="dropdown-item-title">{useCase.title}</div>
                    <div className="dropdown-item-description">{useCase.description}</div>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/#pricing" 
              className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Tarifs
            </Link>
            <Link 
              to="/#trial" 
              className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Offre d'Essai
            </Link>
            <Link 
              to="/#contact" 
              className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;