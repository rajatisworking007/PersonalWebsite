import { useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSpider, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

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
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.footer-content', {
      scrollTrigger: { trigger: container.current, start: 'top 90%' },
      y: 20, opacity: 0, duration: 1.5, ease: 'power2.out', stagger: 0.15
    });
  }, { scope: container });

  return (
    <footer ref={container} className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
          <div className="footer-content md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <FaSpider className="text-black text-sm" />
              </div>
              <span className="text-white font-bold text-lg tracking-[0.3em] uppercase">
                Rajat<span className="text-gray-500">_Wrk</span>
              </span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-8 uppercase tracking-widest">
              Cinematic video editor crafting visceral narratives in the shadows.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:border-white hover:text-white bg-[#030303] transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="footer-content">
              <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <span className="w-4 h-px bg-white/40" />
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      smooth
                      duration={1000}
                      className="text-gray-400 text-xs uppercase tracking-widest cursor-pointer hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-content">
            <h4 className="text-white/40 font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-white/40" />
              Direct Comms
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-[10px] tracking-widest uppercase">Rajatisworking007@gmail.com</li>
              <li className="text-gray-400 text-[10px] tracking-widest uppercase">+918305618020</li>
              <li className="text-gray-400 text-[10px] tracking-widest uppercase">Noida, IN</li>
            </ul>
            <Link to="contact" smooth duration={1000}>
              <button className="mt-8 bg-white border border-white text-black text-[10px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gray-300 transition-colors w-full md:w-auto">
                Transmit Target
              </button>
            </Link>
          </div>
        </div>

        <div className="footer-content border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[9px] uppercase tracking-widest text-center">
            © 2026 Rajat. All Operations Classified. No Tracks Left Behind.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}
