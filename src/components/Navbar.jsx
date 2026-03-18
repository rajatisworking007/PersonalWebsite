import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return; // skip if a frame is already queued
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-spider-black/95 backdrop-blur-md border-b border-spider-red/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="hero" smooth duration={800} className="cursor-pointer flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-9 h-9 bg-spider-red rounded-full flex items-center justify-center shadow-red-glow-sm group-hover:shadow-red-glow transition-all duration-300"
            >
              <FaSpider className="text-white text-lg" />
            </motion.div>
            <span className="text-white font-bold text-xl tracking-widest uppercase">
              Rajat<span className="text-spider-red"> IS WORKING</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                spy
                onSetActive={() => setActive(link.to)}
                className="relative text-gray-300 text-sm font-medium uppercase tracking-widest cursor-pointer group transition-colors duration-300 hover:text-white py-2"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-spider-red transition-all duration-300
                  ${active === link.to ? 'w-full shadow-red-glow-sm' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="contact" smooth duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm px-6 py-2.5"
              >
                Hire Me
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-spider-red text-2xl z-50"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-spider-black/98 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={800}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold uppercase tracking-widest text-white hover:text-spider-red transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Link to="contact" smooth duration={800} onClick={() => setOpen(false)}>
                <button className="btn-primary mt-4">Hire Me</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
