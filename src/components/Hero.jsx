import { useRef, useEffect } from 'react';
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

export default function Hero({ theme }) {
  const container = useRef();
  const spotlightRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.badge', { opacity: 0, y: -20, duration: 1.2, ease: 'power3.out' })
      .from('.hero-title-line', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        y: 25,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.subtitle', { opacity: 0, y: 15, duration: 1.2, ease: 'power2.out' }, '-=0.5')
      .from('.cta-btn', { opacity: 0, y: 15, stagger: 0.12, duration: 1.0, ease: 'power3.out' }, '-=0.6')
      .from('.stat-item', { opacity: 0, y: 15, stagger: 0.1, duration: 1.0, ease: 'power2.out' }, '-=0.5');

    gsap.to('.video-bg', {
      scale: 1.05,
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

  }, { scope: container });

  // Pause background video when scrolled off-screen to free GPU/CPU
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Scoped spotlight listener on hero container
  useEffect(() => {
    const heroEl = container.current;
    if (!heroEl) return;

    let rafId = null;
    const moveSpotlight = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          const rect = heroEl.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          spotlightRef.current.style.background = `radial-gradient(circle 450px at ${x}px ${y}px, rgba(239,68,68,0.06) 0%, transparent 100%)`;
        }
        rafId = null;
      });
    };

    heroEl.addEventListener('mousemove', moveSpotlight, { passive: true });
    return () => {
      heroEl.removeEventListener('mousemove', moveSpotlight);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary"
    >
      {/* Ambient glow orbs */}
      <div className="ambient-glow red absolute -top-40 -right-40 z-10" />
      <div className="ambient-glow violet absolute -bottom-60 -left-40 z-10" />

      {/* Spotlight Overlay */}
      <div ref={spotlightRef} className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300" />

      {/* Background Video */}
      <div className="absolute inset-0 z-0 video-bg origin-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-35 contrast-110"
          poster={posterImg}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay strictly behind content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/30 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">

        {/* Badge */}
        <div className="badge inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-10 border border-neutral-700/80 bg-neutral-900/95">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse" />
          <span className="text-neutral-200 text-xs font-semibold tracking-widest uppercase">
            Available for projects
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="section-title text-6xl md:text-8xl lg:text-9xl leading-none mb-6 tracking-widest"
          style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
        >
          <span className="hero-title-line block text-white drop-shadow-sm">
            CINEMATIC
          </span>
          <span className="hero-title-line block text-gradient-red">
            STORYTELLING
          </span>
          <span 
            className="hero-title-line block text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold tracking-[0.25em] uppercase text-neutral-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Video Editor & Filmmaker
          </span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle text-base md:text-lg max-w-2xl mx-auto mt-6 mb-12 leading-relaxed text-neutral-300 font-normal">
          Crafting visually striking narratives through expert video editing, VFX, and motion graphics. Turning raw footage into cinematic masterpieces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <Link to="showreel" smooth duration={1000} className="cta-btn cursor-pointer">
            <button className="btn-primary flex items-center gap-3 text-xs px-10 py-4 w-full justify-center">
              <FaPlay className="text-[10px]" />
              WATCH SHOWREEL
            </button>
          </Link>
          <Link to="contact" smooth duration={1000} className="cta-btn cursor-pointer">
            <button className="btn-outline flex justify-center text-xs px-10 py-4 w-full">
              HIRE ME
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-4xl mx-auto pt-10 border-t border-neutral-800">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider mt-2 font-medium text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-400">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent" />
      </div>
    </section>
  );
}
