import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBars, FaTimes, FaSpider } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'Showreel', to: 'showreel' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Services', to: 'services' },
  { label: 'Skills', to: 'skills' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });
  }, { scope: navRef });

  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(menuRef.current, { clipPath: 'inset(0 0 100% 0)', opacity: 0 }, { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.6, ease: 'power4.inOut' });
      gsap.fromTo('.mobile-link', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.3 });
    }
  }, [open]);

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafId = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-[#030303]/90 backdrop-blur-sm border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          <Link to="hero" smooth duration={1000} className="cursor-pointer flex items-center gap-4 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center transition-transform duration-700 group-hover:rotate-90">
              <FaSpider className="text-black text-sm" />
            </div>
            <span className="text-white font-bold text-lg tracking-[0.3em] uppercase">
              BetterCall<span className="text-gray-500"> RAJAT </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={1000}
                spy
                onSetActive={() => setActive(link.to)}
                className="relative text-gray-500 text-[10px] font-semibold uppercase tracking-[0.3em] cursor-pointer group transition-colors duration-300 hover:text-white py-2"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300
                  ${active === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="contact" smooth duration={1000}>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-colors text-[10px] font-semibold uppercase tracking-widest px-8 py-3">
                Hire Me
              </button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/50 hover:text-white transition-colors text-xl z-50"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-[#030303] flex flex-col items-center justify-center gap-10 lg:hidden z-40 border-b border-white/10"
        >
          {navLinks.map((link) => (
            <div key={link.to} className="mobile-link opacity-0">
              <Link
                to={link.to}
                smooth
                duration={1000}
                onClick={() => setOpen(false)}
                className="text-4xl font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors cursor-pointer"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="mobile-link opacity-0 mt-8">
            <Link to="contact" smooth duration={1000} onClick={() => setOpen(false)}>
              <button className="bg-white text-black font-semibold uppercase tracking-widest text-[10px] px-10 py-4 hover:bg-gray-300 transition-colors">
                Initiate Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
