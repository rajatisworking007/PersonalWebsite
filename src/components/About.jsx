import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAward, FaFilm, FaGlobe, FaStar, FaFileAlt } from 'react-icons/fa';
import profileImg from '../assets/resume-preview.png';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: FaFilm, value: ' 150+', label: 'Videos Edited' },
  { icon: FaGlobe, value: '50k+', label: 'Total Views' },
  { icon: FaStar, value: '50+', label: 'Happy Clients' },
  { icon: FaAward, value: '15+', label: 'Global Client' },
];

export default function About() {
  const container = useRef(null);
  const [showResume, setShowResume] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showResume]);

  useGSAP(() => {
    gsap.from('.about-img', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0, scale: 0.95, duration: 1.8, ease: 'power2.out'
    });

    gsap.from('.about-content-item', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      opacity: 0, y: 25, stagger: 0.15, duration: 1.2, ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative py-32 section-bg-secondary overflow-hidden section-contained">
      {/* Ambient glow */}
      <div className="ambient-glow red absolute top-20 -right-40" />
      <div className="ambient-glow violet absolute bottom-20 -left-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="about-img relative">
            {/* Corner accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 z-0" style={{ borderColor: 'rgba(230,57,70,0.3)' }} />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 z-0" style={{ borderColor: 'rgba(230,57,70,0.3)' }} />

            <div className="relative z-10 p-2 border rounded-sm" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-primary)' }}>
              <div className="relative overflow-hidden group rounded-sm">
                <img
                  src={profileImg}
                  alt="Rajat - Resume Preview"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-contain object-top brightness-95 group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-1000 bg-white"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Established</p>
                  <p className="text-xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'var(--text-primary)' }}>
                    2024
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -right-6 top-1/4 p-6 z-20 rounded-sm" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-accent)', boxShadow: '0 0 30px rgba(230,57,70,0.1)' }}>
              <div className="text-4xl font-bold tracking-widest text-gradient-red" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>2+</div>
              <div className="text-[9px] uppercase tracking-widest mt-1" style={{ color: 'var(--accent-primary)' }}>Years<br />Active</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="about-content-item mb-8">
              <p className="section-label">
                — About Me —
              </p>
              <h2 className="section-title text-5xl md:text-7xl mb-6 tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                THE CREATIVE
                <br /><span className="text-gradient-red">BEHIND THE LENS</span>
              </h2>
            </div>

            <div className="about-content-item text-sm leading-relaxed space-y-6 mb-10" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Hey, I'm <span className="font-medium" style={{ color: 'var(--accent-primary)' }}>RAJAT</span> — a cinematic video editor. I manipulate light, shadow, and time to craft visual narratives that anchor viewers to the screen.
              </p>
              <p>
                From meticulous pacing in Hollywood-inspired cuts to engineering viral retention across social platforms, my approach is surgical. No bloated transitions—just pure, high-contrast, impactful storytelling.
              </p>
            </div>

            <div className="about-content-item flex flex-wrap gap-2 mb-12">
              {['Cinematography', 'Color Grading', 'VFX Compositing', 'Audio Engineering', 'Motion Design'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest transition-colors" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="about-content-item mb-12">
              <button 
                onClick={() => setShowResume(true)}
                className="btn-primary flex items-center gap-3 text-xs px-10 py-4 rounded-sm transition-transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaFileAlt className="text-[10px]" />
                  PREVIEW RESUME
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="about-content-item p-5 flex items-center gap-4 transition-all duration-300 rounded-sm hover:translate-y-[-2px]"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-lg" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <div className="text-xl tracking-wider text-gradient-red" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {item.value}
                    </div>
                    <div className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResume && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(5, 5, 10, 0.96)' }}
          onClick={() => setShowResume(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-full overflow-hidden flex flex-col items-center justify-center rounded-sm"
            onClick={(e) => e.stopPropagation()}
            style={{ border: '1px solid var(--border-accent)', boxShadow: '0 0 50px rgba(230,57,70,0.2)' }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-[var(--accent-primary)] transition-colors border border-white/10"
              aria-label="Close Preview"
            >
              ✕
            </button>
            
            <img 
              src={profileImg} 
              alt="Rajat Resume Full Preview" 
              decoding="async"
              className="w-full max-h-[85vh] object-contain bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
