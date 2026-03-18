import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: '#', color: '#E1306C' },
  { icon: FaYoutube, label: 'YouTube', href: '#', color: '#FF0000' },
  { icon: FaTwitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: '#', color: '#25D366' },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmotionJS credentials from https://dashboard.emailjs.com/
    // Service ID, Template ID, Public Key
    const serviceId = 'service_8fppqng';
    const templateId = 'template_yexhsg5';
    const publicKey = 'DOjZrlWRYYBaqNSob';

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-28 bg-spider-dark overflow-hidden spider-web-bg">
      {/* glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-spider-red/6 blur-[100px] pointer-events-none" />

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
            — Get In Touch —
          </p>
          <h2 className="section-title text-5xl md:text-7xl">
            LET'S <span className="text-gradient-red">COLLABORATE</span>
          </h2>
          <span className="red-line mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Ready to create something cinematic? Send a message and let's build something legendary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="glass-card p-6 group flex items-center gap-4 rounded-sm">
              <div className="w-12 h-12 bg-spider-red/10 border border-spider-red/30 flex items-center justify-center
                              group-hover:bg-spider-red group-hover:border-spider-red transition-all duration-300 flex-shrink-0">
                <FaEnvelope className="text-spider-red group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:rajatisworking007@gmail.com" className="text-white text-sm font-medium hover:text-spider-red transition-colors duration-300">
                  rajatisworking007@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-6 group flex items-center gap-4 rounded-sm">
              <div className="w-12 h-12 bg-spider-red/10 border border-spider-red/30 flex items-center justify-center
                              group-hover:bg-spider-red group-hover:border-spider-red transition-all duration-300 flex-shrink-0">
                <FaWhatsapp className="text-spider-red group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/918305618020" className="text-white text-sm font-medium hover:text-spider-red transition-colors duration-300">
                  +918305618020
                </a>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Available Now</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new clients for Q2 2026. Response within 24 hours.
              </p>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Social Media</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -4 }}
                    className="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-500
                               hover:border-spider-red hover:text-spider-red hover:shadow-red-glow-sm transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-sm space-y-6">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-spider-red/30 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Rajat', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'Rajatisworking007@gmail.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-spider-black border border-gray-800 focus:border-spider-red text-white text-sm px-4 py-3
                                 outline-none transition-all duration-300 placeholder-gray-700
                                 focus:shadow-red-glow-sm rounded-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Cinematic Edit for YouTube Channel"
                  required
                  className="w-full bg-spider-black border border-gray-800 focus:border-spider-red text-white text-sm px-4 py-3
                             outline-none transition-all duration-300 placeholder-gray-700 focus:shadow-red-glow-sm rounded-sm"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-spider-black border border-gray-800 focus:border-spider-red text-white text-sm px-4 py-3
                             outline-none transition-all duration-300 placeholder-gray-700 resize-none focus:shadow-red-glow-sm rounded-sm"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,26,26,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary justify-center flex items-center gap-3 py-4 text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>Sending...</>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </motion.button>
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
