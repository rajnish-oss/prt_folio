"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Linkedin, Twitter, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DotExpandButton from "./DotExpandButton";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }:{ isSidebarOpen: boolean, setIsSidebarOpen: (isOpen: boolean) => void }) {
  

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 max-w-7xl mx-auto w-full absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="text-2xl font-black tracking-tighter">
          RAJNISH.XIO
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:opacity-60 transition-opacity">Home</a>
          <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
          <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#journey" className="hover:opacity-60 transition-opacity">Journey</a>

          <Link href="/portfolio.pdf">
            <DotExpandButton text="Resume" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden p-2 hover:bg-black/10 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-black" />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: 0.4
              }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-black/10 z-50 shadow-2xl md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} className="text-black/70" />
              </button>

              {/* Content */}
              <div className="pt-20 px-8 h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-black/5">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">@R</span>
                    </div>
                    <div>
                      <p className="text-black font-semibold">@rajnishpandey</p>
                      <p className="text-black/60 text-sm">Full-Stack Developer</p>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-black mb-4">Navigation</h3>
                    <motion.a
                      href="#home"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="text-black/80 font-medium">Home</span>
                    </motion.a>

                    <motion.a
                      href="#experience"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="text-black/80 font-medium">Experience</span>
                    </motion.a>

                    <motion.a
                      href="#skills"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="text-black/80 font-medium">Skills</span>
                    </motion.a>

                    <motion.a
                      href="#projects"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="text-black/80 font-medium">Projects</span>
                    </motion.a>

                    <motion.a
                      href="#journey"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className="text-black/80 font-medium">Journey</span>
                    </motion.a>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-black">Connect</h3>
                    <motion.a
                      href="https://x.com/rajnish_xio"
                      target="blank"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                     <Twitter size={18} className="cursor-pointer hover:text-lime-400 transition-colors" />
                      <span className="text-black/80 font-medium">Twitter</span>
                      
                    </motion.a>

                    <motion.a
                      href="https://github.com/rajnish-oss" target="blank"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github  size={18} className="cursor-pointer hover:text-lime-400 transition-colors" />
                      <span className="text-black/80 font-medium">Github</span>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/rajnish-pandey-9a052b216/"
                      target="blank"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 transition-colors duration-200 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin  size={18} className="cursor-pointer hover:text-lime-400 transition-colors" />
                      <span className="text-black/80 font-medium">Linkedin</span>
                    </motion.a>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link href="/portfolio.pdf" onClick={() => setIsSidebarOpen(false)}>
                      <DotExpandButton text="Resume" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
