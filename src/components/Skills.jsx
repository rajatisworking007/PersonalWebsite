import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay, FaFilm, FaLaptopCode, FaTools } from 'react-icons/fa';
import skillsData from '../data/skills.json';

gsap.registerPlugin(ScrollTrigger);

const getCatIcon = (cat) => {
  if (cat === 'Editing') return <FaFilm className="text-xl" style={{ color: 'var(--accent-primary)' }} />;
  if (cat === 'VFX' || cat === '2D') return <FaPlay className="text-xl" style={{ color: 'var(--accent-primary)' }} />;
  if (cat === 'Design') return <FaTools className="text-xl" style={{ color: 'var(--accent-primary)' }} />;
  return <FaLaptopCode className="text-xl" style={{ color: 'var(--accent-primary)' }} />;
}

const getLevelStyles = (level) => {
  if (level >= 90) return { 
    gradient: 'linear-gradient(90deg, #fcd34d, #f59e0b)', 
    shadow: '0 0 12px rgba(245, 158, 11, 0.4)', 
    text: '#fcd34d' 
  };
  if (level >= 80) return { 
    gradient: 'linear-gradient(90deg, #fdba74, #f97316)', 
    shadow: '0 0 12px rgba(249, 115, 22, 0.4)', 
    text: '#fdba74' 
  };
  return { 
    gradient: 'linear-gradient(90deg, var(--accent-primary), var(--accent-warm))', 
    shadow: '0 0 10px rgba(230, 57, 70, 0.4)', 
    text: 'var(--accent-primary)' 
  };
};

export default function Skills() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.skills-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0, x: -30, duration: 1.2, ease: 'power2.out'
    });

    gsap.from('.skills-content', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      opacity: 0, x: 30, duration: 1.2, ease: 'power2.out'
    });

    const progressBars = gsap.utils.toArray('.progress-fill');
    progressBars.forEach((bar) => {
      // Animate scaleX instead of width for better HMR/React sync and performance
      gsap.fromTo(bar, 
        { scaleX: 0 },
        {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
          },
          scaleX: 1,
          duration: 1.5,
          ease: 'power4.out',
          transformOrigin: 'left'
        }
      );
    });
  }, { scope: container, dependencies: [skillsData] });

  return (
    <section id="skills" ref={container} className="relative py-32 section-bg-secondary overflow-hidden section-contained" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Ambient glow */}
      <div className="ambient-glow violet absolute top-0 right-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column */}
          <div className="skills-header">
            <p className="section-label">
              — Expertise —
            </p>
            <h2 className="section-title text-5xl md:text-7xl tracking-widest mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              SOFTWARE & <span className="text-gradient-red">SKILLS</span>
            </h2>
            <div className="w-16 h-px mb-8" style={{ background: 'linear-gradient(90deg, var(--accent-primary), transparent)' }} />
            <p className="text-sm leading-relaxed mb-12 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              Mastery over industry-standard tools is just the baseline. The real skill lies in combining them to craft compelling cinematic experiences from pure imagination.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Editing', 'VFX', 'Color Grading', 'Motion Design'].map((cat) => (
                <div key={cat} className="p-5 rounded-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:translate-y-[-2px]" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
                  <h4 className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: 'var(--text-primary)' }}>{cat}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="skills-content">
            <h3 className="text-sm tracking-widest uppercase font-semibold mb-8 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
              <span className="w-4 h-px" style={{ background: 'var(--accent-primary)' }} />
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skillsData.map((skill) => {
                const styles = getLevelStyles(skill.level);
                return (
                  <div key={skill.id}>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        {getCatIcon(skill.category)}
                        <div>
                          <span className="text-xs tracking-widest uppercase block" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                          <span className="text-[9px] tracking-widest uppercase block mt-1" style={{ color: 'var(--text-muted)' }}>{skill.category}</span>
                        </div>
                      </div>
                      <span className="text-[10px] tracking-widest font-semibold" style={{ color: styles.text }}>{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1 w-full rounded-full" style={{ background: 'var(--border-subtle)' }}>
                      <div
                        className="progress-fill h-full rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          background: styles.gradient, 
                          boxShadow: styles.shadow 
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
