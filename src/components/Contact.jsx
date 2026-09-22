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
      y: 25,
      stagger: 0.12,
      duration: 1,
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
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSent(false), 5000);
        },
        () => {
          setLoading(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <section id="contact" ref={container} className="relative py-32 section-bg-primary overflow-hidden section-contained" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      {/* Ambient glow */}
      <div className="ambient-glow red absolute top-0 right-0" />
      <div className="ambient-glow violet absolute bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="contact-element text-center mb-20 relative z-10">
          <p className="section-label">
            — Contact —
          </p>
          <h2 className="section-title text-5xl md:text-7xl tracking-widest">
            LET'S <span className="text-gradient-red">COLLABORATE</span>
          </h2>
          <div className="section-divider" />
          <p className="max-w-xl mx-auto text-sm tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="contact-element p-6 rounded-sm flex items-center gap-5 transition-all duration-300 hover:translate-y-[-2px]" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
              <FaEnvelope className="text-xl" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Email</p>
                <a href="mailto:rajatisworking007@gmail.com" className="text-sm hover:opacity-80 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  rajatisworking007@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-element p-6 rounded-sm flex items-center gap-5 transition-all duration-300 hover:translate-y-[-2px]" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
              <FaWhatsapp className="text-xl" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>WhatsApp</p>
                <a href="https://wa.me/918305618020" className="text-sm hover:opacity-80 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  +918305618020
                </a>
              </div>
            </div>

            <div className="contact-element p-6 rounded-sm" style={{ background: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent-primary)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full animate-pulse-red" style={{ background: 'var(--accent-primary)', boxShadow: '0 0 8px rgba(230,57,70,0.6)' }} />
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Status: Available</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Currently accepting new projects. Expect a response within 24 hours.
              </p>
            </div>

            <div className="contact-element pt-4">
              <p className="text-[9px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Connect on Social</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 hover:-translate-y-2"
                    style={{ 
                      border: '1px solid var(--border-subtle)', 
                      color: 'var(--text-muted)', 
                      background: 'var(--bg-secondary)' 
                    }}
                    aria-label={social.label}
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
                         style={{ background: 'var(--glow-primary)', boxShadow: '0 0 25px rgba(230,57,70,0.5)' }} />
                    {/* Icon */}
                    <social.icon className="text-lg relative z-10 transition-colors duration-500 group-hover:text-[#E63946]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-element p-8 md:p-10 relative rounded-sm" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: 'rgba(230,57,70,0.3)' }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: 'rgba(230,57,70,0.3)' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full text-sm px-4 py-3 outline-none transition-colors rounded-sm"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                    placeholder="Rajat"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full text-sm px-4 py-3 outline-none transition-colors rounded-sm"
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full text-sm px-4 py-3 outline-none transition-colors rounded-sm"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="Video Editing Project"
                />
              </div>

              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full text-sm px-4 py-3 outline-none transition-colors resize-none rounded-sm"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full font-semibold uppercase tracking-widest text-xs py-4 rounded-sm disabled:opacity-50 disabled:cursor-wait"
              >
                <span className="relative z-10">
                  {loading ? 'Sending...' : sent ? '✓ Message Sent!' : 'Send Message'}
                </span>
              </button>
              {error && (
                <p className="p-3 text-xs text-center mt-4 tracking-widest uppercase rounded-sm" style={{ color: 'var(--accent-crimson)', border: '1px solid var(--accent-crimson)', background: 'rgba(201,53,69,0.08)' }}>
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
