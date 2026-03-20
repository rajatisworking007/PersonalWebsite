import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';
import { FaPlay, FaChevronDown } from 'react-icons/fa';
import posterImg from '../assets/sagittarius-a-black-5120x2880-25401.jpg';

const bgVideo = 'https://res.cloudinary.com/dtcukrzgf/video/upload/v1773902540/future-trunks-powering-up-dragon-ball-moewalls-com_tsyona.mp4';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '100k+', label: 'Total Views' },
  { value: '50+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
];

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();
  const spotlightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Cinematic Stealth Reveal Sequence
    // Elements start clipped or blurred and fade into existence slowly
    tl.from('.badge', { opacity: 0, duration: 2, ease: 'power2.out' })
      .from('.hero-title-line', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        y: 10,
        opacity: 0,
        stagger: 0.3,
        duration: 1.8,
        ease: 'power4.inOut'
      }, '-=1.2')
      .from('.subtitle', { opacity: 0, filter: 'blur(8px)', duration: 2, ease: 'power2.out' }, '-=1')
      .from('.cta-btn', { opacity: 0, filter: 'blur(5px)', stagger: 0.2, duration: 1.5, ease: 'power2.out' }, '-=1')
      .from('.stat-item', { opacity: 0, y: 15, stagger: 0.15, duration: 1.5, ease: 'power2.out' }, '-=0.8');

    // Slow ominous background drift instead of interactive 3D parallax
    gsap.to('.video-bg', {
      scale: 1.08,
      duration: 30,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

  }, { scope: container });

  // Custom Noir Spotlight following the cursor
  useEffect(() => {
    const moveSpotlight = (e) => {
      if (!spotlightRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 600px)`;
    };
    window.addEventListener('mousemove', moveSpotlight);
    return () => window.removeEventListener('mousemove', moveSpotlight);
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Spotlight Overlay */}
      <div ref={spotlightRef} className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300" />

      {/* Background Video - Darkened for Noir but still clearly visible */}
      <div className="absolute inset-0 z-0 video-bg origin-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 contrast-125 brightness-75 mix-blend-screen"
          poster={posterImg}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Subtle gradient so text is readable, but video remains visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]/60 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">

        {/* Badge */}
        <div className="badge inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-black/40 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <span className="w-2 h-2 rounded-full bg-white opacity-70 animate-pulse" />
          <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.4em]">
            Available for projects
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="section-title text-6xl md:text-8xl lg:text-9xl leading-none mb-8 tracking-widest"
          style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
        >
          <span className="hero-title-line block text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,1)]">CINEMATIC</span>
          <span className="hero-title-line block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">STORYTELLING</span>
          <span className="hero-title-line block text-white/40 text-3xl md:text-4xl lg:text-5xl mt-6 font-normal tracking-[0.5em]">
            Video Editor
          </span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-8 mb-14 leading-loose tracking-wide">
          Crafting visually striking narratives in the shadows. Expert video editing, VFX, and motion graphics. Turning raw footage into stark, cinematic masterpieces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
          <Link to="showreel" smooth duration={1000} className="cta-btn cursor-pointer">
            <button className="btn-primary flex items-center gap-3 text-xs px-12 py-5 w-full justify-center bg-white text-black hover:bg-gray-300 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <FaPlay className="text-[10px]" />
              WATCH SHOWREEL
            </button>
          </Link>
          <Link to="contact" smooth duration={1000} className="cta-btn cursor-pointer">
            <button className="btn-outline text-xs px-12 py-5 w-full border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all bg-transparent">
              HIRE ME
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-4xl mx-auto border-t border-white/5 pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="text-2xl md:text-3xl font-bold text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-[10px] uppercase tracking-[0.3em] mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-gray-500 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
