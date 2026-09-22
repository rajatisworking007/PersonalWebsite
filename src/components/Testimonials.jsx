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
      opacity: 0, y: 25, duration: 1.2, ease: 'power2.out'
    });
  }, { scope: container });

  useEffect(() => {
    gsap.fromTo(slideRef.current, 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [current]);

  return (
    <section id="testimonials" ref={container} className="relative py-32 section-bg-secondary overflow-hidden section-contained" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Ambient glow */}
      <div className="ambient-glow red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="testi-header text-center mb-24">
          <p className="section-label">
            — Client Reviews —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            TESTI<span className="text-gradient-red">MONIALS</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          <div
            ref={slideRef}
            className="relative p-10 md:p-16 rounded-sm transition-colors duration-500"
            style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: 'rgba(230,57,70,0.25)' }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: 'rgba(230,57,70,0.25)' }} />

            <FaQuoteLeft className="absolute top-8 left-8 text-6xl" style={{ color: 'var(--border-subtle)' }} />

            <div className="flex gap-2 mb-8 relative z-10">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FaStar key={i} className="text-xs" style={{ color: 'var(--accent-primary)' }} />
              ))}
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-10 relative z-10 italic" style={{ color: 'var(--text-secondary)', fontFamily: 'Playfair Display, serif' }}>
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center gap-5 relative z-10">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                loading="lazy"
                decoding="async"
                className="w-12 h-12 object-cover rounded-sm brightness-90"
                style={{ border: '1px solid var(--border-accent)' }}
              />
              <div>
                <p className="font-bold text-sm tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>{testimonials[current].name}</p>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 relative z-10">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? '40px' : '16px',
                    height: i === current ? '4px' : '2px',
                    background: i === current ? 'var(--accent-primary)' : 'var(--text-muted)',
                    boxShadow: i === current ? '0 0 8px rgba(230,57,70,0.4)' : 'none'
                  }}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
                style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', background: 'var(--bg-primary)' }}
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
                style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-warm))', color: '#ffffff' }}
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
