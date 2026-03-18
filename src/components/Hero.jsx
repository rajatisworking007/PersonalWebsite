import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaPlay, FaChevronDown } from 'react-icons/fa';
import posterImg from '../assets/sagittarius-a-black-5120x2880-25401.jpg';
import bgVideo from '../assets/Wallpaper F1 4K TEST EDIT AMD_2160p60.mp4';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '100k+', label: 'Total Views' },
  { value: '50+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-spider-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster={posterImg}
        >
          <source
            src={bgVideo}
            type="video/mp4"
          />
        </video>
        {/* Video overlay gradient */}
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Static atmospheric glows — GPU composited, no JS animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.12) 0%, transparent 70%)', willChange: 'auto' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-2/3 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(179,0,0,0.07) 0%, transparent 70%)' }} />
        {/* Diagonal red lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 40px,
              rgba(255,26,26,1) 40px,
              rgba(255,26,26,1) 41px
            )`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-spider-red/40 bg-spider-red/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-spider-red animate-pulse" />
          <span className="text-spider-red text-xs font-semibold uppercase tracking-[0.3em]">
            Available for projects
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="section-title text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
          style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
        >
          <span className="block text-white">CINEMATIC</span>
          <span className="block text-gradient-red glow-text">STORYTELLING</span>
          <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-2 font-normal tracking-[0.2em]">
            Video Editor
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed"
        >
          Crafting visually striking narratives through expert video editing, VFX, and motion graphics.
          Turning raw footage into cinematic masterpieces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Link to="showreel" smooth duration={800}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,26,26,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3 text-base px-10 py-4"
            >
              <FaPlay className="text-sm" />
              Watch Showreel
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={800}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,26,26,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-base px-10 py-4"
            >
              Hire Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-spider-red glow-text" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — CSS animation instead of JS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer animate-bounce"
        style={{ animationDuration: '2s' }}>
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <FaChevronDown className="text-spider-red text-lg" />
      </div>
    </section>
  );
}
