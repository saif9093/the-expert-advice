import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Services',
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
    label: 'Countries',
    href: '/destinations',
    children: [
      { label: 'Europe', href: '/destinations/europe' },
      { label: 'Canada', href: '/destinations/canada' },
      { label: 'Australia', href: '/destinations/australia' },
      { label: 'United Kingdom', href: '/destinations/uk' },
      { label: 'United States', href: '/destinations/usa' },
      { label: 'New Zealand', href: '/destinations/new-zealand' },
      { label: 'Belgium', href: '/destinations/belgium' },
      { label: 'Finland', href: '/destinations/finland' },
      { label: 'Italy', href: '/destinations/italy' },
      { label: 'Luxembourg', href: '/destinations/luxembourg' },
      { label: 'Netherlands', href: '/destinations/netherlands' },
      { label: 'Switzerland', href: '/destinations/switzerland' },
    ],
  },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Fraud Prevention', href: '/fraud-prevention' },
  { label: 'Pay By Link', href: '/pay-by-link' },
  { label: 'Contact Us', href: '/contact' },
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 xl:h-20">

          {/* Logo — bigger, no text */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/TEA-web-logo.webp"
              alt="The Expert Advice"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                    location.pathname === link.href || location.pathname.startsWith(link.href + '/') && link.href !== '/contact'
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-52">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden max-h-80 overflow-y-auto">
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
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:+97148873662" className="text-white text-sm font-bold whitespace-nowrap transition-colors hover:text-gold-400">
              +971 4 8873662
            </a>
            <Link to="/contact" className="btn-primary whitespace-nowrap text-sm px-5 py-2.5">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy-950 border-t border-navy-800">
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
