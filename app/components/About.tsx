"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Product-focused development",
  "Modern UI/UX",
  "High-performance applications",
  "Scalable backend architecture",
  "AI-powered experiences",
  "Cloud infrastructure",
];

export function About() {
  return (
    <section id="about" className="bg-slate-50 py-24 dark:bg-[#080a0e]">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        
        {/* Left side visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 p-8 shadow-inner dark:bg-slate-900/50"
        >
          <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-3xl dark:bg-[#050507]/40" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative z-10 h-64 w-64 rounded-full border border-slate-200 bg-gradient-to-tr from-white to-slate-50 shadow-2xl dark:border-slate-800 dark:from-[#0c0f14] dark:to-[#11161d]"
          >
            <div className="absolute inset-4 rounded-full border border-slate-100 dark:border-slate-800" />
            <div className="absolute inset-8 rounded-full border border-slate-50 dark:border-slate-900" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gradient text-4xl font-black">RC</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold tracking-widest text-slate-600 uppercase dark:bg-slate-800 dark:text-slate-400">
            About RC Dev Studios
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            We Turn Ideas Into Digital Products.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            RC Dev Studios is a premium technology agency. We don&apos;t just write code; we design, develop, and launch modern digital products and software that help businesses scale and innovate.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-purple-500" />
                <span className="font-medium text-slate-800 dark:text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
