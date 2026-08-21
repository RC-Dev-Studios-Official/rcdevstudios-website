"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroHome from "../assets/rc_dev_hero_exact.svg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-24 pb-16 lg:pt-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[120px] dark:bg-pink-600/20" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/20" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[720px]"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/50 px-4 py-2 text-sm font-medium text-pink-600 backdrop-blur-sm dark:border-pink-900/50 dark:bg-pink-900/10 dark:text-pink-400">
            <span className="text-base">✦</span>
            Welcome to RC Dev Studios
          </div>

          <h1 className="text-[3.5rem] font-black leading-[1.05] tracking-tight text-slate-900 sm:text-[4.5rem] lg:text-[6.5rem] dark:text-white">
            We Build.
            <br />
            You{" "}
            <span className="text-gradient">
              Grow.
            </span>
          </h1>

          <p className="mt-8 max-w-[540px] text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
            We design and develop digital products, tools, and experiences that
            help your business scale faster and smarter.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-rcdev-gradient rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/25"
            >
              Explore Our Services →
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-[#0f141a] dark:text-white dark:hover:bg-[#1a212b]"
            >
              Watch Showreel
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-8 flex w-full items-center justify-center lg:mt-0"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[600px]"
          >
            <Image
              src={heroHome}
              alt="RC Dev Studios hero illustration"
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating Accents */}
          <motion.div
            animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-10 h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 blur-xl opacity-60"
          />
          <motion.div
            animate={{ x: [10, -10, 10], y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-xl opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
