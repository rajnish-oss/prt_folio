"use client"

import { Briefcase } from "lucide-react"; 
import ScrollFloat from "./reactbits/ScrollFloat"; 
import { motion, useScroll, useTransform } from "framer-motion"; 
import { useRef } from "react"; 

const experiences = [ 
  { 
    year: "SEP 2025", 
    endYear: "NOV 2025", 
    role: "Frontend Developer", 
    company: "Uzence", 
    description: 
      "Built reusable UI components like dropdowns, comboboxes, selects, and KBD as part of an in-house AI library. Implemented clean, scalable frontend architecture ensuring component consistency, accessibility, and performance. Collaborated with founders and designers to translate product requirements into functional UI interactions.", 
    skills: ["React", "TypeScript", "UI Components", "Accessibility"], 
  }, 
]; 

const ExperienceCard = ({ 
  experience, 
  index, 
}: { 
  experience: (typeof experiences)[0]; 
  index: number; 
}) => { 
  const cardRef = useRef<HTMLDivElement>(null); 
  const { scrollYProgress } = useScroll({ 
    target: cardRef, 
    offset: ["start end", "center center"], 
  }); 

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]); 
  const x = useTransform(scrollYProgress, [0, 0.5], [40, 0]); 

  return ( 
    <div ref={cardRef} className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10"> 
      {/* Left: Year rail */} 
      <div className="relative flex flex-col items-center"> 
        {/* Year text */} 
        <div className="sticky top-32 text-right w-full"> 
          <span className="font-display font-bold text-2xl md:text-3xl text-primary"> 
            {experience.year} 
          </span> 
          <span className="block text-muted-foreground text-xs mt-1"> 
            — {experience.endYear} 
          </span> 
        </div> 
      </div> 

      {/* Right: Card */} 
      <motion.div 
        style={{ opacity, x }} 
        className="relative pb-8" 
      > 
        {/* Connector line */} 
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-5 md:-translate-x-7" /> 
        
        {/* Dot on line */} 
        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-[26px] md:-translate-x-[34px]" /> 

        {/* Card */} 
        <div className="relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-8 group hover:border-primary/40 transition-all duration-300 overflow-hidden"> 
          {/* Glow edge */} 
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> 
          
          {/* Content */} 
          <div className="relative z-10"> 
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2"> 
              {experience.role} 
            </h3> 

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4"> 
              <div className="flex items-center gap-1.5"> 
                <Briefcase className="w-4 h-4 text-primary/70" /> 
                <span>{experience.company}</span> 
              </div> 
            </div> 

            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5"> 
              {experience.description} 
            </p> 

            <div className="flex flex-wrap gap-2"> 
              {experience.skills.map((skill, i) => ( 
                <span 
                  key={i} 
                  className="px-3 py-1 bg-primary/15 border border-primary/30 rounded-full text-xs text-foreground font-medium" 
                > 
                  {skill} 
                </span> 
              ))} 
            </div> 
          </div> 
        </div> 
      </motion.div> 
    </div> 
  ); 
}; 

const Journey = () => { 
  const sectionRef = useRef<HTMLElement>(null); 
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"], 
  }); 

  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]); 

  return ( 
    <section ref={sectionRef} className="relative py-16 bg-white overflow-hidden z-0"> 
      <div className="relative z-10">
        {/* Header */} 
        <div className="text-center mb-8 px-6"> 
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"> 
            MY{" "} 
            <span className="text-primary"> 
              <ScrollFloat 
                animationDuration={1.2} 
                ease="back.out(1.7)" 
                stagger={0.04} 
              > 
                JOURNEY 
              </ScrollFloat> 
            </span> 
          </h2> 
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light"> 
            A timeline of my professional growth and career milestones. 
          </p> 
        </div> 

        {/* Progress bar (left edge) */} 
        <div className="absolute left-4 md:left-8 top-48 bottom-24 w-[2px] bg-border/30 hidden lg:block"> 
          <motion.div 
            style={{ height: progressHeight }} 
            className="w-full bg-primary origin-top" 
          /> 
        </div> 

        {/* Timeline */} 
        <div className="max-w-3xl mx-auto px-6 md:px-8"> 
          {experiences.map((exp, index) => ( 
            <ExperienceCard key={index} experience={exp} index={index} /> 
          ))} 
        </div> 
      </div>
    </section> 
  ); 
}; 

export default Journey;
