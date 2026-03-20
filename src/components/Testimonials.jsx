import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import avatar1 from '../assets/IMG_5194.jpeg';
import avatar2 from '../assets/IMG_5195.jpeg';
import avatar3 from '../assets/IMG_5198.jpeg';
import avatar4 from '../assets/IMG_5199.jpeg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'sarthak shrivastava',
    role: 'Rapper',
    avatar: avatar1,
    rating: 5,
    text: "Sach bolu toh banda sirf edit nahi karta, pura vibe build karta hai ,Agar kisi ko apne content ko next level pe le jaana hai, Rajat is the guy 💯",
  },
  {
    id: 2,
    name: 'Shreshth Singh',
    role: 'Content Creator',
    avatar: avatar2,
    rating: 5,
    text: "Working with Rajat has been smooth and reliable,If you want someone who can elevate your videos and deliver consistently, Rajat do well .",
  },
  {
    id: 3,
    name: 'Sparshika',
    role: 'Graphic Designer ',
    avatar: avatar3,
    rating: 5,
    text: "abcd",
  },
  {
    id: 4,
    name: 'Yash Sarathe',
    role: 'Social Media Manager & editor',
    avatar: avatar4,
    rating: 5,
    text: "Abcd",
  },
];

export default function Testimonials() {
  const container = useRef(null);
  const slideRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  useGSAP(() => {
    gsap.from('.testi-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0, filter: 'blur(5px)', duration: 1.5, ease: 'power2.out'
    });
  }, { scope: container });

  useEffect(() => {
    // Sharp Noir Cut Transition
    gsap.fromTo(slideRef.current, 
      { opacity: 0, clipPath: 'inset(0 100% 0 0)' }, 
      { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power4.inOut' }
    );
  }, [current]);

  return (
    <section id="testimonials" ref={container} className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="testi-header text-center mb-24">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-4">
            — Declassified Logs —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            OPERATIVE REVIEWS
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto my-8" />
        </div>

        <div className="relative">
          <div
            ref={slideRef}
            className="relative bg-black border border-white/5 p-10 md:p-16 hover:border-white/20 transition-colors duration-500"
          >
            {/* Minimal Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10" />

            <FaQuoteLeft className="absolute top-8 left-8 text-white/5 text-6xl" />

            <div className="flex gap-2 mb-8 relative z-10">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FaStar key={i} className="text-white/80 text-xs" />
              ))}
            </div>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 relative z-10 italic">
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center gap-5 relative z-10">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-12 h-12 grayscale contrast-150 brightness-75 object-cover border border-white/30"
              />
              <div>
                <p className="text-white/90 font-bold text-sm tracking-wider uppercase">{testimonials[current].name}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 relative z-10">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${i === current
                    ? 'w-10 h-1 bg-white'
                    : 'w-4 h-px bg-gray-700 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-colors bg-[#030303]"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
