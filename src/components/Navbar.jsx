import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'Showreel', to: 'showreel' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Services', to: 'services' },
  { label: 'Skills', to: 'skills' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1.0, ease: 'power3.out' });
  }, { scope: navRef });

  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(menuRef.current, { clipPath: 'inset(0 0 100% 0)', opacity: 0 }, { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.5, ease: 'power4.inOut' });
      gsap.fromTo('.mobile-link', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.4, delay: 0.2 });
    }
  }, [open]);

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        rafId = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const isDark = theme !== 'day';

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 transition-all duration-300"
      style={{
        backgroundColor: isDark ? 'rgba(10, 10, 10, 0.85)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
        opacity: 1,
        zIndex: 100000,
      }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <Link to="hero" smooth duration={1000} className="cursor-pointer flex items-center gap-3 group">
            <div 
              className="w-8 h-8 rounded flex items-center justify-center bg-gradient-to-br from-[#e51b23] to-[#9b1b30] shadow-[0_0_14px_rgba(229,27,35,0.6)] group-hover:scale-105 transition-all duration-300"
            >
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>R</span>
            </div>
            <span 
              className="tracking-wider uppercase"
              style={{ 
                color: isDark ? '#ffffff' : '#111827',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontSize: '1rem',
              }}
            >
              BETTERCALL <span style={{ color: '#ff3b30' }}>RAJAT</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={1000}
                  spy
                  onSetActive={() => setActive(link.to)}
                  className="relative cursor-pointer group py-2.5 transition-all duration-200"
                  style={{
                    color: isActive 
                      ? '#ff3b30' 
                      : (isDark ? 'rgba(243, 244, 246, 0.9)' : 'rgba(31, 41, 55, 0.9)'),
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textShadow: isActive ? '0 0 10px rgba(255, 59, 48, 0.6)' : 'none',
                  }}
                >
                  <span className="hover:text-[#ff3b30] transition-colors duration-200">
                    {link.label}
                  </span>
                  {/* Active / Hover red underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-full opacity-100' 
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: '#ff3b30',
                      boxShadow: '0 0 8px rgba(255, 59, 48, 0.8)',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions: Theme switch & Hire Me CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Theme Toggle — refined pill */}
            <button
              onClick={onToggleTheme}
              className="relative w-14 h-7 rounded-full flex items-center p-1 transition-all duration-300 border focus:outline-none"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              }}
              aria-label="Toggle theme"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  transform: theme === 'day' ? 'translateX(26px)' : 'translateX(0)',
                  boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                }}
              >
                {theme === 'day' ? (
                  <FaSun className="text-white text-[9px]" />
                ) : (
                  <FaMoon className="text-white text-[9px]" />
                )}
              </div>
            </button>

            {/* "HIRE ME" CTA Button */}
            <Link to="contact" smooth duration={1000}>
              <button 
                className="transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'transparent',
                  border: '1.5px solid #ef4444',
                  color: '#ffffff',
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef4444';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Hire Me
              </button>
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="relative w-12 h-6 rounded-full flex items-center p-0.5 transition-all duration-300 border focus:outline-none z-50"
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              }}
              aria-label="Toggle theme"
            >
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  transform: theme === 'day' ? 'translateX(22px)' : 'translateX(0)',
                }}
              >
                {theme === 'day' ? (
                  <FaSun className="text-white text-[8px]" />
                ) : (
                  <FaMoon className="text-white text-[8px]" />
                )}
              </div>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-red-400 transition-colors text-xl p-1 z-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 flex flex-col items-center justify-center gap-8 lg:hidden"
          style={{ 
            backgroundColor: isDark ? 'rgba(10, 10, 15, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
            zIndex: 100001,
          }}
        >
          {navLinks.map((link) => (
            <div key={link.to} className="mobile-link opacity-0">
              <Link
                to={link.to}
                smooth
                duration={1000}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                style={{ 
                  fontFamily: 'Bebas Neue, sans-serif', 
                  color: active === link.to ? '#ff3b30' : (isDark ? '#f3f4f6' : '#1f2937'),
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="mobile-link opacity-0 mt-6">
            <Link to="contact" smooth duration={1000} onClick={() => setOpen(false)}>
              <button 
                className="uppercase tracking-wider rounded-full transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  border: '1.5px solid #ef4444',
                  color: '#ffffff',
                  padding: '8px 24px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
                }}
              >
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
