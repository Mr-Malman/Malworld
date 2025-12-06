import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. in Cyber Forensic & Cyber Security",
    institution: "University of Madras",
    logo: "/logos/unom.png", // IMPORTANT: Add your logo to the `public/logos` folder
    link: "https://www.unom.ac.in/",
    period: "2023 - Present",
    description: "Focusing on advanced digital forensics, network security, and cryptographic principles.",
    cgpa: "N/A"
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Another University",
    logo: "/logos/placeholder-logo.png", // IMPORTANT: Add your logo to the `public/logos` folder
    link: "#",
    period: "2020 - 2023",
    description: "Built a strong foundation in algorithms, data structures, and software development.",
    cgpa: "8.5/10"
  },
];

const eventsData = [
  {
    title: "Workshop on Ethical Hacking",
    organization: "Local Tech College",
    image: "/events/workshop.jpg", // IMPORTANT: Add your event photo to the `public/events` folder
    period: "Oct 2023",
    description: "Led a hands-on workshop for students on the fundamentals of penetration testing and vulnerability assessment."
  },
  {
    title: "Speaker at CyberSec Conference 2024",
    organization: "Online Conference",
    image: "/events/conference.jpg", // IMPORTANT: Add your event photo to the `public/events` folder
    period: "Jan 2024",
    description: "Presented on the topic of 'The Intersection of AI and Autonomous Penetration Testing'."
  },
];

const About = ({ hash }) => {
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    if (hash === 'events') {
      setActiveTab('events');
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        
        <div className="lg:flex lg:gap-12 items-start mb-16">
          <motion.div
            className="lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/Arya.jpg"
              alt="Arya Koner" 
              className="rounded-lg w-full border-2 border-gray-700" 
            />
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Cybersecurity Specialist and Digital Forensics Investigator bridging the gap between offensive security and advanced threat detection. Currently pursuing my M.Sc. in Cyber Forensic & Cyber Security, I combine academic rigor with practical field experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My background ranges from working as a Junior Cyber Crime Investigator, where I utilized tools like Autopsy and EnCase for deep forensic analysis, to performing high-level VAPT for enterprise networks using Burp Suite and Metasploit.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about the intersection of AI and security, I am currently developing BlackIce AI, an autonomous penetration testing framework. Whether I am reverse engineering malware, automating defenses with Python and Nim, or training the next generation of defenders, my goal remains the same: to build resilient digital infrastructures against evolving threats.
            </p>
          </motion.div>
        </div>

        {/* Tab Section for Education and Events */}
        <div className="mb-16">
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'education' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              <GraduationCap size={16} />
              Education
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'events' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              <Calendar size={16} />
              Events & Engagements
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
              {activeTab === 'education' && (
                <div className="space-y-4">
                  {educationData.map((item, index) => (
                    <div key={index} className="flex gap-5 bg-[#161b22]/70 border border-gray-700 p-5 rounded-lg">
                      <img src={item.logo} alt={`${item.institution} logo`} className="w-16 h-16 object-contain rounded-md bg-white p-1 self-start" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg text-white">{item.degree}</h3>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">{item.institution}</a>
                          </div>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-4">{item.period}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">CGPA: {item.cgpa}</p>
                        <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'events' && (
                <div className="space-y-4">
                  {eventsData.map((item, index) => (
                    <div key={index} className="bg-[#161b22]/70 border border-gray-700 rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                      <div className="p-5">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-bold text-lg text-white">{item.title}</h3>
                          <span className="text-xs text-gray-500">{item.period}</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-2">{item.organization}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Skills & Expertise</h2>
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
              <div key={skill} className="bg-blue-900/20 border border-blue-400/30 p-3 rounded-md text-center text-blue-300 text-sm">
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