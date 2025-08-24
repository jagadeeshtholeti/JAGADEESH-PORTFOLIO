import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveNav = () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-sm border-b border-gray-800 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-bold text-accent-yellow hover:scale-110 transition-transform duration-300"
              onClick={(e) => handleNavClick(e, '#home')}
              data-testid="link-logo"
            >
              JT.
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className={`nav-link font-medium px-3 py-2 ${
                  activeSection === 'home' ? 'active text-accent-yellow' : 'text-white hover:text-accent-yellow'
                }`}
                onClick={(e) => handleNavClick(e, '#home')}
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`nav-link font-medium px-3 py-2 ${
                  activeSection === 'about' ? 'active text-accent-yellow' : 'text-white hover:text-accent-yellow'
                }`}
                onClick={(e) => handleNavClick(e, '#about')}
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="#clients" 
                className={`nav-link font-medium px-3 py-2 ${
                  activeSection === 'clients' ? 'active text-accent-yellow' : 'text-white hover:text-accent-yellow'
                }`}
                onClick={(e) => handleNavClick(e, '#clients')}
                data-testid="nav-clients"
              >
                Clients
              </a>
              <a 
                href="#services" 
                className={`nav-link font-medium px-3 py-2 ${
                  activeSection === 'services' ? 'active text-accent-yellow' : 'text-white hover:text-accent-yellow'
                }`}
                onClick={(e) => handleNavClick(e, '#services')}
                data-testid="nav-services"
              >
                Services
              </a>
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-white text-dark-bg px-6 py-2 rounded-lg font-medium border-2 border-accent-yellow hover:bg-accent-yellow hover:text-dark-bg transition-all duration-300"
              onClick={(e) => handleNavClick(e, '#contact')}
              data-testid="button-contact-nav"
            >
              Contact Me
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-yellow transition-colors duration-300"
              data-testid="button-mobile-menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-16 right-0 w-64 h-screen bg-dark-card border-l border-gray-700 p-6 transition-transform duration-300 ${
        isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}>
        <div className="flex flex-col space-y-6">
          <a 
            href="#home" 
            className="text-accent-yellow font-medium py-2 border-b border-gray-700"
            onClick={(e) => handleNavClick(e, '#home')}
            data-testid="nav-mobile-home"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-accent-yellow font-medium py-2 border-b border-gray-700"
            onClick={(e) => handleNavClick(e, '#about')}
            data-testid="nav-mobile-about"
          >
            About
          </a>
          <a 
            href="#clients" 
            className="text-white hover:text-accent-yellow font-medium py-2 border-b border-gray-700"
            onClick={(e) => handleNavClick(e, '#clients')}
            data-testid="nav-mobile-clients"
          >
            Clients
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-accent-yellow font-medium py-2 border-b border-gray-700"
            onClick={(e) => handleNavClick(e, '#services')}
            data-testid="nav-mobile-services"
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="bg-accent-yellow text-dark-bg px-6 py-3 rounded-lg font-medium text-center mt-4"
            onClick={(e) => handleNavClick(e, '#contact')}
            data-testid="button-contact-mobile"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}