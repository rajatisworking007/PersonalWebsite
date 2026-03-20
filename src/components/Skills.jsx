import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay, FaFilm, FaLaptopCode, FaTools } from 'react-icons/fa';
import skillsData from '../data/skills.json';

gsap.registerPlugin(ScrollTrigger);

const getCatIcon = (cat) => {
  if (cat === 'Editing') return <FaFilm className="text-white/50 text-xl" />;
  if (cat === 'VFX' || cat === '2D') return <FaPlay className="text-white/50 text-xl" />;
  if (cat === 'Design') return <FaTools className="text-white/50 text-xl" />;
  return <FaLaptopCode className="text-white/50 text-xl" />;
}

export default function Skills() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.skills-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0, x: -30, duration: 1.5, ease: 'power2.out'
    });

    gsap.from('.skills-content', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      opacity: 0, x: 30, duration: 1.5, ease: 'power2.out'
    });

    const progressBars = gsap.utils.toArray('.progress-fill');
    progressBars.forEach((bar) => {
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
        },
        width: bar.dataset.progress,
        duration: 1.8,
        ease: 'power4.out'
      });
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="relative py-32 bg-black border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column */}
          <div className="skills-header">
            <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-4">
              — Arsenal —
            </p>
            <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              SOFTWARE & SKILLS
            </h2>
            <div className="w-16 h-px bg-white/20 mb-8" />
            <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-lg">
              Mastery over industry-standard tools is just the baseline. The real skill lies in combining them to engineer cold, hard, cinematic reality from pure imagination.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Editing', 'VFX', 'Color Grading', 'Motion Design'].map((cat) => (
                  <div key={cat} className="p-5 border border-white/5 bg-[#030303] hover:border-white/20 transition-colors flex flex-col items-center justify-center text-center">
                    <h4 className="text-white/80 text-[10px] tracking-widest uppercase font-semibold">{cat}</h4>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="skills-content">
            <h3 className="text-white text-sm tracking-widest uppercase font-semibold mb-8 flex items-center gap-3">
              <span className="w-4 h-px bg-white" />
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skillsData.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-3">
                      {getCatIcon(skill.category)}
                      <div>
                        <span className="text-white/90 text-xs tracking-widest uppercase block">{skill.name}</span>
                        <span className="text-white/30 text-[9px] tracking-widest uppercase block mt-1">{skill.category}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-[10px] tracking-widest">{skill.level}%</span>
                  </div>
                  {/* Noir Progress Bar */}
                  <div className="h-0.5 w-full bg-white/5">
                    <div
                      className="progress-fill h-full bg-white w-0"
                      data-progress={`${skill.level}%`}
                      style={{ boxShadow: '0 0 10px rgba(255,255,255,0.2)' }}
                    />
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
