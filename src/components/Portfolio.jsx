import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTimes } from 'react-icons/fa';
import projects from '../data/projects.json';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'YouTube Editing', 'Cinematic Edits', 'Shorts / Reels', 'VFX Edits'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const container = useRef();
  const gridRef = useRef();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useGSAP(() => {
    gsap.from('.portfolio-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 20, opacity: 0, duration: 1.5, ease: 'power2.out'
    });
  }, { scope: container });

  // Custom filter transition
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-card');
      gsap.fromTo(cards, 
        { opacity: 0, filter: 'blur(5px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [activeFilter]);

  // Modal Animation Hook (Noir style: slow fade in)
  useEffect(() => {
    if (selectedProject) {
      gsap.fromTo('.modal-content', 
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo('.modal-backdrop',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={container} className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="portfolio-header text-center mb-16">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-6">
            — Work —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            PORTFOLIO
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto my-8" />
        </div>

        <div className="portfolio-header flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-medium uppercase tracking-[0.3em] pb-2 border-b transition-all duration-300 ${
                activeFilter === cat 
                ? 'text-white border-white' 
                : 'text-gray-600 border-transparent hover:text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden border border-white/5 group-hover:border-white/30 transition-colors duration-700">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Inner Vignette / Shadow border */}
                <div className="absolute inset-0 border border-black/50 pointer-events-none" />

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 border border-white/10 text-white/80 text-[9px] uppercase tracking-widest">
                  {project.category.split(' ')[0]}
                </div>
              </div>

              {/* Info */}
              <div className="pt-5">
                <h3 className="text-white/90 text-sm font-semibold tracking-wide mb-2 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest text-gray-500 bg-white/5 border border-white/10 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div 
          className="modal-backdrop fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content w-full max-w-5xl bg-[#030303] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-[110] w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300 text-xl"
            >
              <FaTimes />
            </button>

            <div className="aspect-video w-full relative z-[105] bg-black">
              <iframe
                className="w-full h-full"
                src={`${selectedProject.videoUrl}?autoplay=1&rel=0`}
                title={selectedProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-8 md:p-12 relative z-[105] bg-[#030303]">
              <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-6">
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {selectedProject.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 border border-white/20 px-4 py-2">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-loose max-w-3xl mb-8">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-8">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
