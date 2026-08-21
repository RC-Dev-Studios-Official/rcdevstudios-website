"use client";

import { motion } from "framer-motion";
import { technologies } from "../data/content";

export function Technologies() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Technology We Use
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-sm transition-colors hover:border-purple-300 hover:shadow-md dark:border-slate-800 dark:bg-[#0c0f14] dark:hover:border-purple-700"
          >
            <span className="font-semibold text-slate-700 dark:text-slate-300">{tech}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
