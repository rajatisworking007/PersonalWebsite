import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay, FaEye, FaClock } from 'react-icons/fa';
import projects from '../data/projects.json';

const categories = ['All', 'YouTube Editing', 'Cinematic Edits', 'Shorts / Reels', 'VFX Edits'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 bg-spider-black overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-spider-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-spider-red text-sm font-semibold uppercase tracking-[0.4em] mb-4">
            — Work —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            MY <span className="text-gradient-red">PORTFOLIO</span>
          </h2>
          <span className="red-line mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="relative glass-card cursor-pointer group overflow-hidden rounded-sm
                           transition-transform duration-300 hover:-translate-y-2"
                style={{ willChange: 'transform' }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-spider-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-spider-red flex items-center justify-center shadow-red-glow">
                      <FaPlay className="text-white text-base ml-0.5" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-spider-black/90 border border-spider-red/30 text-spider-red text-xs px-2 py-0.5 font-mono">
                    {project.duration}
                  </div>
                  {/* Category tag */}
                  <div className="absolute top-2 left-2 bg-spider-red/90 text-white text-xs px-2 py-0.5 font-semibold uppercase tracking-wider">
                    {project.category.split(' ')[0]}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-spider-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag text-[10px] px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <FaEye className="text-spider-red/60 text-[10px]" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                </div>

                {/* Red glow border on hover */}
                <div className="absolute inset-0 rounded-sm border border-transparent group-hover:border-spider-red/60 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] modal-backdrop flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-spider-dark border border-spider-red/40 shadow-red-glow-lg rounded-sm overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-spider-red/20 border border-spider-red/40 flex items-center justify-center text-white hover:bg-spider-red transition-colors duration-300"
              >
                <FaTimes />
              </button>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-spider-red pointer-events-none" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-spider-red pointer-events-none" />

              {/* Iframe */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`${selectedProject.videoUrl}?autoplay=1&rel=0`}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {selectedProject.title}
                  </h3>
                  <span className="tag flex-shrink-0">{selectedProject.category}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
