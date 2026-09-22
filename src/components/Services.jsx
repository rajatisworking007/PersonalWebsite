import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFilm, FaMagic, FaBolt, FaLayerGroup, FaVideo, FaInfinity, FaCheck } from 'react-icons/fa';
import servicesData from '../data/services.json';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaFilm,
  FaMagic,
  FaBolt,
  FaLayerGroup,
  FaVideo,
  FaInfinity,
};

export default function Services({ theme }) {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo('.services-header', 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: { trigger: container.current, start: 'top 85%', once: true },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.service-card',
      { 
        opacity: 0, 
        y: 35,
      },
      {
        scrollTrigger: { trigger: container.current, start: 'top 85%', once: true },
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out'
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative py-32 section-bg-primary overflow-hidden section-contained" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Ambient glows — balanced illumination for row 1 and row 2 */}
      <div className="ambient-glow violet absolute top-0 right-1/4" />
      <div className="ambient-glow red absolute bottom-10 left-1/4 opacity-40" />
      <div className="ambient-glow violet absolute -bottom-10 left-1/3 opacity-30" />
      <div className="ambient-glow crimson absolute top-1/2 left-0 opacity-25" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="services-header text-center mb-20">
          <p className="section-label">
            — Capabilities & Expertise —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            SERVICES & <span className="text-gradient-red">CAPABILITIES</span>
          </h2>
          <div className="section-divider" />
          <p className="max-w-2xl mx-auto text-sm leading-relaxed tracking-wide mt-4" style={{ color: theme === 'day' ? 'var(--text-secondary)' : '#d5cfdc' }}>
            High-impact video production, cinematic editing, and visual effects engineered to engage audiences and elevate brands.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || FaFilm;
            const isPoint4or5 = index === 3 || index === 4;

            return (
              <div
                key={service.id}
                className="service-card group relative p-8 md:p-10 transition-all duration-500 rounded-sm hover:translate-y-[-6px] flex flex-col justify-between"
                style={{ 
                  background: theme === 'day' 
                    ? 'var(--bg-surface)' 
                    : isPoint4or5
                      ? 'linear-gradient(170deg, rgba(26, 23, 38, 0.95) 0%, rgba(14, 13, 24, 0.98) 100%)'
                      : 'linear-gradient(170deg, rgba(22, 20, 32, 0.9) 0%, rgba(10, 10, 18, 0.95) 100%)', 
                  border: theme === 'day' 
                    ? (isPoint4or5 ? '1px solid rgba(201, 34, 47, 0.25)' : '1px solid rgba(26, 21, 32, 0.1)')
                    : (isPoint4or5 ? '1px solid rgba(230, 57, 70, 0.3)' : '1px solid rgba(230, 57, 70, 0.16)'),
                  boxShadow: theme === 'day' 
                    ? (isPoint4or5 ? '0 8px 28px rgba(201,34,47,0.1)' : '0 4px 20px rgba(0,0,0,0.05)')
                    : (isPoint4or5 ? '0 12px 40px rgba(0,0,0,0.45), 0 0 30px rgba(230,57,70,0.12)' : '0 8px 30px rgba(0,0,0,0.35)'),
                }}
              >
                {/* Top subtle edge highlight */}
                <div 
                  className="absolute top-0 inset-x-8 h-px pointer-events-none"
                  style={{ 
                    background: isPoint4or5 
                      ? 'linear-gradient(90deg, transparent, rgba(230,57,70,0.5), transparent)' 
                      : 'linear-gradient(90deg, transparent, rgba(230,57,70,0.3), transparent)' 
                  }} 
                />

                {/* Hover glow overlay */}
                <div 
                  className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ 
                    background: theme === 'day' 
                      ? 'linear-gradient(145deg, rgba(201,34,47,0.06) 0%, transparent 70%)' 
                      : 'linear-gradient(145deg, rgba(230,57,70,0.09) 0%, transparent 70%)',
                    boxShadow: theme === 'day'
                      ? '0 12px 36px rgba(201,34,47,0.15), inset 0 0 0 1px rgba(201,34,47,0.2)'
                      : '0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(230,57,70,0.2), inset 0 0 0 1px rgba(230,57,70,0.35)'
                  }} 
                />

                {/* Animated bottom accent bar */}
                <div 
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-sm"
                  style={{ 
                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-warm))',
                    boxShadow: '0 0 10px rgba(230,57,70,0.5)'
                  }}
                />

                <div className="relative z-10">
                  {/* Top Icon & Number */}
                  <div className="flex items-start justify-between mb-8">
                    <div 
                      className="w-14 h-14 flex items-center justify-center rounded-sm transition-all duration-500 group-hover:scale-110" 
                      style={{ 
                        border: theme === 'day' 
                          ? '1px solid rgba(201,34,47,0.3)' 
                          : (isPoint4or5 ? '1px solid rgba(230,57,70,0.45)' : '1px solid var(--border-accent)'), 
                        background: theme === 'day' 
                          ? 'rgba(201,34,47,0.08)' 
                          : (isPoint4or5 ? 'rgba(230,57,70,0.15)' : 'rgba(230,57,70,0.1)'),
                        boxShadow: isPoint4or5 
                          ? '0 0 25px rgba(230,57,70,0.25)' 
                          : '0 0 15px rgba(230,57,70,0.12)'
                      }}
                    >
                      <Icon 
                        className="text-2xl transition-all duration-500 group-hover:scale-110" 
                        style={{ color: 'var(--accent-secondary)' }} 
                      />
                    </div>

                    <div 
                      className={`text-5xl md:text-6xl font-bold transition-all duration-500 select-none ${
                        isPoint4or5 ? 'opacity-70 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-90'
                      }`} 
                      style={{ 
                        fontFamily: 'Bebas Neue, sans-serif', 
                        color: 'var(--accent-primary)',
                        textShadow: theme === 'day' ? 'none' : '0 0 20px rgba(230,57,70,0.3)'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 
                    className="font-bold tracking-wider mb-3 text-lg md:text-xl uppercase transition-colors duration-300 group-hover:text-[var(--accent-primary)]" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-xs md:text-sm leading-relaxed mb-8 min-h-[56px] transition-colors duration-300 font-normal" 
                    style={{ color: theme === 'day' ? 'var(--text-secondary)' : '#d5cfdc' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <div 
                  className="relative z-10 pt-4" 
                  style={{ 
                    borderTop: theme === 'day' 
                      ? '1px solid rgba(26, 21, 32, 0.08)' 
                      : (isPoint4or5 ? '1px solid rgba(230, 57, 70, 0.2)' : '1px solid var(--border-subtle)') 
                  }}
                >
                  <ul className="space-y-2.5">
                    {service.features.map(feature => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold transition-colors duration-300" 
                        style={{ color: theme === 'day' ? 'var(--text-secondary)' : '#cfc9d6' }}
                      >
                        <FaCheck 
                          className="text-[10px] flex-shrink-0" 
                          style={{ 
                            color: 'var(--accent-primary)',
                            filter: 'drop-shadow(0 0 5px rgba(230,57,70,0.5))'
                          }} 
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
