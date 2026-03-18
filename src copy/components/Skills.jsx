import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import skills from '../data/skills.json';

const categoryColors = {
  Editing: '#9999FF',
  VFX: '#FF6B6B',
  Color: '#FFA500',
  Design: '#31A8FF',
  Audio: '#00FF88',
  '3D': '#F5792A',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="relative py-28 bg-spider-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-spider-red/5 blur-[100px] pointer-events-none" />

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
            — Toolkit —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            EDITING <span className="text-gradient-red">SKILLS</span>
          </h2>
          <span className="red-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Industry-leading tools mastered through years of hands-on professional experience.
          </p>
        </motion.div>

        {/* Skills list */}
        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: categoryColors[skill.category] || '#ff1a1a' }}
                  />
                  <span className="text-white font-semibold text-base group-hover:text-spider-red transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-sm font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: `${categoryColors[skill.category]}15`,
                      color: categoryColors[skill.category],
                      border: `1px solid ${categoryColors[skill.category]}30`
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                <span className="text-spider-red font-bold text-sm">{skill.level}%</span>
              </div>

              {/* Bar background */}
              <div className="relative h-2 bg-spider-gray rounded-full overflow-hidden">
                {/* Animated fill */}
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #b30000, #ff1a1a, #ff4444)`,
                    boxShadow: '0 0 10px rgba(255,26,26,0.5)',
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software icons legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Nuke', 'Cinema 4D', 'Audacity', 'Lightroom', 'CapCut', 'Logic Pro X'].map((tool, i) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.1, borderColor: '#ff1a1a', color: '#ff1a1a' }}
                className="px-4 py-2 border border-gray-800 text-gray-500 text-sm font-medium transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
