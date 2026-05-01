import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-accent-500" />,
      title: "Fast & Reliable",
      desc: "Architecting automated pipelines and robust infrastructure."
    },
    {
      icon: <Target className="w-6 h-6 text-accent-500" />,
      title: "Problem Solver",
      desc: "Building AI-powered features for real-world efficiency."
    },
    {
      icon: <User className="w-6 h-6 text-accent-500" />,
      title: "Continuous Learner",
      desc: "Constantly upgrading skills across cloud and modern tech."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am <strong className="text-white font-semibold">Aditya Gaur</strong>, a passionate and driven technology enthusiast focused on DevOps, Cloud Computing, and AI-powered automation. 
            </p>
            <p>
              I enjoy building real-world projects that solve practical problems, improve efficiency, and demonstrate modern engineering practices. My interests include working with AWS, Docker, Terraform, Kubernetes, Python, and automation tools to create scalable and reliable systems.
            </p>
            <p>
              I am continuously learning, strengthening my technical skills, and preparing to contribute to innovative teams through impactful projects and professional growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center bg-accent-500/10 border-accent-500/20 sm:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-2">2+</h3>
              <p className="text-accent-400 font-medium">Years of Learning & Building</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
