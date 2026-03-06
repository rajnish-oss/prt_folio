"use client";

import { motion } from "framer-motion";
import DotExpandButton from "./DotExpandButton";

const processes = [
  {
    title: "Discovery",
    description: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    highlight: false
  },
  {
    title: "Strategy",
    description: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    highlight: true
  },
  {
    title: "Design",
    description: "After we have a comprehensive understanding of your brand, we're ready to move into design. Each page or will be designed, reviewed, and given your stamp of approval.",
    highlight: false
  },
  {
    title: "Build",
    description: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    highlight: false
  }
];

export default function WorkProcess() {
  return (
    <section className="bg-black text-white py-16 px-10 rounded-[4rem] mx-4 mb-4 overflow-hidden dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs font-medium"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>Work Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold max-w-xl"
          >
            My Work Process
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className={`p-10 rounded-[3rem] space-y-8 border border-white/5 relative group transition-all cursor-default ${
                process.highlight ? "bg-lime-400 text-black border-none" : "bg-[#111111]"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                  process.highlight ? "bg-black text-white" : "bg-white/10 text-white"
                }`}>
                  {process.title}
                </div>
                <div className="flex items-center gap-1">
                  <DotExpandButton text="Read More" className="px-4 py-2 text-xs" />
                </div>
              </div>
              
              <p className={`text-base md:text-lg leading-relaxed ${
                process.highlight ? "text-black/80 font-medium" : "text-white/40"
              }`}>
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
