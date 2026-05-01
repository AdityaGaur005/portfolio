import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "VAPT Intern",
      organization: "Global Technology & Information Security (GTIS)",
      duration: "Apr 2025 – May 2025",
      work: [
        "Performed comprehensive vulnerability assessment and penetration testing.",
        "Utilized industry-standard tools including Burp Suite and Kali Linux.",
        "Successfully identified and reported XSS, SQL Injection, and authentication flaws."
      ]
    },
    {
      role: "Application Developer",
      organization: "Teachlly",
      duration: "Dec 2025 – Feb 2026",
      work: [
        "Built a robust parent-teacher communication platform enhancing user engagement.",
        "Integrated Firebase and various third-party APIs for real-time functionalities.",
        "Implemented secure role-based access control protecting sensitive data."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-800/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Work Experience" subtitle="My professional journey and roles." />
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-accent-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:absolute sm:left-1/2 transform sm:-translate-x-1/2">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-accent-500/30 transition-colors">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-accent-400 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>
                  <span className="text-gray-500 text-sm mt-2">{exp.duration}</span>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.work.map((task, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed">
                      <span className="text-accent-500 mr-2 mt-1.5 min-w-[6px] h-1.5 rounded-full bg-accent-500 block"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
