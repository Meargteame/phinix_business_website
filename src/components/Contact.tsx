import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-[500px] diamond-gradient opacity-5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-sm font-bold text-diamond-green uppercase tracking-[0.3em] mb-4">Let's Talk</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to build something <span className="text-glow text-diamond-green">Legendary?</span></h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-diamond-green group-hover:bg-diamond-green/10 transition-all">
                  <Mail className="w-5 h-5 text-diamond-green" />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-[var(--text-main)] font-medium">hello@phoenix.enterprise</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-diamond-green group-hover:bg-diamond-green/10 transition-all">
                  <Phone className="w-5 h-5 text-diamond-green" />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-[var(--text-main)] font-medium">+1 571 277 2616</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-diamond-green group-hover:bg-diamond-green/10 transition-all">
                  <MapPin className="w-5 h-5 text-diamond-green" />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest">Our Studio</p>
                  <p className="text-[var(--text-main)] font-medium">7945 FM 2757, Forney TX 75126</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 md:p-14 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-diamond-green/10 blur-3xl" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-full px-8 py-4 focus:outline-none focus:border-diamond-green transition-colors text-[var(--text-main)] placeholder:[var(--text-muted)]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-full px-8 py-4 focus:outline-none focus:border-diamond-green transition-colors text-[var(--text-main)] placeholder:[var(--text-muted)]/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest ml-4">Subject</label>
                <select className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-full px-8 py-4 focus:outline-none focus:border-diamond-green transition-colors text-[var(--text-main)] appearance-none cursor-pointer">
                  <option className="bg-[var(--bg-main)] text-[var(--text-main)]">Software Development</option>
                  <option className="bg-[var(--bg-main)] text-[var(--text-main)]">Product Design</option>
                  <option className="bg-[var(--bg-main)] text-[var(--text-main)]">Cloud Migration</option>
                  <option className="bg-[var(--bg-main)] text-[var(--text-main)]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest ml-4">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[2rem] px-8 py-6 focus:outline-none focus:border-diamond-green transition-colors text-[var(--text-main)] resize-none placeholder:[var(--text-muted)]/50"
                />
              </div>

              <button className="w-full bg-diamond-green text-obsidian font-black py-5 rounded-full hover:bg-diamond-green-light transition-all shadow-[0_0_20px_rgba(0,255,135,0.2)] flex items-center justify-center gap-3">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
