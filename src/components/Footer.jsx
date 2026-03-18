import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaSpider, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const links = {
  Navigation: [
    { label: 'Home', to: 'hero' },
    { label: 'Showreel', to: 'showreel' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'Services', to: 'services' },
  ],
  Services: [
    { label: 'Video Editing', to: 'services' },
    { label: 'VFX / Motion', to: 'services' },
    { label: 'YouTube Edits', to: 'services' },
    { label: 'Shorts & Reels', to: 'services' },
  ],
};

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-spider-red/20 overflow-hidden">
      {/* Top red line glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spider-red to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-spider-red rounded-full flex items-center justify-center shadow-red-glow-sm">
                <FaSpider className="text-white text-lg" />
              </div>
              <span className="text-white font-bold text-xl tracking-widest uppercase">
                BetterCall<span className="text-spider-red">Rajat</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Cinematic video editor crafting visual stories that captivate, inspire, and convert.
              Based in New York — working worldwide.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-9 h-9 border border-gray-800 flex items-center justify-center text-gray-600
                             hover:border-spider-red hover:text-spider-red hover:shadow-red-glow-sm transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-spider-red" />
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      smooth
                      duration={800}
                      className="text-gray-500 text-sm cursor-pointer hover:text-spider-red transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-spider-red group-hover:w-4 transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-spider-red" />
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">Rajatisworking007@gmail.com</li>
              <li className="text-gray-500 text-sm">+918305618020</li>
              <li className="text-gray-500 text-sm">Noida</li>
            </ul>
            <Link to="contact" smooth duration={800}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 btn-primary text-xs px-5 py-2.5"
              >
                Start a Project
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center">
            © 2026 Rajat. All rights reserved. Crafted with{' '}
            <FaHeart className="inline text-spider-red text-xs mx-0.5" />
            and cinematic passion.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255,26,26,0.4)' }}
            className="w-9 h-9 bg-spider-red/10 border border-spider-red/30 flex items-center justify-center
                       text-spider-red hover:bg-spider-red hover:text-white transition-all duration-300"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
