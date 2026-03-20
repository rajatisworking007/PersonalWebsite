import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/with._rajat?igsh=MWdzeGE0N2dqbjl6bQ%3D%3D&utm_source=qr' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/hereimrajat?s=21https://x.com/hereimrajat?s=21' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajat-tarua-696278384?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/918305618020' },
];

export default function Contact() {
  const container = useRef(null);
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useGSAP(() => {
    gsap.from('.contact-element', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_8fppqng';
    const templateId = 'template_yexhsg5';
    const publicKey = 'DOjZrlWRYYBaqNSob';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          setLoading(false);
          setSent(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setLoading(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <section id="contact" ref={container} className="relative py-32 bg-[#030303] border-t border-white/5 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="contact-element text-center mb-20 relative z-10">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.6em] mb-4">
            — Dispatch —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest text-white/90">
            TRANSMIT SECURELY
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto my-8" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm tracking-wide">
            Ready to initiate a project? Send your dossier. Silence is the only alternative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
          {/* Left: contact info (Noir Minimalist) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="contact-element p-6 border border-white/5 bg-black hover:border-white/20 transition-colors flex items-center gap-5">
              <FaEnvelope className="text-white/50 text-xl" />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Comm-Link (Email)</p>
                <a href="mailto:rajatisworking007@gmail.com" className="text-white text-sm hover:text-gray-300 transition-colors">
                  rajatisworking007@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-element p-6 border border-white/5 bg-black hover:border-white/20 transition-colors flex items-center gap-5">
              <FaWhatsapp className="text-white/50 text-xl" />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Direct Line (WhatsApp)</p>
                <a href="https://wa.me/918305618020" className="text-white text-sm hover:text-gray-300 transition-colors">
                  +918305618020
                </a>
              </div>
            </div>

            <div className="contact-element p-6 bg-[#050505] border-l-2 border-white/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse blur-[1px]" />
                <span className="text-white text-[10px] uppercase tracking-widest">Status: Active</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Accepting highly classified edits for Q2. Encrypted transmission acknowledged within 24 standard hours.
              </p>
            </div>

            <div className="contact-element pt-4">
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-4">Known Aliases (Socials)</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form (Noir Sharp Borders) */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-element bg-black p-8 md:p-10 border border-white/5 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Subject Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-white/10 focus:border-white/50 text-white text-sm px-4 py-3 outline-none transition-colors placeholder-white/10"
                    placeholder="rajat"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Return Coordinates (Email)</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-white/10 focus:border-white/50 text-white text-sm px-4 py-3 outline-none transition-colors placeholder-white/10"
                    placeholder="Rajatisworking007@gmail.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Objective (Subject)</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#050505] border border-white/10 focus:border-white/50 text-white text-sm px-4 py-3 outline-none transition-colors placeholder-white/10"
                  placeholder="Classified Editing Operation"
                />
              </div>

              <div className="mb-8">
                <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Intel (Message)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-[#050505] border border-white/10 focus:border-white/50 text-white text-sm px-4 py-3 outline-none transition-colors placeholder-white/10 resize-none"
                  placeholder="Provide parameters..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold uppercase tracking-widest text-xs py-4 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? 'Transmitting...' : sent ? 'Transmission Confirmed' : 'Initiate Transfer'}
              </button>
              {error && (
                <p className="text-red-900 border border-red-900 bg-red-900/10 p-3 text-xs text-center mt-4 tracking-widest uppercase">
                  Comms Failed. Retry.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
