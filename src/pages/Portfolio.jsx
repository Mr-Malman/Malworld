import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Certifications",
      items: ["CEH (Certified Ethical Hacker)", "OSCP (Offensive Security Certified Professional)", "CompTIA Security+"]
    },
    {
      title: "Experience",
      items: ["Security Researcher at Malworld", "Penetration Testing Intern", "Security Analyst Freelancer"]
    },
    {
      title: "Publications",
      items: ["Network Security Best Practices", "Ethical Hacking Fundamentals", "Zero-Day Vulnerability Analysis"]
    },
    {
      title: "Awards",
      items: ["Bug Bounty Hunter - Top 10", "Security Challenge Winner 2024", "Open Source Security Contributor"]
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
          Portfolio
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((section, i) => (
            <motion.div
              key={section.title}
              className="bg-white/5 backdrop-blur-lg border border-red-500/20 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Journey Timeline</h2>
          <div className="space-y-6">
            {[
              { year: "2020", title: "Started Cybersecurity Journey", desc: "Began learning networking and security fundamentals" },
              { year: "2021", title: "First Certification", desc: "Achieved CompTIA Security+ certification" },
              { year: "2022", title: "Bug Bounty Success", desc: "Found and reported critical vulnerabilities" },
              { year: "2023", title: "Advanced Training", desc: "Completed advanced penetration testing course" },
              { year: "2024", title: "Professional Growth", desc: "Working as security researcher and consultant" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  {i !== 4 && <div className="w-1 h-20 bg-red-500/30 mt-2"></div>}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-red-500 font-semibold">{item.year}</p>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;