import React from 'react';

const projectData = [
  {
    title: "Network Traffic Analyzer",
    description: "A Python-based tool to capture and analyze network packets, identifying suspicious activity and potential threats using Scapy.",
    tags: ["Python", "Scapy", "Network Security"],
    link: "#"
  },
  {
    title: "Keylogger & Defense Script",
    description: "Developed a simple keylogger to understand its mechanics, and a corresponding script to detect and block such malware.",
    tags: ["Python", "System Security", "Malware Analysis"],
    link: "#"
  },
  {
    title: "Vulnerability Scanner",
    description: "A script that scans a target for open ports and common vulnerabilities using Nmap and public vulnerability databases.",
    tags: ["Bash", "Nmap", "Vulnerability Assessment"],
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        <span className="text-brand-red">03.</span> Portfolio
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-dark-gray border border-medium-gray p-6 flex flex-col hover:border-brand-red transition-colors">
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="flex-grow mb-4 text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm bg-medium-gray text-gray-300 px-2 py-1">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-white self-start">
              View Project &gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;