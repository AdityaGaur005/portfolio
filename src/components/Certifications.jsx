import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { name: "PCAP: Programming Essentials in Python", issuer: "Python Institute" },
    { name: "AI Fundamentals", issuer: "IBM" },
    { name: "Cloud Foundations", issuer: "AWS Academy" },
    { name: "Networking Basics", issuer: "Cisco" }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Certifications" subtitle="Professional credentials and continuous learning achievements." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-accent-300 transition-colors">{cert.name}</h4>
                <div className="flex items-center gap-1.5 mt-1 text-gray-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
