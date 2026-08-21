"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Products() {
  return (
    <section id="products" className="mx-auto w-full max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Our Products
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-2xl dark:border-slate-800 dark:bg-[#0c0f14]"
        >
          <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 blur-3xl opacity-20 transition-opacity group-hover:opacity-40" />

          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl overflow-hidden shadow-lg bg-slate-50 dark:bg-slate-900">
              <Image
                src="/pixelmotion_logo.png"
                alt="PixelMotion logo"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">PixelMotion</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Modern creative editing application for Android. Edit images and videos with a powerful, intuitive interface built with Kotlin.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">Android</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">Kotlin</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">Rust</span>
            </div>
            <div className="flex items-center justify-end border-t border-slate-100 pt-4 dark:border-slate-800">
              <Link
                href="/privacy-policy/pixelmotion"
                className="text-xs font-medium text-slate-500 transition-colors hover:text-purple-600 dark:text-slate-500 dark:hover:text-purple-400"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
