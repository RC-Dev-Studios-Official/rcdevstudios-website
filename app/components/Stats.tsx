"use client";

import { motion } from "framer-motion";
import { stats } from "../data/content";

export function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-10 mb-20 w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card flex flex-col justify-between gap-8 rounded-3xl p-8 shadow-2xl sm:flex-row sm:flex-wrap lg:p-12"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center justify-center text-center sm:min-w-[150px]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-[2.5rem] font-black leading-none text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
