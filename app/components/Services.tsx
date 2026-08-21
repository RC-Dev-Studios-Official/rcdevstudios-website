"use client";

import { motion } from "framer-motion";
import { services } from "../data/content";

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-12">
        <div className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-widest text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
          What We Do
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Services That Drive <br /> Real Results
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-[#0c0f14]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-pink-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 group-hover:opacity-100" />
              
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 transition-colors group-hover:bg-purple-50 group-hover:text-purple-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-purple-900/30 dark:group-hover:text-purple-400">
                <Icon className="h-7 w-7" />
              </div>
              
              <div className="relative z-10 mt-8">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                  →
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
