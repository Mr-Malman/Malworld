import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rss, Youtube, Download, Globe, Linkedin, Twitter, Github } from "lucide-react";
import comptiaLogo from '../assets/comptia_logo.png';
import image2 from '../assets/image-2.png';

const AnimatedBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]"
      style={{ opacity: 0.8 }}
    />
  </div>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const CodeBracketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.378 2.25c.414 0 .75.336.75.75v14a.75.75 0 01-1.5 0v-14c0-.414.336-.75.75-.75z" clipRule="evenodd" />
  </svg>
);

const ProfileSidebar = () => (
  <div className="w-full lg:w-1/4 lg:pr-8 mb-12 lg:mb-0">
    <div className="lg:sticky lg:top-24">
      <img
        // IMPORTANT: Replace this with the path to your profile picture
        src="https://avatars.githubusercontent.com/u/108175654?v=4"
        alt="Arya Koner"
        className="rounded-full w-48 h-48 lg:w-full lg:h-auto border-2 border-gray-700 mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-100">Arya Koner</h1>
      <p className="text-lg text-gray-400 mb-4">Mr-Malman</p>
      <p className="text-gray-300 mb-4">
        I am the firewall to my own success. No malware, no hacker, no obstacle can break me. I stay updated, I stay strong, I stay secure!
      </p>
      <a
        href="https://drive.google.com/file/d/1XrzDEgWc2w1PKY7QRWDFd7tMkfJhNN1m/view?usp=sharing" // IMPORTANT: Replace with your Google Drive share link.
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded-md transition-all"
      >
        <Download size={16} />
        <span>View CV</span>
      </a>
      <div className="mt-6">
        <h3 className="text-gray-200 font-bold mb-2 text-center">Achievements</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.credly.com/badges/97e48515-d12d-411a-a2ec-2d3b69db97fe/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={comptiaLogo} alt="CompTIA Security+ Badge" className="h-32 w-auto" />
          </a>
          <a
            href="https://www.credly.com/badges/0dfc0950-4448-4d60-a9b6-014846e57e1f" // IMPORTANT: Replace with your second badge URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={image2} alt="CompTIA Network+ Badge" className="h-32 w-auto" />
          </a>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-700 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <p>📍 Noida, India</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mt-2">
          <Globe size={16} />
          <span>English, Hindi, Bengali</span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          {/* IMPORTANT: Replace '#' with your actual social media links */}
          <a href="https://github.com/Mr-Malman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/hackarya007/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          <a href="https://x.com/mr_malman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
          <a href="https://www.youtube.com/channel/UC4rnVgMJ7kTk7of-JuaUtLQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
        </div>
      </div>
    </div>
  </div>
);

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // IMPORTANT: Replace 'YOUR_CHANNEL_ID' with your actual YouTube Channel ID.
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC4rnVgMJ7kTk7of-JuaUtLQ`);
        const data = await res.json();
        if (data.status === 'ok' && data.items) {
          // Extract video ID from the link and take the latest 2 videos.
          const fetchedVideos = data.items.slice(0, 2).map(item => ({
            id: item.link.substring(item.link.indexOf("=") + 1),
            title: item.title,
          }));
          setVideos(fetchedVideos);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p className="text-gray-400 mt-12">Loading videos...</p>;
  if (!videos.length) return null;

  return (
    <div className="mt-12">
      <motion.h2
        className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Youtube size={20} /> Latest Videos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#161b22]/70 border border-gray-700 p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
            <h3 className="font-bold text-white truncate">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = ({ handleNavigation }) => {
  return (
    <div className="relative text-gray-300 font-sans min-h-screen overflow-hidden bg-[#0d1117]">
      <AnimatedBackground />
      <main className="container mx-auto px-6 py-24 relative z-10 pt-32">
        <div className="lg:flex">
          {/* Profile Sidebar */}
          <ProfileSidebar />

          {/* Main Content */}
          <div className="w-full lg:w-3/4 lg:pl-8">
            <motion.h2
              className="text-2xl font-bold text-gray-200 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Pinned
            </motion.h2>

            {/* Pinned Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Work Experience", desc: "View my professional journey and roles.", page: "projects", hash: "experience" },
                { title: "Projects", desc: "Explore my portfolio of security projects.", page: "projects", hash: "projects" },
                { title: "Certifications", desc: "See my industry credentials and qualifications.", page: "projects", hash: "certifications" },
                { title: "Events & Engagements", desc: "Check out my workshops and speaking events.", page: "about", hash: "events" }
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleNavigation(item.page, item.hash)}
                  className="text-left bg-[#161b22]/70 backdrop-blur-sm border border-gray-700 p-5 rounded-lg hover:border-blue-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </button>
              ))}
            </div>

            {/* GitHub Activity Section */}
            <div className="w-full">
              <motion.h2
                className="text-2xl font-bold text-gray-200 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                GitHub Activity
              </motion.h2>
              <motion.div
                className="bg-[#161b22]/70 backdrop-blur-sm border border-gray-700 p-4 rounded-lg flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://ghchart.rshah.org/216e39/Mr-Malman"
                  alt="GitHub Activity Chart"
                  className="w-full max-w-4xl rounded"
                />
              </motion.div>
            </div>

            {/* Medium Button Section */}
            <div className="mt-12">
              <motion.h2
                className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Rss size={20} /> Latest Articles
              </motion.h2>
              <div className="text-center bg-[#161b22]/70 backdrop-blur-sm border border-gray-700 p-6 rounded-lg">
                <p className="text-gray-400 mb-4">I share my latest research and articles on Medium.</p>
                <a
                  href="https://mr-malman.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded-md transition-all"
                >
                  View Articles on Medium <ChevronRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* YouTube Videos Section */}
            <YouTubeVideos />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;