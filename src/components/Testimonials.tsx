"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 px-10 max-w-7xl mx-auto relative overflow-hidden bg-white z-0">
      <div className="relative z-10">
        {/* Background Blobs */}
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-lime-300/20 blur-[100px] rounded-full -z-10 animate-pulse" />

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-xs font-medium mb-10"
        >
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
          <span>Testimonials</span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-black tracking-tighter max-w-4xl leading-tight mb-10"
        >
          Internship <span className="bg-black text-white px-4 py-1 rounded-xl">Experience</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/50 text-sm md:text-base max-w-xl leading-relaxed mb-10"
        >
          During my internship at Uzence, I gained hands-on experience building scalable UI components
          and working in a fast-paced startup environment.
        </motion.p>

        {/* Testimonial Slider Mockup */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex gap-4 mb-8 md:mb-0">
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 flex-1">
            {/* Avatar Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 bg-teal-100 rounded-[3rem] p-4 group"
            >
              {/* Mock illustration with SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="50" y="50" width="100" height="100" fill="#fecaca" rx="20" />
                <circle cx="80" cy="90" r="10" fill="#000" />
                <circle cx="120" cy="90" r="10" fill="#000" />
                <path d="M80 130 Q100 150 120 130" stroke="#000" strokeWidth="4" fill="none" />
                <path d="M40 80 Q100 40 160 80" stroke="#000" strokeWidth="8" fill="none" />
              </svg>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                <Instagram size={14} className="text-black/60" />
                <Facebook size={14} className="text-black/60" />
                <Twitter size={14} className="text-black/60" />
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-black text-white p-12 rounded-[3rem] space-y-8 border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-4 h-4 bg-blue-600 rounded-sm" />
                <span className="text-xs font-bold uppercase tracking-widest">UZENCE</span>
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
                "Rajnish quickly adapted to our startup workflow and built critical UI components that improved our product's user experience and performance."
              </p>

              <div className="space-y-1">
                <h4 className="text-lg font-bold">Uzence Team</h4>
                <p className="text-sm opacity-40 uppercase tracking-widest">AI Platform Startup</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
