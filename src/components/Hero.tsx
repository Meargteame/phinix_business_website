import { motion } from "motion/react";
import { ArrowRight, Code, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] diamond-gradient opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-diamond-green/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-diamond-green/20 bg-diamond-green/5 text-diamond-green text-xs font-semibold uppercase tracking-[0.2em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Engineering the Digital Future
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 leading-[0.95] tracking-tight max-w-5xl mx-auto"
        >
          BUILDING PRODUCTS THAT SET THE <span className="text-diamond-green text-glow italic">STANDARD</span><span className="text-diamond-green">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We create innovative software solutions that transform businesses and set new industry benchmarks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12"
        >
          {/* Primary Action: Request Meeting */}
          <motion.button 
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-2xl font-black text-xl text-obsidian bg-diamond-green overflow-hidden transition-all shadow-[0_20px_50px_rgba(0,255,135,0.4)] hover:shadow-[0_30px_60px_rgba(0,255,135,0.6)]"
          >
            {/* Animated Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-4">
              <span className="tracking-tight uppercase">Request Meeting</span>
              <div className="w-8 h-8 rounded-full bg-obsidian/10 flex items-center justify-center group-hover:bg-obsidian/20 transition-colors">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </span>
          </motion.button>
          
          {/* Secondary Action: Our Portfolio */}
          <motion.button 
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-2xl font-bold text-xl text-[var(--text-main)] border-2 border-[var(--border-color)] bg-[var(--bg-alt)]/50 backdrop-blur-xl hover:border-diamond-green/40 hover:bg-diamond-green/5 transition-all flex items-center gap-4"
          >
            <span className="tracking-tight uppercase">Our Portfolio</span>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-diamond-green animate-ping absolute inset-0" />
              <div className="w-3 h-3 rounded-full bg-diamond-green relative" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Icons for "Cool" factor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] p-4 glass rounded-2xl hidden lg:block"
        >
          <Code className="text-diamond-green w-8 h-8" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[15%] p-5 glass rounded-2xl hidden lg:block"
        >
          <Shield className="text-diamond-green w-10 h-10" />
        </motion.div>
      </div>
    </section>
  );
}
