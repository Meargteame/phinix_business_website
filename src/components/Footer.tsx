import { Zap, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <img 
                src="/logo.webp" 
                alt="Phoenix Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                }}
              />
              <div className="fallback hidden w-full h-full relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-diamond-green via-orange-500 to-red-500 rounded-lg rotate-45 blur-[1px]" />
                 <div className="absolute inset-0.5 bg-[var(--bg-main)] rounded-lg rotate-45" />
                 <Zap className="relative z-10 text-diamond-green w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-display font-black text-xl tracking-tighter text-[var(--text-main)] uppercase italic leading-none">
                PHOENIX
              </span>
              <span className="font-display font-bold text-[10px] tracking-[0.2em] text-diamond-green uppercase leading-none opacity-80">
                ENTERPRISE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-diamond-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-diamond-green transition-colors">Terms</a>
            <a href="#" className="hover:text-diamond-green transition-colors">Career</a>
            <a href="#" className="hover:text-diamond-green transition-colors">Press</a>
          </div>

          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 cursor-pointer hover:text-diamond-green transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-diamond-green transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-diamond-green transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-diamond-green transition-colors" />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2026 PHOENIX ENTERPRISE — ENGINEERED FOR EXCELLENCE
        </div>
      </div>
    </footer>
  );
}
