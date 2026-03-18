import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaExpand, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import thumbImg from '../assets/IMG_5170.jpeg';

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);

  return (
    <section id="showreel" className="relative py-28 bg-spider-dark spider-web-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-spider-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-spider-red text-sm font-semibold uppercase tracking-[0.4em] mb-4">
            — Watch —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            MY <span className="text-gradient-red">SHOWREEL</span>
          </h2>
          <span className="red-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            A curated collection of my best work — from cinematic storytelling to viral social content.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-spider-red via-spider-red-dark to-spider-red opacity-40 blur-sm rounded-sm" />

          <div className="relative bg-spider-black overflow-hidden shadow-red-glow-lg aspect-video rounded-sm border border-spider-red/30">
            {/* Thumbnail / Play overlay */}
            {!playing ? (
              <div
                className="absolute inset-0 z-10 cursor-pointer group"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={thumbImg}
                  alt="Showreel Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-spider-black/60 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-spider-red flex items-center justify-center shadow-red-glow-lg group-hover:shadow-red-glow"
                    animate={{ boxShadow: ['0 0 20px rgba(255,26,26,0.5)', '0 0 50px rgba(255,26,26,0.9)', '0 0 20px rgba(255,26,26,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaPlay className="text-white text-3xl ml-1" />
                  </motion.div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-spider-red" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-spider-red" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-spider-red" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-spider-red" />
              </div>
            ) : (
              <iframe
                ref={iframeRef}
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/sJTKp5j-Nd0?si=Bd_VQmxnHr5BVrQ"
                title="Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Stats below player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { icon: '🎬', label: '250+ Videos Edited' },
            { icon: '🏆', label: 'Award Winning Work' },
            { icon: '📱', label: 'Multi-Platform Ready' },
            { icon: '⚡', label: 'Fast Turnaround' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
