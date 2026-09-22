import { useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';

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
      y: 20, opacity: 0, duration: 1.2, ease: 'power2.out', stagger: 0.12
    });
  }, { scope: container });

  return (
    <footer ref={container} className="relative section-bg-primary overflow-hidden section-contained" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Film strip decorative border */}
      <div className="film-strip-border w-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
          <div className="footer-content md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-warm))', boxShadow: '0 0 12px rgba(230,57,70,0.3)' }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>R</span>
              </div>
              <span className="font-bold text-lg tracking-[0.3em] uppercase" style={{ color: 'var(--text-primary)' }}>
                Rajat<span className="text-gradient-red">_Wrk</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed mb-8 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Cinematic video editor crafting compelling visual narratives.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
                  style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', background: 'var(--bg-secondary)' }}
                  aria-label={s.label}
                >
                  <s.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="footer-content">
              <h4 className="font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3" style={{ color: 'var(--accent-primary)' }}>
                <span className="w-4 h-px" style={{ background: 'var(--accent-primary)' }} />
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      smooth
                      duration={1000}
                      className="text-xs uppercase tracking-widest cursor-pointer transition-colors flex items-center gap-3 group"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="w-0 h-px group-hover:w-4 transition-all duration-300" style={{ background: 'var(--accent-primary)' }} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-content">
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3" style={{ color: 'var(--accent-primary)' }}>
              <span className="w-4 h-px" style={{ background: 'var(--accent-primary)' }} />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Rajatisworking007@gmail.com</li>
              <li className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>+918305618020</li>
              <li className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Noida, IN</li>
            </ul>
            <Link to="contact" smooth duration={1000}>
              <button className="btn-primary mt-8 text-[10px] font-semibold tracking-widest uppercase px-6 py-3 w-full md:w-auto rounded-sm">
                <span className="relative z-10">Start a Project</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="footer-content py-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className="text-[9px] uppercase tracking-widest text-center" style={{ color: 'var(--text-muted)' }}>
            © 2026 Rajat Tarua. All Rights Reserved. Crafted with passion.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ border: '1px solid var(--border-accent)', color: 'var(--accent-primary)' }}
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}
