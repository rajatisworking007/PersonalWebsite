import { motion } from 'framer-motion';
import { FaAward, FaFilm, FaGlobe, FaStar } from 'react-icons/fa';
import profileImg from '../assets/Screenshot 2026-03-16 at 4.38.10 PM.png';

const achievements = [
  { icon: FaFilm, value: ' 150+', label: 'Videos Edited' },
  { icon: FaGlobe, value: '50k+', label: 'Total Views' },
  { icon: FaStar, value: '50+', label: 'Happy Clients' },
  { icon: FaAward, value: '15+', label: 'Awards Won' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-spider-dark overflow-hidden spider-web-bg">
      {/* glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-spider-red/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Decorative squares */}
            <div className="absolute -top-6 -left-6 w-20 h-20 border border-spider-red/40 z-0" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border border-spider-red/40 z-0" />

            {/* Image container */}
            <div className="relative z-10">
              {/* Red glow border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-spider-red/50 to-transparent blur-sm" />
              <div className="relative overflow-hidden border-2 border-spider-red/60"
                style={{ boxShadow: '0 0 40px rgba(255,26,26,0.3)' }}>
                <img
                  src={profileImg}
                  alt="Rajat - Video Editor"
                  className="w-full aspect-[3/4] object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spider-black/80 to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-spider-red text-xs font-semibold uppercase tracking-widest">Since 2024</p>
                  <p className="text-white text-2xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    Crafting Visual Stories
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-1/3 bg-spider-dark border border-spider-red/40 p-4 shadow-red-glow z-20"
            >
              <div className="text-spider-red text-2xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>2+</div>
              <div className="text-gray-400 text-xs">Years Exp</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-spider-red text-sm font-semibold uppercase tracking-[0.4em] mb-4">
              — About Me —
            </p>
            <h2 className="section-title text-4xl md:text-6xl mb-6">
              THE <span className="text-gradient-red">STORYTELLER</span>
              <br />BEHIND THE LENS
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              Hey, I'm <span className="text-white font-semibold">RAJAT</span> — a cinematic video editor
              with 2 years of experience transforming raw footage into compelling visual narratives.
              Specializing in high-end video production, VFX compositing, and social media content.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From Hollywood-inspired cinematic cuts to viral YouTube content and stunning brand films,
              I bring an obsessive attention to detail and a deep passion for storytelling through every frame.
              My Spider-Man-inspired work ethic: swing in, deliver, and swing out — always on time.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Cinematography', 'Color Grading', 'VFX Artist', 'Motion Designer', 'Brand Storytelling'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-5">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 flex items-center gap-3 group rounded-sm"
                >
                  <div className="w-10 h-10 bg-spider-red/10 border border-spider-red/20 flex items-center justify-center
                                  group-hover:bg-spider-red group-hover:border-spider-red transition-all duration-300 flex-shrink-0">
                    <item.icon className="text-spider-red text-sm group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-spider-red text-xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {item.value}
                    </div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
