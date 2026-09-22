import { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import portfolioVideos from '../data/videos';

export default function Portfolio({ theme }) {
  const [activeProject, setActiveProject] = useState(portfolioVideos[0] || null);
  const [isFading, setIsFading] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    if (activeProject?.id === project.id) return;
    
    setIsFading(true);
    setTimeout(() => {
      setActiveProject(project);
      setIsFading(false);
    }, 300);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!portfolioVideos || portfolioVideos.length === 0) return null;

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 transition-colors duration-500 font-sans section-contained"
      style={{ backgroundColor: '#080808' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-[11px] font-mono tracking-[0.25em] text-[#E50914] uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Featured Portfolio
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg">
            A curated showcase of cinematic editing, dynamic transitions, and impactful visual storytelling.
          </p>
        </div>

        {/* 60/40 Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* =========================================
              LEFT SIDE: Large Featured Stage (60%)
              ========================================= */}
          <div className="w-full lg:w-3/5 xl:w-[60%] flex flex-col shrink-0">
            <div 
              className={`relative aspect-[16/11] md:aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-[#E50914]/50 bg-[#0a0a0a] shadow-[0_0_50px_rgba(229,9,20,0.25)] transition-opacity duration-300 flex-grow ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src={activeProject?.thumbnail} 
                alt={activeProject?.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                
                {/* Top/Sub-label */}
                <div className="flex items-center">
                  <span className="text-[10px] tracking-widest font-bold text-red-500 bg-red-950/80 px-3 py-1.5 rounded-full border border-red-500/30 pointer-events-auto">
                    FEATURED
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="flex flex-col items-start gap-4 pointer-events-auto">
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {activeProject?.title}
                  </h3>
                  
                  <p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed drop-shadow-md line-clamp-2 md:line-clamp-3">
                    {activeProject?.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <button 
                      onClick={() => setIsVideoModalOpen(true)}
                      className="bg-[#E50914] hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(229,9,20,0.3)] cursor-pointer"
                    >
                      <FaPlay className="text-xs" />
                      Watch Now
                    </button>
                    <a 
                      href={activeProject?.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-neutral-600 hover:border-white hover:bg-white/5 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
                    >
                      View Details
                    </a>
                  </div>

                  {/* Tags Pill Badges */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 hidden sm:flex">
                    {activeProject?.tags?.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono tracking-wider uppercase bg-neutral-900/90 text-neutral-300 px-3 py-1.5 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE: Interactive Compact Project List (40%)
              ========================================= */}
          <div className="w-full lg:w-2/5 xl:w-[40%] flex flex-col gap-2">
            <h4 className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-2 px-2">
              Project Index ({portfolioVideos.length})
            </h4>
            
            <div 
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="project-index-scroll flex flex-col gap-1 overflow-y-auto max-h-[480px] md:max-h-[580px] pr-2.5 overscroll-contain"
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {portfolioVideos.map((project, index) => {
                const isActive = activeProject?.id === project.id;
                
                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    className={`w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 text-left cursor-pointer group border ${
                      isActive 
                        ? 'bg-[#E50914]/10 border-[#E50914]/40 shadow-[0_0_20px_rgba(229,9,20,0.2)]' 
                        : 'border-transparent hover:bg-white/5 hover:translate-x-1'
                    }`}
                  >
                    {/* Index Number */}
                    <span className={`font-mono text-xs tracking-widest w-6 shrink-0 transition-colors duration-300 ${isActive ? 'text-[#E50914]' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Miniature Thumbnail */}
                    <div className={`relative w-20 h-12 md:w-24 md:h-14 shrink-0 rounded-md overflow-hidden bg-neutral-900 transition-all duration-300 ${isActive ? 'ring-1 ring-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.5)] border-transparent' : 'border border-white/5 ring-1 ring-black/50'}`}>
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60 group-hover:opacity-100 group-hover:scale-105'}`}
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-[#E50914]/20 mix-blend-overlay transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Project Title */}
                    <div className="flex flex-col min-w-0 justify-center">
                      <span className={`text-sm md:text-[15px] font-medium truncate transition-colors duration-300 ${isActive ? 'text-white font-semibold' : 'text-neutral-400 group-hover:text-white'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.title}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest mt-1 truncate transition-colors duration-300 font-mono ${isActive ? 'text-[#E50914]' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                        {project.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          CINEMATIC VIDEO MODAL
          ========================================= */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden relative rounded-2xl bg-[#0a0a0a] ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/60 hover:bg-[#E50914] border border-white/20 flex items-center justify-center transition-all duration-300 text-white cursor-pointer"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full relative bg-black flex items-center justify-center">
              {activeProject?.videoUrl?.includes('youtube') || activeProject?.videoUrl?.includes('embed') ? (
                <iframe
                  className="w-full h-full"
                  src={`${activeProject?.videoUrl}${activeProject?.videoUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0`}
                  title={activeProject?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full object-contain"
                  src={activeProject?.videoUrl}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
