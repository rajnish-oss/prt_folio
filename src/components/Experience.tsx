"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "React", className: "bg-white border border-black/10 rounded-full px-6 py-2 text-xs font-bold" },
  { name: "TypeScript", className: "bg-black text-white rounded-full px-6 py-2 text-xs font-bold" },
  { name: "Next.js", className: "bg-white border border-black/10 rounded-full px-6 py-2 text-xs font-bold" },
  { name: "Node.js", className: "bg-white border border-black/10 rounded-full px-6 py-2 text-xs font-bold" },
  { name: "Tailwind CSS", className: "bg-white border border-black/10 rounded-full px-6 py-2 text-xs font-bold" },
  { name: "FastAPI", className: "bg-white border border-black/10 rounded-full px-6 py-2 text-xs font-bold flex items-center gap-1" },
];

export default function Experience() {
  return (
    <section className="py-16 px-10 max-w-7xl mx-auto text-center relative overflow-hidden bg-white z-0">
      <div className="relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-xs font-medium mb-10"
        >
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
          <span>About</span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tighter max-w-4xl mx-auto leading-tight mb-10"
        >
          Self-taught <span className="bg-black text-white px-4 py-1 rounded-xl">developer</span> pursuing B.Tech in CSE <br />
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10"
        >
          Passionate about full-stack web development and creating solutions that deliver real value. 
          Always eager to learn and contribute to innovative projects.
        </motion.p>

        {/* Floating Logos Section */}
        <div className="relative h-40 mt-10 flex items-center justify-center flex-wrap gap-4 max-w-4xl mx-auto">
          <div className="text-xs font-black tracking-widest opacity-40 uppercase mr-4">Tech Stack & Skills</div>
          
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={logo.className}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
