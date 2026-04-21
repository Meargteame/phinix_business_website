import { motion } from "motion/react";
import { ShoppingBag, Building, Terminal, Code2, Smartphone, Laptop, Settings, Layers, Cpu } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Bespoke e-commerce platforms designed to convert visitors into loyal customers.",
    tag: "Revenue Focused"
  },
  {
    icon: Building,
    title: "Business Websites",
    desc: "Professional high-authority websites that establish your brand as a market leader.",
    tag: "Identity Craft"
  },
  {
    icon: Terminal,
    title: "Software Dev",
    desc: "High-performance software solutions engineered with precision and modern stacks.",
    tag: "Core Engineering"
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailor-made software built to solve your unique business challenges and goals.",
    tag: "Targeted Solutions"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Feature-rich iOS and Android apps with fluid UI and seamless user experiences.",
    tag: "Native Feel"
  },
  {
    icon: Laptop,
    title: "Web Applications",
    desc: "Complex, scalable web apps developed for high-load and complex workflows.",
    tag: "Cloud Native"
  },
  {
    icon: Settings,
    title: "Internal Tools",
    desc: "Custom dashboards and automation tools to streamline your internal operations.",
    tag: "Efficiency Boost"
  },
  {
    icon: Layers,
    title: "Legacy Systems",
    desc: "Modernizing and scaling existing systems without compromising stability or data.",
    tag: "Digital Evolution"
  },
  {
    icon: Cpu,
    title: "Web3 & Blockchain",
    desc: "Decentralized applications and smart contract engineering for the next web.",
    tag: "Future Proof"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-diamond-green uppercase tracking-[0.3em] mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black leading-[1.1]">Expertise that delivers <span className="text-diamond-green italic">Results</span>.</h3>
          </div>
          <p className="text-[var(--text-muted)] max-w-xs text-sm font-medium leading-relaxed">
            We don't just write code; we engineer competitive advantages. Our multidisciplinary team tackles the hardest problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--bg-main)] p-10 group hover:bg-[var(--bg-alt)] transition-all cursor-crosshair border border-transparent hover:border-diamond-green/20"
            >
              <div className="w-14 h-14 rounded-xl bg-diamond-green/5 flex items-center justify-center mb-8 group-hover:bg-diamond-green/10 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-diamond-green" />
              </div>
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest block mb-2">{service.tag}</span>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-diamond-green opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                DISCOVER MORE <service.icon className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
