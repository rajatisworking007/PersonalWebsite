import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay } from 'react-icons/fa';
import thumbImg from '../assets/IMG_5170.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const container = useRef(null);

  useGSAP(() => {
    // Noir Silhouette Entrance Animation
    gsap.from('.showreel-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: 'power2.out'
    });

    // Sharp cut-in for the video container
    gsap.from('.showreel-video', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0.5,
      duration: 1.8,
      ease: 'power4.inOut'
    });

    gsap.from('.showreel-stats .stat', {
      scrollTrigger: { trigger: container.current, start: 'top 65%' },
      opacity: 0,
      filter: 'blur(4px)',
      stagger: 0.2,
      duration: 1.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section id="showreel" ref={container} className="relative py-32 bg-[#030303] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="showreel-header text-center mb-20">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-6">
            — The Reel —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            MY SHOWREEL
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto my-8" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed tracking-wide">
            A curated collection of visceral, high-contrast visual storytelling.
          </p>
        </div>

        <div className="showreel-video relative max-w-5xl mx-auto">
          {/* Subtle outer glow that looks like a rim light */}
          <div className="absolute -inset-0.5 bg-white/5 blur-md" />

          <div className="relative bg-black overflow-hidden aspect-video border border-white/10 group">
            {!playing ? (
              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                <img src={thumbImg} alt="Showreel Thumbnail" className="w-full h-full object-cover grayscale contrast-150 brightness-75 group-hover:contrast-125 group-hover:brightness-100 transition-all duration-1000" />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-white/30 rounded-full flex items-center justify-center transition-all duration-700 bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                    <FaPlay className="text-white group-hover:text-black text-2xl ml-2 transition-colors duration-500" />
                  </div>
                </div>

                {/* Subtle corner trims */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 pointer-events-none" />
              </div>
            ) : (
              <iframe
                className="w-full h-full absolute inset-0 z-20"
                src="https://www.youtube.com/embed/sJTKp5j-Nd0?si=Bd_VQmxnHr5BVrQ&autoplay=1"
                title="Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="showreel-stats flex flex-wrap justify-center gap-12 mt-20 border-t border-white/5 pt-12">
          {[
            { label: '250+ Videos Edited' },
            { label: 'Award Winning Work' },
            { label: 'Multi-Platform Ready' },
            { label: 'Fast Turnaround' },
          ].map((item) => (
            <div key={item.label} className="stat text-center">
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
