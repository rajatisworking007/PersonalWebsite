import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay } from 'react-icons/fa';
import thumbImg from '../assets/IMG_5170.jpeg';
import { showreelVideo } from '../data/videos';

gsap.registerPlugin(ScrollTrigger);

export default function Showreel({ theme }) {
  const [playing, setPlaying] = useState(false);
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.showreel-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0,
      y: 25,
      duration: 1.2,
      ease: 'power2.out'
    });

    gsap.from('.showreel-video', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.from('.showreel-stats .stat', {
      scrollTrigger: { trigger: container.current, start: 'top 65%' },
      opacity: 0,
      y: 15,
      stagger: 0.15,
      duration: 1,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="showreel" ref={container} className="relative py-32 section-bg-primary overflow-hidden section-contained">
      {/* Ambient glow */}
      <div className="ambient-glow red absolute top-1/4 -right-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="showreel-header text-center mb-20">
          <p className="section-label">
            — The Reel —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            MY <span className="text-gradient-red">SHOWREEL</span>
          </h2>
          <div className="section-divider" />
          <p className="max-w-lg mx-auto text-sm leading-relaxed tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            A curated collection of my best cinematic work and visual storytelling.
          </p>
        </div>

        <div className="showreel-video relative max-w-5xl mx-auto">
          {/* Subtle outer accent line */}
          <div className="absolute -inset-0.5 rounded-sm opacity-20 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.4), rgba(124,58,237,0.3))' }} />

          <div className="relative overflow-hidden aspect-video rounded-sm group" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-accent)' }}>
            {!playing ? (
              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                <img src={thumbImg} alt="Showreel Thumbnail" loading="lazy" decoding="async" className="w-full h-full object-cover brightness-95 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-1000" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-110" style={{ borderColor: 'rgba(230,57,70,0.3)', background: theme === 'day' ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,16,0.75)' }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-red-glow" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-warm))' }}>
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* Corner trims */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l pointer-events-none" style={{ borderColor: 'rgba(230,57,70,0.2)' }} />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r pointer-events-none" style={{ borderColor: 'rgba(230,57,70,0.2)' }} />
              </div>
            ) : (
              <iframe
                className="w-full h-full absolute inset-0 z-20"
                src={showreelVideo.videoUrl}
                title={showreelVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="showreel-stats flex flex-wrap justify-center gap-12 mt-20 pt-12" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {[
            { label: '250+ Videos Edited' },
            { label: 'College Clubs Work' },
            { label: 'Multi-Platform Ready' },
            { label: 'Fast Turnaround' },
          ].map((item) => (
            <div key={item.label} className="stat text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ color: 'var(--accent-primary)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
