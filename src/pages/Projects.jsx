import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import { Briefcase, FolderGit2, Award, Eye, Github } from "lucide-react";
import comptiaLogo from "../assets/comptia.png";

const workExperience = [
  {
    id: 1,
    title: "Penetration Tester",
    company: "Warsharks",
    companyLink: "#", // Add company link
    companyLogo: "/logos/warsharks.png", // Add logo to public/logos
    period: "Part-Time",
    location: "Remote - Noida, Uttar Pradesh",
    description: "Conducted vulnerability assessments, exploited security flaws, and prepared reports with remediation strategies to strengthen client systems.",
    tech: ["Vulnerability Assessment", "Penetration Testing", "Reporting"],
    certificateLink: "/certificates/warsharks-cert.pdf" // Add certificate path
  },
  {
    id: 2,
    title: "Cyber Security Instructor",
    company: "MRGS Infoway",
    companyLink: "#",
    companyLogo: "/logos/mrgs.png",
    period: "Feb 2025 – April 2025",
    location: "Remote - Kolkata, West Bengal",
    description: "Cyber Vahini Project – Training female students in cybersecurity fundamentals, VAPT, and digital security.",
    tech: ["Training", "VAPT", "Cybersecurity Fundamentals"],
    certificateLink: null // No certificate for this one
  },
  {
    id: 3,
    title: "VAPT Tester",
    company: "Hacktify Cyber Security",
    companyLink: "#",
    companyLogo: "/logos/hacktify.png",
    period: "Undisclosed",
    location: "Remote - Mumbai, India",
    description: "Performed advanced penetration testing on enterprise networks, leveraging Burp Suite, Nmap, and Metasploit to identify critical vulnerabilities and provide comprehensive risk mitigation strategies.",
    tech: ["Burp Suite", "Nmap", "Metasploit", "Penetration Testing"],
    certificateLink: "/certificates/hacktify-cert.pdf"
  },
  {
    id: 4,
    title: "Junior Cyber Crime Investigator",
    company: "EDCI",
    companyLink: "#",
    companyLogo: "/logos/edci.png",
    period: "Undisclosed",
    location: "Onsite - Kolkata, West Bengal",
    description: "Specialized in digital forensics and incident response, utilizing Autopsy, FTK, EnCase, and Wireshark for deep forensic analysis and cyber threat tracing.",
    tech: ["Autopsy", "FTK", "EnCase", "Wireshark", "Forensics"],
    certificateLink: "/certificates/edci-cert.pdf"
  },
  {
    id: 5,
    title: "Guest Lecturer",
    company: "Behala Government Polytechnic",
    companyLink: "#",
    companyLogo: "/logos/behala.png",
    period: "Undisclosed",
    location: "Onsite - Kolkata, West Bengal",
    description: "Delivered expert lectures on Networking and VAPT, guiding students through cybersecurity concepts and penetration testing methodologies.",
    tech: ["Lecturing", "Networking", "VAPT"],
    certificateLink: null
  },
  {
    id: 6,
    title: "Guest Lecturer",
    company: "Sister Nivedita University",
    companyLink: "#",
    companyLogo: "/logos/snu.png",
    period: "June 2022 – Sep 2023",
    location: "Onsite - Kolkata, West Bengal",
    description: "Delivered insightful lectures on Digital Forensics and Cybersecurity, educating students on threat analysis and forensic investigation techniques.",
    tech: ["Digital Forensics", "Cybersecurity", "Lecturing"],
    certificateLink: null
  },
  {
    id: 7,
    title: "VAPT Intern",
    company: "Indian Cyber Security Solutions",
    companyLink: "#",
    companyLogo: "/logos/icss.png",
    period: "July 2021 – May 2022",
    location: "On-site - Kolkata, West Bengal",
    description: "Conducted network vulnerability assessments and penetration testing using tools like Nmap, Nessus, Burp Suite, and Metasploit to identify and mitigate security risks.",
    tech: ["Nmap", "Nessus", "Burp Suite", "Metasploit"],
    certificateLink: "/certificates/icss-cert.pdf"
  }
];

const certifications = [
  {
    id: 1,
    name: "CompTIA Security+",
    issuer: "CompTIA",
    link: "https://www.credly.com/badges/97e48515-d12d-411a-a2ec-2d3b69db97fe/public_url",
    image: comptiaLogo
  },
  
];

const projectsData = [
  {
    id: 1,
    title: "BLACKICE AI MCP Agents v4.0",
    description: "Advanced AI-Powered Penetration Testing Framework with Autonomous Agents, Intelligent Decision Engine, and 150+ Security Tools.",
    tech: ["AI", "Penetration Testing", "Automation"],
    image: "/projects/blackice.jpg", // Add image to public/projects
    githubLink: "#" // Add GitHub link
  },
  {
    id: 2,
    title: "Honeypot",
    description: "Designed to detect, log, and analyze unauthorized access using multi-protocol honeypots (SSH, FTP, DNS), real-time monitoring, and automated IP blacklisting.",
    tech: ["Honeypot", "Intrusion Detection", "Threat Analysis"],
    image: "/projects/honeypot.jpg", // Add image to public/projects
    githubLink: "#"
  },
  {
    id: 3,
    title: "BADNET v1",
    description: "AI-powered cyber attack detection and prediction system with real-time monitoring, leveraging ML algorithms for DoS, Probe, R2L, and U2R attacks.",
    tech: ["Machine Learning", "Attack Detection", "CLI"],
    image: "/projects/badnet.jpg", // Add image to public/projects
    githubLink: "#"
  }
];

const Projects = ({ hash }) => {
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    // If a hash is provided, set the active tab accordingly
    if (hash === 'projects' || hash === 'certifications') {
      setActiveTab(hash);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-16 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience & Projects
        </motion.h1>

        {/* Tab Section */}
        <div className="mb-12">
          <div className="flex border-b border-gray-700">
            <button onClick={() => setActiveTab('experience')} className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'experience' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}>
              <Briefcase size={16} /> Work Experience
            </button>
            <button onClick={() => setActiveTab('projects')} className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'projects' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}>
              <FolderGit2 size={16} /> Projects
            </button>
            <button onClick={() => setActiveTab('certifications')} className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'certifications' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}>
              <Award size={16} /> Certifications
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {/* Work Experience Content */}
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {workExperience.map((job, i) => {
                    let logoUrl = job.companyLogo; // Fallback to local logo if specified
                    try {
                      if (job.companyLink && job.companyLink !== '#') {
                        const domain = new URL(job.companyLink).hostname;
                        logoUrl = `https://logo.clearbit.com/${domain}`;
                      }
                    } catch (e) {
                      console.error("Invalid company URL, using fallback logo:", job.companyLink);
                    }

                    return (
                      <motion.div key={job.id} className="flex gap-5 bg-[#161b22]/70 border border-gray-700 p-6 rounded-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                        <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                          <img src={logoUrl} alt={`${job.company} logo`} className="w-16 h-16 object-contain rounded-md bg-white p-1" onError={(e) => { e.currentTarget.src = '/logos/placeholder-logo.png'; }} />
                        </a>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                            <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{job.company}</a>
                          </div>
                          <span className="text-sm text-gray-500 text-right">{job.period}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{job.location}</p>
                        <p className="text-gray-400 mb-4 text-sm">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tech.map((tech) => (
                            <span key={tech} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">{tech}</span>
                          ))}
                        </div>
                  {job.certificateLink && (
                    <a href={job.certificateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline mt-4">
                      <Eye size={14} /> View Certificate
                    </a>
                  )}
                      </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Projects Content */}
              {activeTab === 'projects' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {projectsData.map((project, i) => (
                    <motion.div key={project.id} className="bg-[#161b22]/70 border border-gray-700 rounded-lg flex flex-col overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-4 flex-grow text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">{tech}</span>
                          ))}
                        </div>
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline mt-4">
                            <Github size={14} /> View on GitHub
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Certifications Content */}
              {activeTab === 'certifications' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert) => (
                    <a href={cert.link} key={cert.id} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 bg-[#161b22]/70 border border-gray-700 p-6 rounded-lg hover:border-blue-400/50 transition-colors aspect-square">
                      <div className="w-full flex-1 flex items-center justify-center bg-white rounded-md p-2 overflow-hidden">
                        <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-white text-lg">{cert.name}</p>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;