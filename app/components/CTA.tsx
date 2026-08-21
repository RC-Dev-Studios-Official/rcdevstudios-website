"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-[100px] dark:from-pink-600/20 dark:via-purple-600/20 dark:to-blue-600/20" />
      </div>

      <div className="mx-auto w-full max-w-[1000px] px-4 text-center sm:px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[800px] text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white"
        >
          Have an idea? <br />
          <span className="text-gradient">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-[600px] text-xl text-slate-600 dark:text-slate-400"
        >
          Tell us what you&apos;re building and let&apos;s turn your idea into a real product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rcdev-gradient rounded-full px-10 py-5 text-lg font-bold text-white shadow-xl shadow-purple-500/25"
          >
            Start a Project →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-[#0c0f14] dark:text-white dark:hover:bg-[#11161d]"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
