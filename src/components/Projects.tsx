"use client";

import { motion } from "framer-motion";
import CircularGallery from "./reactbits/circullarGallery";

const projects = [
  {
    id: 1,
    title: "Career Coach",
    code: "https://github.com/rajnish-oss/XioCoach",
    image: "./careerAi.png",
  },
  {
    id: 2,
    title: "MindMaster",
    live: "https://mindmaster-swart.vercel.app/",
    code: "https://github.com/rajnish-oss/mindMaster",
    image: "./mindMaster.png",
  },
  {
    id: 3,
    title: "Xio Articles",
    // live: "https://rajnish3xio.pythonanywhere.com/",
    code: "https://github.com/rajnish-oss/Blogging-System-Django",
    image: "./xio.png",
  },
  {
    id: 4,
    title: "FreeLive",
    live: "https://free-live.vercel.app/",
    code: "https://github.com/rajnish-oss/FREELive",
    image: "./freeLive.png",
  },
  {
    id: 5,
    title: "ChatApp",
    code: "https://github.com/rajnish-oss/Chat-app",
    image: "./chatApp.png",
  }
];

const galleryItems = projects.map(project => ({
  image: project.image,
  text: project.title,
  code: project.code || "",
  live: project.live || "",
}));

export default function Projects() {
  return (
    <section className="bg-black text-white py-16 px-10 rounded-[4rem] mx-4 mb-4 overflow-hidden dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs font-medium"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>Latest Projects</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black max-w-4xl mx-auto tracking-tighter"
          >
            Take a look at the latest <br /> projects I've done
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full h-105"
        >
          <CircularGallery 
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 24px Figtree"
            scrollSpeed={2}
            scrollEase={0.05}
            cardWidth={window.innerWidth < 420 ? 500 : 1800}
          />
        </motion.div>
      </div>
    </section>
  );
}
