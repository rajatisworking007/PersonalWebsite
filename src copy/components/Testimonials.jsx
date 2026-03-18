import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'sarthak shrivastava',
    role: 'Rapper',
    avatar: 'public/images/IMG_5194.jpeg',
    rating: 5,
    text: "Sach bolu toh banda sirf edit nahi karta, pura vibe build karta hai ,Agar kisi ko apne content ko next level pe le jaana hai, Rajat is the guy 💯",
  },
  {
    id: 2,
    name: 'Shreshth Singh',
    role: 'Content Creator',
    avatar: 'public/images/IMG_5195.jpeg',
    rating: 5,
    text: "Working with Rajat has been smooth and reliable,If you want someone who can elevate your videos and deliver consistently, Rajat do well .",
  },
  {
    id: 3,
    name: 'Sparshika',
    role: 'Graphic Designer ',
    avatar: 'public/images/IMG_5198.jpeg',
    rating: 5,
    text: "abcd",
  },
  {
    id: 4,
    name: 'Yash Sarathe',
    role: 'Social Media Manager & editor',
    avatar: 'src/assets/IMG_5199.jpeg',
    rating: 5,
    text: "Abcd",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-28 bg-spider-black overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-spider-red/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-spider-red text-sm font-semibold uppercase tracking-[0.4em] mb-4">
            — Reviews —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            CLIENT <span className="text-gradient-red">TESTIMONIALS</span>
          </h2>
          <span className="red-line mx-auto" />
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative bg-spider-dark border border-white/5 p-8 md:p-12 rounded-sm hover:border-spider-red/30 transition-colors duration-500"
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
            >
              {/* Big quote mark */}
              <FaQuoteLeft className="absolute top-6 left-6 text-spider-red/10 text-8xl" />

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-spider-red/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-spider-red/40" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="text-spider-red text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-spider-red/60"
                    style={{ boxShadow: '0 0 15px rgba(255,26,26,0.3)' }}
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base">{testimonials[current].name}</p>
                  <p className="text-spider-red text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${i === current
                    ? 'w-8 h-2 bg-spider-red shadow-red-glow-sm'
                    : 'w-2 h-2 bg-gray-700 hover:bg-gray-500 rounded-full'
                    }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 border border-gray-700 hover:border-spider-red hover:shadow-red-glow-sm
                           flex items-center justify-center text-gray-400 hover:text-spider-red transition-all duration-300"
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 bg-spider-red border border-spider-red hover:shadow-red-glow
                           flex items-center justify-center text-white transition-all duration-300"
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
