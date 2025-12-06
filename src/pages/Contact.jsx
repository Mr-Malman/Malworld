import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a real application, you would connect this to a service like EmailJS, Formspree, or a custom backend.
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-center text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>

        <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm open to freelance opportunities, collaborations, and conducting workshops. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-100">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:arya.koner07@gmail.com" className="text-gray-200 font-semibold hover:underline">arya.koner07@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/hackarya007/" target="_blank" rel="noopener noreferrer" className="text-gray-200 font-semibold hover:underline">linkedin.com/in/hackarya007</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Github className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href="https://github.com/Mr-Malman" target="_blank" rel="noopener noreferrer" className="text-gray-200 font-semibold hover:underline">github.com/Mr-Malman</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Twitter className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Twitter</p>
                  <a href="https://x.com/mr_malman" target="_blank" rel="noopener noreferrer" className="text-gray-200 font-semibold hover:underline">@mr_malman</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#161b22]/70 border border-gray-700 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1117] border border-gray-600 rounded-md p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1117] border border-gray-600 rounded-md p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#0d1117] border border-gray-600 rounded-md p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;