import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "YARICHO SENIOR HOME CARE",
    category: "Business Website",
    image: "/yaricho-senior-home-care.png",
    url: "https://yaricho-senior-home-care.vercel.app/",
    description: "Professional senior home care services website with modern design and user-friendly interface."
  },
  {
    title: "TORRA PARKING",
    category: "Business Website",
    image: "/torra-parking.png",
    url: "https://torra-parking.vercel.app/",
    description: "Smart parking management solution with seamless booking and real-time availability."
  },
  {
    title: "E-COMMERCE PLATFORM",
    category: "E-Commerce",
    image: "/ecommerce-platform.png",
    url: "https://ecommerce-web-psi-one.vercel.app/",
    description: "Full-featured online shopping platform with modern UI and smooth user experience."
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-[var(--bg-main)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-20">
          <h2 className="text-sm font-bold text-diamond-green uppercase tracking-[0.3em] mb-4">Selected Works</h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Impactful <span className="text-[var(--text-muted)] opacity-20">Stories</span></h3>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full relative group overflow-hidden rounded-3xl cursor-pointer">
                <div className="absolute inset-0 bg-diamond-green/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover grayscale dark:brightness-100 brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 z-20 md:hidden font-display">
                   <h4 className="text-3xl font-black text-white">{project.title}</h4>
                </div>
              </div>

              <div className="flex-1 text-left">
                <span className="text-diamond-green font-bold text-xs uppercase tracking-widest block mb-4">0{index + 1} / {project.category}</span>
                <h4 className="text-5xl md:text-7xl font-black mb-6 hover:text-diamond-green transition-colors cursor-pointer">{project.title}</h4>
                <p className="text-[var(--text-muted)] text-lg max-w-md mb-8 italic font-medium">
                  "{project.description}"
                </p>
                <div className="flex items-center gap-6">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm text-[var(--text-main)] hover:text-diamond-green transition-colors uppercase tracking-widest"
                  >
                    VIEW LIVE SITE <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="h-px flex-1 bg-[var(--border-color)] hidden md:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
