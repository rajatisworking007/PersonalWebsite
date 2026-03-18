import { motion } from 'framer-motion';
import { FaFilm, FaMagic, FaBolt, FaLayerGroup, FaVideo, FaInfinity, FaCheck } from 'react-icons/fa';
import services from '../data/services.json';

const iconMap = {
  FaFilm, FaMagic, FaBolt, FaLayerGroup, FaVideo, FaInfinity,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-spider-dark spider-web-bg overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-spider-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-spider-red text-sm font-semibold uppercase tracking-[0.4em] mb-4">
            — Expertise —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            MY <span className="text-gradient-red">SERVICES</span>
          </h2>
          <span className="red-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Professional video production services tailored to elevate your brand and captivate your audience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaFilm;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 group relative overflow-hidden rounded-sm"
              >
                {/* Glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-spider-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-spider-red/10 border border-spider-red/30 flex items-center justify-center
                                  group-hover:bg-spider-red group-hover:shadow-red-glow transition-all duration-400">
                    <Icon className="text-spider-red text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-spider-red/10 text-7xl font-bold select-none"
                        style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-spider-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCheck className="text-spider-red text-xs flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Bottom red line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-spider-red group-hover:w-full transition-all duration-500 shadow-red-glow-sm" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
