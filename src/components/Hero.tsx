"use client";

import DotExpandButton from "./DotExpandButton";
import { Github , Twitter, Linkedin  } from "lucide-react";
import { motion } from "framer-motion";



export default function Hero({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <section className="relative min-h-screen pt-16 pb-10 px-10 flex flex-col items-center justify-center overflow-hidden bg-white z-0">
      {/* Moving Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-30">
        <motion.div
          initial={{ x: 0, y: 0, scale: 1 }}
          whileInView={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-lime-300/30 blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ x: 0, y: 0, scale: 1 }}
          whileInView={{
            x: [0, -60, 60, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-lime-400/20 blur-[150px] rounded-full"
        />
      </div>

      {/* Social Links (Left Side) */}
      {typeof window !== 'undefined' && window.innerWidth > 550 && <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-black"
        >
          <a href="https://x.com/rajnish_xio" target="blank"><Twitter size={18} className="cursor-pointer hover:text-lime-400 transition-colors" /></a>
          <a href="https://github.com/rajnish-oss" target="blank"><Github  size={18} className="cursor-pointer hover:text-lime-400 transition-colors" /></a>
          <a href="https://www.linkedin.com/in/rajnish-pandey-9a052b216/" target="blank"><Linkedin  size={18} className="cursor-pointer hover:text-lime-400 transition-colors" /></a>
          
          
          <div className="w-px h-12 bg-black/20 my-2" />
          <span className="[writing-mode:vertical-lr] text-xs font-bold tracking-widest opacity-80 rotate-180">@rajnishpandey</span>
        </motion.div>
      </div>}

      {/* Main Content */}
      <div className="max-w-4xl text-center space-y-12 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter leading-none"
        >
          Full-Stack <span className="bg-black text-white px-6 py-1 rounded-2xl inline-block mx-1">Developer</span> <br />
          Building Digital <span className="bg-black text-white px-6 py-1 rounded-2xl inline-block mx-1">Solutions</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-black/60 text-center max-w-2xl leading-relaxed"
          >
            B.Tech CS student passionate about creating full-stack web applications that solve real-world problems with clean, scalable code.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
