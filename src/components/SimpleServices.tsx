import { motion } from "motion/react";
import { Sparkles, Gauge, LifeBuoy, SearchCode } from "lucide-react";

const simpleServices = [
  {
    icon: Sparkles,
    title: "Rapid Landing Pages",
    desc: "High-conversion, lightning-fast landing pages delivered in record time.",
    price: "From $2k"
  },
  {
    icon: Gauge,
    title: "Performance Audit",
    desc: "A deep dive into your site's speed and SEO with actionable fixes.",
    price: "From $1k"
  },
  {
    icon: SearchCode,
    title: "Bug Squashing",
    desc: "Quick fixes and security patches for your existing applications.",
    price: "Hourly Rate"
  },
  {
    icon: LifeBuoy,
    title: "Monthly Support",
    desc: "Peace of mind with 24/7 monitoring and priority feature updates.",
    price: "Subscription"
  }
];

export default function SimpleServices() {
  return (
    <section className="py-20 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-diamond-green uppercase tracking-[0.4em] mb-4">Quick Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-black">Fast-Track <span className="text-diamond-green">Services</span>.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {simpleServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:border-diamond-green/50 transition-all group"
            >
              <div className="w-12 h-12 bg-diamond-green/10 rounded-2xl flex items-center justify-center mb-6 text-diamond-green group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="text-[10px] font-bold text-diamond-green uppercase tracking-widest">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
