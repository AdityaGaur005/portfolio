import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    
    try {
      await fetch("https://formsubmit.co/ajax/aditya2405gaur@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch(err) {
      setFormStatus('idle');
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              <a href="mailto:aditya2405gaur@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me</p>
                  <p className="font-semibold text-lg">aditya2405gaur@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/aditya-gaur005/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Connect on LinkedIn</p>
                  <p className="font-semibold text-lg">Aditya Gaur</p>
                </div>
              </a>

              <a href="https://github.com/AdityaGaur005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Follow on GitHub</p>
                  <p className="font-semibold text-lg">@AdityaGaur005</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Optional: Honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable Captcha for smoother experience */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="_subject"
                  required 
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  required 
                  className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all resize-none font-sans"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full py-4 rounded-xl bg-accent-600 hover:bg-accent-500 text-dark-900 font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && <><Send className="w-5 h-5" /> Send Message</>}
                {formStatus === 'sending' && <><div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" /> Sending...</>}
                {formStatus === 'success' && <>Message Sent Successfully!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
