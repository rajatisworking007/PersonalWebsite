import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAward, FaFilm, FaGlobe, FaStar } from 'react-icons/fa';
import profileImg from '../assets/Screenshot 2026-03-16 at 4.38.10 PM.png';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: FaFilm, value: ' 150+', label: 'Videos Edited' },
  { icon: FaGlobe, value: '50k+', label: 'Total Views' },
  { icon: FaStar, value: '50+', label: 'Happy Clients' },
  { icon: FaAward, value: '15+', label: 'Global Client' },
];

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    // Noir cinematic entrance
    gsap.from('.about-img', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0, scale: 0.95, filter: 'blur(10px)', duration: 2, ease: 'power2.out'
    });

    gsap.from('.about-content-item', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      opacity: 0, y: 20, stagger: 0.2, duration: 1.5, ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative py-32 bg-[#050505] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image - Stark Noir style */}
          <div className="about-img relative">
            {/* Minimalist framing */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 z-0" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 z-0" />

            <div className="relative z-10 p-2 border border-white/5 bg-black">
              <div className="relative overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Rajat - Video Editor"
                  className="w-full aspect-[3/4] object-cover grayscale contrast-150 brightness-75 group-hover:brightness-100 transition-all duration-1000"
                />
                {/* Noir bottom shadow */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Established</p>
                  <p className="text-white text-xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    2024
                  </p>
                </div>
              </div>
            </div>

            {/* Stark Stats Badge */}
            <div className="absolute -right-6 top-1/4 bg-black border border-white/10 p-6 z-20 shadow-[0_0_30px_rgba(0,0,0,1)]">
              <div className="text-white text-4xl font-bold tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>2+</div>
              <div className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">Years<br />Active</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="about-content-item mb-8">
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-4">
                — Identity —
              </p>
              <h2 className="section-title text-5xl md:text-7xl mb-6 tracking-widest text-white/90" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                THE DIRECTOR
                <br />IN THE SHADOWS
              </h2>
            </div>

            <div className="about-content-item text-gray-400 text-sm leading-relaxed space-y-6 mb-10">
              <p>
                Hey, I'm <span className="text-white font-medium">RAJAT</span> — a cinematic video editor. I manipulate light, shadow, and time to craft visual narratives that anchor viewers to the screen.
              </p>
              <p>
                From meticulous pacing in Hollywood-inspired cuts to engineering viral retention across social platforms, my approach is surgical. No bloated transitions—just pure, high-contrast, impactful storytelling.
              </p>
            </div>

            <div className="about-content-item flex flex-wrap gap-2 mb-12">
              {['Cinematography', 'Deep Black Grading', 'VFX Compositing', 'Audio Engineering', 'Stealth Cuts'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-black border border-white/10 text-[9px] uppercase tracking-widest text-gray-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={item.label}
                  className={`about-content-item p-5 bg-[#030303] border border-white/5 flex items-center gap-4 transition-colors hover:border-white/20`}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white/70 text-lg" />
                  </div>
                  <div>
                    <div className="text-white text-xl tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {item.value}
                    </div>
                    <div className="text-gray-600 text-[9px] uppercase tracking-widest">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
