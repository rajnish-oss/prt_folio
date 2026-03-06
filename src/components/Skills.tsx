"use client";

import { motion } from "framer-motion";
import MagicBento, { BentoCardProps } from "./reactbits/bento";

const skillsData: BentoCardProps[] = [
  {
    color: "#0a0a0a",
    title: "Core Languages",
    description: "The foundation of my development stack, from low-level systems to modern web.",
    label: "Languages",
    icon: "https://devicon-website.vercel.app/api/typescript/original.svg",
    icons: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", icon: "https://devicon-website.vercel.app/api/typescript/original.svg" }
    ]
  },
  {
    color: "#0a0a0a",
    title: "Web Frameworks",
    description: "Building fast, scalable, and secure full-stack web applications.",
    label: "Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    icons: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://devicon-website.vercel.app/api/nextjs/original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Nest.js", icon: "https://devicon-website.vercel.app/api/nestjs/plain.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      { name: "Fast API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    color: "#0a0a0a",
    title: "Motion & Graphics",
    description: "Bringing websites to life with high-performance animations and 3D scenes.",
    label: "Interactivity",
    icon: "https://cdn.simpleicons.org/greensock/88CE02",
    icons: [
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/ffffff" },
      { name: "ShadCN UI", icon: "https://ui.shadcn.com/apple-touch-icon.png" }
    ]
  },
  {
    color: "#0a0a0a",
    title: "Data Management",
    description: "Reliable and performant storage solutions for complex data needs.",
    label: "Databases",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    icons: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true }
    ]
  },
  {
    color: "#0a0a0a",
    title: "Infrastructure",
    description: "Modern deployment, CI/CD, and cloud services for global scale.",
    label: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    icons: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  },
  {
    color: "#0a0a0a",
    title: "UI/UX Design",
    description: "Crafting beautiful, user-centric interfaces and brand identities.",
    label: "Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    icons: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-16 px-10 rounded-[4rem] mx-4 mb-4 overflow-hidden dark-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
          >
            My Extensive <br /> List of <span className="text-lime-400">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            A curated selection of my technical expertise, organized into <br className="hidden md:block" /> a high-performance interactive grid.
          </motion.p>
        </div>

        <div className="w-full">
          <MagicBento 
            cardData={skillsData}
            glowColor="163, 230, 53" // Lime-400 equivalent in RGB
            enableTilt={true}
            enableMagnetism={true}
            enableStars={true}
            enableSpotlight={true}
            particleCount={15}
            spotlightRadius={350}
          />
        </div>
      </div>
    </section>
  );
}
