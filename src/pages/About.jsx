import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090909] via-[#0f0f0f] to-[#1f0a10] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        
        <motion.div
          className="bg-white/5 backdrop-blur-lg border border-red-500/20 p-12 rounded-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate cybersecurity enthusiast dedicated to building a more secure digital world. With expertise in network security, penetration testing, and ethical hacking, I combine theoretical knowledge with practical skills to solve complex security challenges.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My journey in cybersecurity has equipped me with hands-on experience in vulnerability assessment, incident response, and security auditing. I'm committed to continuous learning and staying updated with the latest security trends and technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "Bash",
              "Network Security",
              "Penetration Testing",
              "Forensics",
              "Linux",
              "Metasploit",
              "Wireshark",
              "SQL Injection",
              "XSS Attacks",
              "Incident Response",
              "Security Auditing"
            ].map((skill) => (
              <div key={skill} className="bg-red-500/10 border border-red-500/30 p-4 rounded text-center text-gray-200 hover:bg-red-500/20 transition-all">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;