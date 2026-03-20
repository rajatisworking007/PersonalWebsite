import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCut, FaMagic, FaYoutube, FaMobileAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FaCut,
    title: 'CINEMATIC EDITING',
    desc: 'Transforming raw footage into compelling, high-end narratives with visceral pacing and sharp cuts.',
    features: ['Narrative Assembly', 'Color Grading', 'Sound Design']
  },
  {
    icon: FaMagic,
    title: 'VFX & MOTION',
    desc: 'Enhancing reality through seamless compositing, stark motion graphics, and atmospheric visual effects.',
    features: ['Compositing', '2D/3D Tracking', 'Title Design']
  },
  {
    icon: FaYoutube,
    title: 'YOUTUBE CONTENT',
    desc: 'High-retention edits optimized for the algorithm, combining fast-paced storytelling with cinematic polish.',
    features: ['A/B Testing Cuts', 'Hook Optimization', 'Pacing']
  },
  {
    icon: FaMobileAlt,
    title: 'SHORTS & REELS',
    desc: 'Vertical storytelling designed to capture attention instantly in infinite scroll feeds.',
    features: ['Viral Formatting', 'Dynamic Captions', 'Trend Adaptation']
  }
];

export default function Services() {
  const container = useRef();

  useGSAP(() => {
    // Sharp Noir Entrance
    gsap.from('.services-header', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.fromTo('.service-card', 
      {
        opacity: 0,
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
      },
      {
        scrollTrigger: { trigger: container.current, start: 'top 75%' },
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.inOut'
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative py-32 bg-[#030303] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="services-header text-center mb-24">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-6">
            — Capabilities —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            SERVICES
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto my-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative bg-black border border-white/5 p-8 transition-all duration-500 hover:border-white/30 hover:bg-[#050505]"
            >
              {/* Noir shadow/vignette inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none opacity-80" />

              <div className="relative z-10">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-500">
                  <service.icon className="text-white group-hover:text-black text-xl transition-colors duration-500" />
                </div>

                <div className="text-white/20 text-4xl font-bold absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  0{index + 1}
                </div>

                <h3 className="text-white font-semibold tracking-wider mb-4 uppercase text-sm">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 h-20">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest">
                      <span className="w-4 h-px bg-white/20 group-hover:w-6 transition-all duration-300 group-hover:bg-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
