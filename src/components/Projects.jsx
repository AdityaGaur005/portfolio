import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Serverless File Sharing System",
      description: "A secure cloud-based file sharing platform that allows users to upload, store, and share files instantly using a serverless architecture. Designed for scalability, fast access, and reduced infrastructure management.",
      techStack: ["AWS Lambda", "Amazon S3", "API Gateway", "IAM", "Python", "React", "Tailwind CSS"],
      github: "https://github.com/AdityaGaur005/aws-serverless-filesharing",
      live: "#"
    },
    {
      title: "Real-Time Fake News Detector",
      description: "An AI-powered system that analyzes news content in real time to detect whether information is genuine or fake. It verifies claims using trusted sources and provides credibility insights.",
      techStack: ["Python", "Machine Learning", "NLP", "OpenAI / Gemini API", "FastAPI"],
      github: "https://github.com/AdityaGaur005/fake_news_detector",
      live: "#"
    },
    {
      title: "AI-Powered CI/CD Failure Analyzer",
      description: "An intelligent DevOps solution that monitors CI/CD pipeline executions, detects build or deployment failures, analyzes logs using AI, and provides root-cause insights with recommended fixes.",
      techStack: ["Python", "Docker", "Jenkins / GitHub Actions", "Gemini API", "FastAPI", "n8n"],
      github: "https://github.com/AdityaGaur005/AI-Powered-CI-CD-Failure-Analyzer",
      live: "#"
    },
    {
      title: "AI Gmail Classifier",
      description: "An AI-powered email automation system that reads incoming Gmail messages, classifies them into categories (Work, College, Important, Spam), and performs smart actions automatically.",
      techStack: ["Python", "Gmail API", "Gemini API", "FastAPI", "OAuth 2.0"],
      github: "https://github.com/AdityaGaur005/AI_gmail_classifier",
      live: "#"
    },
    {
      title: "VM Auto Scaling Controller",
      description: "An intelligent infrastructure automation system that monitors virtual machine workload, CPU, memory, and traffic usage in real time, then automatically scales instances to optimize utilization and cost.",
      techStack: ["Python", "AWS EC2", "Terraform", "Docker", "CloudWatch", "Bash"],
      github: "https://github.com/AdityaGaur005/vm-auto-scaling-controller",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A showcase of my recent work in DevOps, Cloud, and AI." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group flex flex-col h-full ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent-500/10 rounded-xl text-accent-500">
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-accent-600 bg-accent-500/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
