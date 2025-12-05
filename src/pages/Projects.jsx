import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Network Security Analyzer",
      description: "Advanced network packet analysis tool that captures and analyzes network traffic in real-time. Identifies suspicious activity and potential security threats using deep packet inspection.",
      tech: ["Python", "Scapy", "Network Security", "Real-time Analysis"],
      details: "This tool monitors network packets, detects anomalies, and alerts on suspicious patterns. It includes features for protocol analysis, traffic filtering, and threat classification."
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "Automated vulnerability detection system that scans networks and systems for common security vulnerabilities and misconfigurations.",
      tech: ["Bash", "Nmap", "Python", "CVE Database"],
      details: "Performs comprehensive security scans, identifies open ports, detects outdated services, and cross-references against known vulnerability databases."
    },
    {
      id: 3,
      title: "Security Auditing Tool",
      description: "Comprehensive security audit framework for assessing system and network security posture. Generates detailed compliance reports.",
      tech: ["Python", "Security", "Forensics", "Reporting"],
      details: "Conducts system hardening checks, validates security policies, performs log analysis, and generates comprehensive audit reports for compliance."
    },
    {
      id: 4,
      title: "Malware Analysis Lab",
      description: "Isolated environment for analyzing malware behavior and reverse engineering executable files safely.",
      tech: ["Reverse Engineering", "Sandbox", "Disassembly", "Dynamic Analysis"],
      details: "Provides tools for safe malware analysis, behavioral monitoring, and signature extraction without risking system compromise."
    },
    {
      id: 5,
      title: "Cryptography Toolkit",
      description: "Educational toolkit implementing various cryptographic algorithms and security protocols from scratch.",
      tech: ["Cryptography", "Python", "RSA", "AES"],
      details: "Demonstrates encryption, hashing, digital signatures, and secure key exchange protocols with educational implementations."
    },
    {
      id: 6,
      title: "Web Application Firewall",
      description: "Custom WAF implementation to protect web applications from common OWASP Top 10 vulnerabilities.",
      tech: ["Python", "Flask", "Web Security", "WAF"],
      details: "Implements request filtering, payload inspection, and threat detection for web application protection."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090909] via-[#0f0f0f] to-[#1f0a10] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg border border-red-500/20 p-8 rounded-lg hover:border-red-500/60 transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-gray-500 text-sm mb-6">{project.details}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-red-500/10 text-red-400 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;