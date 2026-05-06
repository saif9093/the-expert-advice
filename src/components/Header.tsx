import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Skilled Visa', href: '/services/skilled-visa' },
      { label: 'Study Visa', href: '/services/study-visa' },
      { label: 'Business Visa', href: '/services/business-visa' },
      { label: 'Work Permit', href: '/services/work-permit' },
      { label: 'Unskilled Visa', href: '/services/unskilled-visa' },
      { label: 'Visitor Visa', href: '/services/visitor-visa' },
    ],
  },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'Canada', href: '/destinations/canada' },
      { label: 'Australia', href: '/destinations/australia' },
      { label: 'United Kingdom', href: '/destinations/uk' },
      { label: 'United States', href: '/destinations/usa' },
      { label: 'Europe', href: '/destinations/europe' },
      { label: 'New Zealand', href: '/destinations/new-zealand' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-navy-950 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/TEA-web-logo.webp" 
              alt="The Expert Advice" 
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-48">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+97148873662" className="text-white text-base font-bold transition-colors mr-2">
              +971 4 8873662
            </a>
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-navy-800">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="flex items-center justify-between px-3 py-2.5 text-gray-300 hover:text-white hover:bg-navy-800 rounded-md font-medium transition-colors"
                  onClick={() => !link.children && setMobileOpen(false)}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === link.label ? null : link.label);
                      }}
                    />
                  )}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-navy-800 rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-navy-800">
              <Link to="/contact" className="btn-primary w-full text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
