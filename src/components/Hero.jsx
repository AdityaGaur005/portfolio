import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import resumePdf from '../../Aditya Gaur resume.pdf';
import profileImg from '../../WhatsApp Image 2026-05-01 at 21.31.40.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-10 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium border border-white/10 bg-white/5 mb-6 text-gray-300">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              I'm <span className="text-white">Aditya Gaur</span>.<br />
              <span className="text-gray-500 text-4xl md:text-5xl lg:text-6xl mt-4 block">Cloud DevOps &<br/> Automation.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              Building intelligent cloud solutions with DevOps, automation, and modern technologies. I focus on creating scalable, reliable systems that solve real-world problems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={resumePdf} 
                download="Aditya_Gaur_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>

              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-transparent text-gray-300 px-8 py-4 rounded-full font-semibold hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:order-2 flex justify-center mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-accent-500 rounded-full blur-[80px] opacity-20 transform translate-x-4 translate-y-4 w-full max-w-[400px] mx-auto"></div>
            <img 
              src={profileImg} 
              alt="Aditya Gaur" 
              className="relative z-10 w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] mx-auto rounded-[2rem] object-cover shadow-2xl border border-white/10"
              style={{ aspectRatio: '4/5' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
