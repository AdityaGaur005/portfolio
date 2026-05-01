import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Cloud, Code2, Database, Brain, Terminal, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Python", "MySQL", "Bash", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS EC2", "AWS Lambda", "Amazon S3", "IAM", "VPC", "CloudWatch", "API Gateway"]
    },
    {
      title: "DevOps & Automation",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["Docker", "Kubernetes", "Terraform", "Linux", "Git", "GitHub", "n8n"]
    },
    {
      title: "Frameworks & APIs",
      icon: <Database className="w-5 h-5" />,
      skills: ["FastAPI", "REST APIs", "React", "Tailwind CSS"]
    },
    {
      title: "AI / ML",
      icon: <Brain className="w-5 h-5" />,
      skills: ["NLP", "Transformer Models", "Model Training", "Evaluation", "OpenAI API", "Gemini API"]
    },
    {
      title: "Other Tools",
      icon: <Shield className="w-5 h-5" />,
      skills: ["Power BI", "Tableau", "Burp Suite", "Kali Linux"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Technologies and tools I use to build robust solutions." />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item} className="glass-card p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-accent-500 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
