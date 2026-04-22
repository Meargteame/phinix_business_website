import { motion } from "motion/react";
import { Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navItems = ["Services", "Work", "Process", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 px-6 py-4 flex items-center justify-between glass rounded-full lg:px-12"
    >
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-14 h-14 relative flex items-center justify-center transition-all duration-700 group-hover:scale-110">
          <img 
            src="/logo.webp" 
            alt="Phoenix Logo" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,255,135,0.6)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.querySelector('.fallback-container')?.classList.remove('hidden');
            }}
          />
          <div className="fallback-container hidden w-full h-full relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-diamond-green via-yellow-400 to-orange-500 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700 blur-[2px]" />
             <div className="absolute inset-0.5 bg-[var(--bg-main)] rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
             <Zap className="relative z-10 text-diamond-green w-7 h-7 fill-current drop-shadow-[0_0_10px_rgba(0,255,135,0.8)]" />
          </div>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="font-display font-black text-2xl tracking-tighter text-[var(--text-main)] uppercase italic leading-none">
            PHOENIX
          </span>
          <span className="font-display font-bold text-sm tracking-[0.3em] text-diamond-green uppercase leading-none opacity-80">
            ENTERPRISE
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-[var(--text-muted)] hover:text-diamond-green transition-colors uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-[var(--border-color)] hover:bg-diamond-green/10 transition-colors"
        >
          {theme === "light" ? <Moon className="w-5 h-5 text-diamond-green" /> : <Sun className="w-5 h-5 text-diamond-green" />}
        </button>
        <button className="bg-diamond-green text-obsidian px-6 py-2 rounded-full font-bold text-sm hover:bg-diamond-green-light transition-all shadow-[0_0_15px_rgba(0,255,135,0.3)] hover:shadow-[0_0_25px_rgba(0,255,135,0.5)]">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
