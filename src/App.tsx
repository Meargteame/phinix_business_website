/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SimpleServices from "./components/SimpleServices";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 3,
    restDelta: 0.001
  });


  return (
    <ThemeProvider>
      <main className="relative min-h-screen">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-diamond-green origin-left z-[60]" 
          style={{ scaleX }} 
        />

        <Navbar />
        
        <div className="flex flex-col">
          <Hero />
          
          {/* Trusted By Section (Marqueeish) */}
          <div className="py-12 border-y border-[var(--border-color)] bg-[var(--bg-alt)]/50 overflow-hidden">
            <div className="flex items-center gap-12 whitespace-nowrap animate-pulse justify-center opacity-30">
              {["GOOGLE", "STRIFE", "NEBULA", "SYNTH", "PRISM", "APOLLO"].map((brand) => (
                <span key={brand} className="text-xl md:text-3xl font-black font-display tracking-tighter mx-4">{brand}</span>
              ))}
            </div>
          </div>

          <Services />
          <SimpleServices />
          <Work />
          
          {/* Statistics or Punchy Statement */}
          <section className="py-32 bg-diamond-green-deep overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center font-black text-[30vw] pointer-events-none select-none leading-none">
              ENGINEER
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white italic mb-12">
                Software is the <span className="text-diamond-green underline decoration-4 underline-offset-8">DNA</span> of modern business.
              </h2>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-20">
                <div className="text-center">
                  <p className="text-5xl md:text-7xl font-black text-white mb-2">20+</p>
                  <p className="text-xs font-bold text-diamond-green uppercase tracking-[0.3em]">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-7xl font-black text-white mb-2">08</p>
                  <p className="text-xs font-bold text-diamond-green uppercase tracking-[0.3em]">Global Offices</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl md:text-7xl font-black text-white mb-2">99%</p>
                  <p className="text-xs font-bold text-diamond-green uppercase tracking-[0.3em]">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </section>

          <Contact />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}
